import { useState, useCallback, FormEvent, ChangeEvent } from 'react'
import Image from 'next/image'
import { Box, Flex, Heading, Link, Text, useToast } from '@chakra-ui/react'

// Constants
import {
  CONTACT,
  COUNTRY_CODE,
  INVALID_EMAIL_FORMAT,
  NUMBER_OF_PERSON,
  OPEN_TIME,
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
import OpenTime from '@components/OpenTime'
import LoadingIndicator from '@components/LoadingIndicator'

// Hooks
import { useBookingContext } from '@hooks/useBookingContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Context
import { IBookingContext } from '@contexts/BookingProvider'

// Utils
import { findItemByValue, formatDate, formatPhoneNumber } from '@utils/index'
import { checkValidate } from '@utils/validation'

const reservationInit = {
  date: '',
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

const Contact = () => {
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
      const dateDuplicated = booking.filter((item) => item.date === newDate)

      if (reservation.time) {
        const timeDuplicated = findItemByValue({
          data: dateDuplicated,
          value: reservation.time,
          key: 'time',
        })

        setErrorMessage((prev) => ({
          ...prev,
          time: timeDuplicated ? TIME_DUPLICATED_ERROR : '',
        }))
      }

      setReservation((prev) => ({
        ...prev,
        date: newDate,
      }))
    },
    [booking, reservation.time],
  )

  const handleChangeField = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const nameInput = e.target.name
      const valueInput = e.target.value
      const dateDuplicated = booking.filter(
        (item) => item.date === reservation.date,
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
      <Box
        backgroundImage="/images/contactBackground.webp"
        backgroundSize="cover"
        objectFit="cover"
        maxW="1920px"
        maxH="1080px"
        padding={{ base: '90px 12px', '2xl': '415px 138px 130px 138px' }}
      >
        <Heading size="extraLarge" maxW={{ base: '200px', '2xl': '915px' }}>
          Get in Touch
        </Heading>
        <Text
          pt={{ base: '10px', '2xl': '50px' }}
          maxW={{ base: '300px', '2xl': '915px' }}
          variant="primary"
          fontFamily="Rufina"
          size="common"
        >
          The freshest ingredients for you every day
        </Text>
        <Flex pt="93px" justifyContent={{ base: 'center', '2xl': 'flex-end' }}>
          <OpenTime {...OPEN_TIME} />
        </Flex>
      </Box>

      {/* Address section */}
      <Box
        as="section"
        padding={{ base: '60px 12px', '2xl': '272px 138px 186px 138px' }}
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '112px', '2xl': '446px' },
          height: { base: '98px', '2xl': '391px' },
          top: '152px',
          left: '40%',
          backgroundImage: '/images/orange.webp',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      >
        <Flex
          flexDirection={{ base: 'column', '2xl': 'row' }}
          justifyContent={{ base: 'center', '2xl': 'unset' }}
          alignItems="center"
          gap={{ base: '20px', '2xl': '202px' }}
        >
          <Box
            width={{ base: '277px', '2xl': '792px' }}
            height={{ base: '208px', '2xl': '593px' }}
            position="relative"
          >
            <Image
              fill
              src="/images/dinnerTable.webp"
              alt="excellent cook picture"
              sizes="(max-width: 768px) 277px, 208px
        (min-width: 1200px) 792px, 593px"
            />
          </Box>
          <Text
            pt={{ base: '0px', '2xl': '230px' }}
            size="common"
            fontFamily="Rufina"
            fontWeight="bold"
            variant="secondary"
            maxW="507px"
          >
            We can be contacted <br /> via email{' '}
            <Link
              _hover={{ textDecoration: 'none' }}
              href={`mailto:${CONTACT.email}`}
            >
              <Text as="b" size="common" variant="appleGreen">
                {CONTACT.email}
              </Text>
            </Link>
            <br />
            or telephone on{' '}
            <Link
              _hover={{ textDecoration: 'none' }}
              href={`tel:${CONTACT.phoneNumber}`}
            >
              <Text as="b" size="common" variant="appleGreen">
                {CONTACT.phoneNumber}
              </Text>
            </Link>
          </Text>
        </Flex>
        <Flex
          pt={{ base: '60px', '2xl': '145px' }}
          flexDirection={{ base: 'column-reverse', '2xl': 'row' }}
          justifyContent={{ base: 'center', '2xl': 'space-between' }}
          alignItems="center"
          gap={{ base: '20px', '2xl': '60px' }}
        >
          <Text
            size="common"
            fontFamily="Rufina"
            fontWeight="bold"
            variant="secondary"
            maxW={{ base: '275px', '2xl': '748px' }}
          >
            We are located in {CONTACT.address}
          </Text>
          <Box
            width={{ base: '277px', '2xl': '792px' }}
            height={{ base: '347px', '2xl': '990px' }}
            position="relative"
          >
            <Image
              fill
              src="/images/address.webp"
              alt="excellent cook picture"
              sizes="(max-width: 768px) 277px, 347px
        (min-width: 1200px) 792px, 990px"
            />
          </Box>
        </Flex>
      </Box>

      {/* Reservation Section */}
      <Box
        id="reservationSection"
        as="section"
        padding={{ base: '70px 12px', '2xl': '237px 138px 254px 138px' }}
        backgroundColor="alabaster"
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

export default Contact
