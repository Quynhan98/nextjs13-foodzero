'use client'

import { useState, useCallback, FormEvent, ChangeEvent } from 'react'
import { Box, useToast } from '@chakra-ui/react'

// Constants
import {
  INTRO_VIDEO,
  NUMBER_OF_PERSON,
  RESERVATION_TIME,
  SERVER_ERROR,
  SNACKBAR_BOOKING_SUCCESS,
  TIME_DUPLICATED_ERROR,
} from '@constants/index'

// Components
import ReservationForm from '@components/ReservationForm'
import Process from '@components/Sections/Process'
import LoadingIndicator from '@components/LoadingIndicator'
import OurStory from '@components/Sections/OurStory'
import Staff from '@components/Sections/Staff'
import HeroAboutPage from '@components/Sections/HeroAboutPage'

// Hooks
import { useBookingContext } from '@hooks/useBookingContext'

// Contexts
import { IBookingContext } from '@contexts/BookingProvider'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Utils
import { findItemByValue, formatDate } from '@utils/index'

const reservationInit = {
  date: '' as unknown as Date,
  time: RESERVATION_TIME[0],
  person: NUMBER_OF_PERSON[0],
}

const AboutPage = () => {
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
      <HeroAboutPage />

      {/* Our Story section */}
      <OurStory />

      {/* Staff section */}
      <Staff />

      {/* Intro video */}
      <Box
        as="video"
        controls
        src={INTRO_VIDEO}
        poster="/images/introPoster.webp"
        objectFit="cover"
        width="100%"
        height="100%"
        maxH={{ base: '159px', md: '814px' }}
        css={{
          '&::-webkit-media-controls-panel': {
            display: 'none',
          },
        }}
      />

      {/* Process section */}
      <Process />

      {/* Reservation Section */}
      <Box
        id="reservationSection"
        as="section"
        padding={{
          base: '70px 12px',
          md: '200px 50px',
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
      {loading && <LoadingIndicator size="lg" />}
    </>
  )
}

export default AboutPage
