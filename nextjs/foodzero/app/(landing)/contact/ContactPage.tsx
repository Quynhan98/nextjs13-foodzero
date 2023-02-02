'use client'

import { useState, useCallback, FormEvent, ChangeEvent } from 'react'
import { Box, useToast } from '@chakra-ui/react'

// Constants
import {
  COUNTRY_CODE,
  INVALID_EMAIL_FORMAT,
  NUMBER_OF_PERSON,
  PHONE_ERROR_LENGTH,
  REGEX_EMAIL,
  REGEX_REMOVE_BRACKETS,
  RESERVATION_TIME,
  SERVER_ERROR,
  SNACKBAR_BOOKING_SUCCESS,
  TIME_DUPLICATED_ERROR,
} from '@constants/index'

// Components
import ReservationForm from '@components/ReservationForm'
import LoadingIndicator from '@components/LoadingIndicator'
import Address from '@components/Sections/Address'
import HeroContactPage from '@components/Sections/HeroContactPage'

// Hooks
import { useBookingContext } from '@hooks/useBookingContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Context
import { IBookingContext } from '@contexts/BookingProvider'

// Utils
import { findItemByValue, formatDate, formatPhoneNumber } from '@utils/index'
import { checkValidate } from '@utils/validation'

const reservationInit = {
  date: '' as unknown as Date,
  time: RESERVATION_TIME[0],
  person: NUMBER_OF_PERSON[0],
  phone: '',
  firstName: '',
  lastName: '',
  email: '',
}

const initErrorMsgs = {
  email: '',
  phone: '',
  time: '',
}

const ContactPage = () => {
  const toast = useToast()
  const { booking, addBooking } = useBookingContext() as IBookingContext
  const { setLoading, loading } = useLoadingContext()
  const [reservation, setReservation] = useState(reservationInit)
  const [errorMessage, setErrorMessage] = useState(initErrorMsgs)

  // Check disable button
  const isDisable = !!(
    errorMessage.email ||
    errorMessage.phone ||
    errorMessage.time ||
    !reservation.date
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

        setErrorMessage((prev) => ({
          ...prev,
          time: timeDuplicated ? TIME_DUPLICATED_ERROR : '',
        }))
      } else {
        setErrorMessage((prev) => ({
          ...prev,
          time: '',
        }))
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
      const dateDuplicated =
        reservation.date &&
        booking.filter(
          (item) =>
            formatDate(new Date(item.date)) === formatDate(reservation.date),
        )

      if (nameInput === 'email') {
        const validateEmail = checkValidate({
          value: valueInput,
          regex: REGEX_EMAIL,
          errorMess: INVALID_EMAIL_FORMAT,
        })

        setErrorMessage((prev) => ({
          ...prev,
          email: validateEmail || '',
        }))
      }

      if (nameInput === 'phone') {
        const phone = formatPhoneNumber(valueInput).replace(
          REGEX_REMOVE_BRACKETS,
          '',
        )

        setErrorMessage((prev) => ({
          ...prev,
          phone: phone.length !== 10 ? PHONE_ERROR_LENGTH : '',
        }))
      }

      if (dateDuplicated.length > 0 && nameInput === 'time') {
        const timeDuplicated = findItemByValue({
          data: dateDuplicated,
          value: valueInput,
          key: 'time',
        })

        setErrorMessage((prev) => ({
          ...prev,
          time: timeDuplicated ? TIME_DUPLICATED_ERROR : '',
        }))
      }

      setReservation((prev) => ({
        ...prev,
        [nameInput]: valueInput,
      }))
    },
    [booking, reservation.date],
  )

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()

      const payload = {
        ...reservation,
        phone: reservation.phone
          ? COUNTRY_CODE +
            formatPhoneNumber(reservation.phone).replace(
              REGEX_REMOVE_BRACKETS,
              '',
            )
          : '',
      }

      try {
        setLoading(true)
        await addBooking([...booking, payload])

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

  return (
    <>
      {/* Hero Section */}
      <HeroContactPage />

      {/* Address section */}
      <Address />

      {/* Reservation Section */}
      <Box
        id="reservationSection"
        as="section"
        padding={{
          base: '70px 12px',
          md: '180px 50px',
          '2xl': '237px 138px 254px 138px',
        }}
        backgroundColor="alabaster"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '153px', md: '358px', '2xl': '511px' },
          height: { base: '104px', md: '243px', '2xl': '347px' },
          top: { base: '15px', md: '50px' },
          left: { base: '18px', md: '50px', '2xl': '159px' },
          backgroundImage: '/images/mint.webp',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: 0,
        }}
      >
        <ReservationForm
          {...reservation}
          timeError={errorMessage.time}
          emailError={errorMessage.email}
          phoneError={errorMessage.phone}
          isShowFullField
          phone={formatPhoneNumber(reservation.phone)}
          onSubmitForm={handleSubmit}
          handleChangeDate={handleChangeDate}
          onChangeField={handleChangeField}
          isDisableButton={isDisable}
        />
      </Box>
      {loading && <LoadingIndicator size="lg" />}
    </>
  )
}

export default ContactPage
