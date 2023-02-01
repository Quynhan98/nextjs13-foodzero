'use client'

import { useState, useCallback, FormEvent, ChangeEvent } from 'react'
import Image from 'next/image'
import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from '@chakra-ui/react'

// Constants
import {
  NUMBER_OF_PERSON,
  RESERVATION_TIME,
  SERVER_ERROR,
  SNACKBAR_BOOKING_SUCCESS,
  TIME_DUPLICATED_ERROR,
} from '@constants/index'

// Types
import { IMenu } from '@self-types/Menu'

// Components
import PriceList from '@components/PriceList'
import ReservationForm from '@components/ReservationForm'
import LoadingIndicator from '@components/LoadingIndicator'

// Hooks
import { useBookingContext } from '@hooks/useBookingContext'

// Contexts
import { IBookingContext } from '@contexts/BookingProvider'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Utils
import { findItemByValue, formatDate } from '@utils/index'

// Themes
import { rufina } from '@themes/index'

interface IMenuProps {
  menu: IMenu
}

const reservationInit = {
  date: '' as unknown as Date,
  time: RESERVATION_TIME[0],
  person: NUMBER_OF_PERSON[0],
}

const Menu = ({ content }: { content: string }) => {
  const data: IMenuProps = content ? JSON.parse(content) : {}
  const { menu } = data

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
      <Box
        backgroundImage="/images/newMenuBackground.webp"
        backgroundSize="cover"
        objectFit="cover"
        maxW="1920px"
        maxH="1080px"
        padding={{
          base: '100px 12px',
          md: '250px 50px 150px 50px',
          '2xl': '350px 138px 328px 138px',
        }}
      >
        <Heading size="extraLarge" maxW={{ base: '90%', md: '45%' }}>
          View Our New Menu
        </Heading>
        <Text
          pt={{ base: '10px', md: '50px' }}
          maxW={{ base: '80%', md: '50%' }}
          variant="primary"
          fontFamily={rufina}
          size="common"
        >
          The freshest ingredients for you every day
        </Text>
      </Box>

      {/* Starters section */}
      <Box
        as="section"
        padding={{
          base: '60px 12px',
          md: '120px 50px',
          '2xl': '122px 138px 140px 138px',
        }}
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '118px', md: '325px', '2xl': '472px' },
          height: { base: '97px', md: '268px', '2xl': '390px' },
          top: '0px',
          right: '0px',
          backgroundImage: '/images/blueberry.webp',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      >
        <Heading as="h3" size="large" variant="secondary" textAlign="center">
          Starters
        </Heading>
        <Text pt="18px" textAlign="center">
          This is a section of your menu. Give your section a brief description
        </Text>
        <Flex
          pt={{ base: '40px', md: '81px' }}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'unset' }}
          gap={{ base: '30px', md: '70px', '2xl': '102px' }}
        >
          <Box
            width={{ base: '277px', md: '554px', '2xl': '792px' }}
            height={{ base: '314px', md: '629px', '2xl': '898px' }}
            position="relative"
            margin="0 auto"
          >
            <Image
              fill
              priority
              src="/images/youngTofu.webp"
              alt="excellent cook picture"
              sizes="(max-width: 768px) 277px, 314px
                (min-width: 768px) 554px, 629px
                (min-width: 1200px) 792px, 898px"
            />
          </Box>
          <UnorderedList
            listStyleType="none"
            marginLeft="0px"
            display="flex"
            flexDirection="column"
            gap={{ base: '30px', md: '60px' }}
            maxW="792px"
            minW={{ base: '100%', md: '45%' }}
          >
            {menu.starters.map((item) => (
              <ListItem key={`states-${item.id}`}>
                <PriceList {...item} />
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </Box>

      {/* Mains section */}
      <Box
        as="section"
        padding={{
          base: '40px 12px',
          md: '80px 50px',
          '2xl': '82px 138px 65px 138px',
        }}
      >
        <Heading as="h3" size="large" variant="secondary" textAlign="center">
          Mains
        </Heading>
        <Text pt="18px" textAlign="center">
          This is a section of your menu. Give your section a brief description
        </Text>
        <Flex
          pt={{ base: '40px', md: '81px' }}
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          gap={{ base: '30px', md: '102px' }}
          margin="0 auto"
        >
          <UnorderedList
            listStyleType="none"
            marginLeft="0px"
            display="flex"
            flexDirection="column"
            gap={{ base: '30px', '2xl': '60px' }}
            maxW="792px"
            minW={{ base: '100%', md: '45%' }}
          >
            {menu.mains.map((item) => (
              <ListItem key={`mains-${item.id}`}>
                <PriceList {...item} />
              </ListItem>
            ))}
          </UnorderedList>
          <Box
            width={{ base: '277px', md: '554px', '2xl': '792px' }}
            height={{ base: '314px', md: '629px', '2xl': '898px' }}
            position="relative"
            margin="0 auto"
          >
            <Image
              fill
              src="/images/steak.webp"
              alt="excellent cook picture"
              sizes="(max-width: 768px) 277px, 314px
                (min-width: 768px) 554px, 629px
                (min-width: 1200px) 792px, 898px"
            />
          </Box>
        </Flex>
      </Box>

      {/* Pastries & Drinks section */}

      <Box
        as="section"
        padding={{
          base: '50px 12px',
          md: '80px 50px',
          '2xl': '122px 138px 140px 138px',
        }}
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '87px', md: '244px', '2xl': '348px' },
          height: { base: '104px', md: '290px', '2xl': '415px' },
          top: '0px',
          left: '45%',
          backgroundImage: '/images/avocado.webp',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      >
        <Heading as="h3" size="large" variant="secondary" textAlign="center">
          Pastries & Drinks
        </Heading>
        <Text pt="18px" textAlign="center">
          This is a section of your menu. Give your section a brief description
        </Text>
        <Flex
          pt={{ base: '50px', md: '159px' }}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          gap={{ base: '30px', md: '102px' }}
        >
          <Box
            width={{ base: '277px', md: '554px', '2xl': '792px' }}
            height={{ base: '314px', md: '629px', '2xl': '898px' }}
            position="relative"
            margin="0 auto"
          >
            <Image
              fill
              src="/images/lemonTea.webp"
              alt="excellent cook picture"
              sizes="(max-width: 768px) 277px, 314px
                (min-width: 768px) 554px, 629px
                (min-width: 1200px) 792px, 898px"
            />
          </Box>
          <UnorderedList
            listStyleType="none"
            marginLeft="0px"
            display="flex"
            flexDirection="column"
            gap={{ base: '30px', md: '60px' }}
            maxW="792px"
            minW={{ base: '100%', md: '45%' }}
          >
            {menu.pastriesAndDrinks.map((item) => (
              <ListItem key={`pastries-and-drinks-${item.id}`}>
                <PriceList {...item} />
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </Box>

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

export default Menu
