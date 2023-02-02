'use client'

import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Box, useToast } from '@chakra-ui/react'

// Components
import ReservationForm from '@components/ReservationForm'
import LoadingIndicator from '@components/LoadingIndicator'
import OurMenu from '@components/Sections/OurMenu'
import Chef from '@components/Sections/Chef'
import Features from '@components/Sections/Features'
import RecentPost from '@components/Sections/RecentPost'
import Category from '@components/Sections/Category'
import Testimonial from '@components/Sections/Testimonial'
import HeroHomePage from '@components/Sections/HeroHomePage'

// Constants
import {
  NUMBER_OF_PERSON,
  RESERVATION_TIME,
  SERVER_ERROR,
  SNACKBAR_BOOKING_SUCCESS,
  TIME_DUPLICATED_ERROR,
} from '@constants/index'

// Types
import { IPost } from '@self-types/Post'
import { IOurMenu } from '@self-types/Menu'

// Hooks
import { useBookingContext } from '@hooks/useBookingContext'

// Contexts
import { IBookingContext } from '@contexts/BookingProvider'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Utils
import { findItemByValue, formatDate } from '@utils/index'

interface IHomeProps {
  menu: IOurMenu[]
  posts: IPost[]
}

const reservationInit = {
  date: '' as unknown as Date,
  time: RESERVATION_TIME[0],
  person: NUMBER_OF_PERSON[0],
}

const HomePage = ({ contents }: { contents: string }) => {
  const data: IHomeProps = contents ? JSON.parse(contents) : {}

  const { menu, posts } = data

  const toast = useToast()
  const { booking, addBooking } = useBookingContext() as IBookingContext
  const { setLoading, loading } = useLoadingContext()
  const [reservation, setReservation] = useState(reservationInit)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()

      try {
        setLoading(true)
        await addBooking([...booking, reservation])

        toast({
          title: 'Success',
          description: SNACKBAR_BOOKING_SUCCESS,
          status: 'success',
          isClosable: true,
          position: 'bottom-left',
        })

        setReservation(reservationInit)
      } catch (error) {
        toast({
          title: 'Error',
          description: SERVER_ERROR,
          status: 'error',
          isClosable: true,
          position: 'bottom-left',
        })
      } finally {
        setLoading(false)
      }
    },
    [booking, reservation],
  )

  const handleChangeDate = useCallback(
    (date: Date) => {
      const newDate = date && formatDate(date)
      const dateDuplicated = booking.filter(
        (item) => formatDate(new Date(item.date)) === newDate,
      )

      if (dateDuplicated.length > 0) {
        const timeDuplicated = findItemByValue({
          data: dateDuplicated,
          value: reservation.time,
          key: 'time',
        })

        setErrorMessage(timeDuplicated ? TIME_DUPLICATED_ERROR : '')
      } else {
        setErrorMessage('')
      }

      setReservation((prev) => ({
        ...prev,
        date,
      }))
    },
    [booking, reservation.time],
  )

  const handleChangeField = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const nameInput = e.target.name
      const valueInput = e.target.value
      const dateDuplicated = booking.filter(
        (item) =>
          formatDate(new Date(item.date)) === formatDate(reservation.date),
      )

      if (dateDuplicated.length > 0 && nameInput === 'time') {
        const timeDuplicated = findItemByValue({
          data: dateDuplicated,
          value: valueInput,
          key: 'time',
        })

        setErrorMessage(timeDuplicated ? TIME_DUPLICATED_ERROR : '')
      }

      setReservation((prev) => ({
        ...prev,
        [nameInput]: valueInput,
      }))
    },
    [booking, reservation.date],
  )

  return (
    <>
      {/* Hero Section */}
      <HeroHomePage />

      {/* Our Menu Section */}
      <OurMenu menu={menu} />

      {/* Chef Section */}
      <Chef />

      {/* Features Section */}
      <Features />

      {/* Recent Post Section */}
      <RecentPost posts={posts} />

      {/* Reservation Section */}
      <Box
        id="reservationSection"
        as="section"
        padding={{
          base: '70px 12px',
          md: '120px 50px',
          '2xl': '237px 138px 254px 138px',
        }}
        backgroundColor="alabaster"
      >
        <ReservationForm
          {...reservation}
          onSubmitForm={handleSubmit}
          handleChangeDate={handleChangeDate}
          onChangeField={handleChangeField}
          timeError={errorMessage}
          isDisableButton={!!errorMessage || !reservation.date}
        />
      </Box>

      {/* Category Section */}
      <Category />

      {/* Testimonials Section */}
      <Testimonial />

      {loading && <LoadingIndicator size="lg" />}
    </>
  )
}

export default HomePage
