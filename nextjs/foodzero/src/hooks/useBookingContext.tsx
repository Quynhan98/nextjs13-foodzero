import { useContext } from 'react'

// Contexts
import { BookingContext } from '@contexts/BookingProvider'

export const useBookingContext = () => {
  return useContext(BookingContext)
}
