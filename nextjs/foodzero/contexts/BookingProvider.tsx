import useSWR from 'swr'
import { createContext, ReactNode, useCallback, useMemo } from 'react'

// Constants
import { USERS_ENDPOINT } from '@constants/endPoints'

// Types
import { IReservations, IUser } from '@self-types/index'

// Services
import { addToBooking } from '@services/index'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

export interface IBookingContext {
  booking: IReservations[]
  addBooking: (booking: IReservations[]) => Promise<void>
}

export type TBookingContext = {
  children: ReactNode
}

export const initBooking = []
export const BookingContext = createContext<IBookingContext | null>(null)

export const BookingProvider = ({ children }: TBookingContext): JSX.Element => {
  const { userId } = useAuthContext()
  const { data: users, mutate } = useSWR<IUser>(`${USERS_ENDPOINT}/${userId}`)

  const addBooking = useCallback(
    async (booking: IReservations[]) => {
      await addToBooking(
        { reservations: booking },
        `${USERS_ENDPOINT}/${userId}`,
      )

      mutate(users)
    },
    [userId, users],
  )

  const value = useMemo(
    () => ({
      booking: users?.reservations || [],
      addBooking,
    }),
    [users?.reservations],
  )

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}
