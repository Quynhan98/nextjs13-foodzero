import { useState, useCallback, FormEvent, ChangeEvent } from 'react'
import Image from 'next/image'
import { Box, Flex, Heading, Text, useToast } from '@chakra-ui/react'

// Constants
import {
  LEADER_SHIP,
  NUMBER_OF_PERSON,
  RESERVATION_TIME,
  SERVER_ERROR,
  SNACKBAR_BOOKING_SUCCESS,
} from '@constants/index'

// Components
import ReservationForm from '@components/ReservationForm'

// Hooks
import { useBookingContext } from '@hooks/useBookingContext'

// Context
import { IBookingContext } from '@contexts/BookingProvider'

const reservationInit = {
  date: '' as unknown as Date,
  time: RESERVATION_TIME[0],
  person: NUMBER_OF_PERSON[0],
}

const About = () => {
  const toast = useToast()
  const { booking, addBooking } = useBookingContext() as IBookingContext
  const [reservation, setReservation] = useState(reservationInit)

  const isDisableField = booking.length > 0

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()

      try {
        await addBooking([...booking, reservation])

        toast({
          title: 'Success',
          description: SNACKBAR_BOOKING_SUCCESS,
          status: 'success',
          isClosable: true,
          position: 'bottom-left',
        })
      } catch (error) {
        toast({
          title: 'Error',
          description: SERVER_ERROR,
          status: 'error',
          isClosable: true,
          position: 'bottom-left',
        })
      }
    },
    [booking, reservation],
  )

  const handleChangeDate = useCallback((date: Date) => {
    setReservation((prev) => ({
      ...prev,
      date,
    }))
  }, [])

  const handleChangeField = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const selectValues = { [e.target.name]: e.target.value }

      setReservation((prev) => ({
        ...prev,
        ...selectValues,
      }))
    },
    [],
  )

  return (
    <>
      <Box
        backgroundImage="/images/aboutBackground.webp"
        backgroundSize="cover"
        objectFit="cover"
        maxW="1920px"
        maxH="1080px"
        padding={{ base: '90px 12px', md: '350px 138px 328px 138px' }}
      >
        <Heading size="extraLarge" maxW={{ base: '200px', md: '779px' }}>
          View Our New Menu
        </Heading>
        <Text
          pt={{ base: '25px', md: '50px' }}
          maxW={{ base: '200px', md: '779px' }}
          variant="primary"
        >
          The freshest ingredients for you every day
        </Text>
      </Box>

      {/* Our Story section */}
      <Box
        as="section"
        padding={{ base: '60px 12px', md: '122px 138px 140px 138px' }}
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '92px', md: '355px' },
          height: { base: '78px', md: '300px' },
          top: { base: '20px', md: '112px' },
          left: '33%',
          backgroundImage: '/images/tomato.webp',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      >
        {/* Our Story */}
        <Flex
          pt={{ base: '0px', md: '81px' }}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          alignItems="center"
          gap={{ base: '30px', md: '102px' }}
        >
          <Box
            maxW="668px"
            pl={{ base: '10px', md: '77px' }}
            pt={{ base: '0px', md: '150px' }}
          >
            <Heading as="h3" size="large" variant="secondary">
              Our Story
            </Heading>
            <Text pt="18px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.
            </Text>
          </Box>
          <Box
            width={{ base: '277px', md: '792px' }}
            height={{ base: '198px', md: '567px' }}
            position="relative"
            margin="0 auto"
          >
            <Image
              fill
              src="/images/cooking.webp"
              alt="cooking picture"
              sizes="(max-width: 768px) 277px, 198px
        (min-width: 1200px) 792px, 567px"
            />
          </Box>
        </Flex>
        {/* Restuarant Manager */}
        <Flex
          pt={{ base: '70px', md: '162px' }}
          pl={{ base: 'unset', md: '33px' }}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'unset' }}
          gap={{ base: '10px', md: '111px' }}
        >
          <Flex flexDirection="column" gap={{ base: '10px', md: '24px' }}>
            <Heading as="h4" variant="secondary" textAlign="center">
              Restaurant Manager
            </Heading>
            <Text textAlign="center">{LEADER_SHIP.restaurantManager.name}</Text>
            <Box
              width={{ base: '254px', md: '726px' }}
              height={{ base: '301px', md: '861px' }}
              position="relative"
              margin="0 auto"
            >
              <Image
                fill
                src={LEADER_SHIP.restaurantManager.avatar}
                alt="Restaurant manager avatar"
                sizes="(max-width: 768px) 254px, 301px
        (min-width: 1200px) 726px, 861px"
              />
            </Box>
          </Flex>
          <Text
            pt={{ base: '10px', md: '160px' }}
            maxW={{ base: '254px', md: '510px' }}
            margin={{ base: '0 auto', md: 'unset' }}
          >
            {LEADER_SHIP.restaurantManager.description}
          </Text>
        </Flex>
        {/* Executive Chef */}
        <Flex
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          justifyContent={{ base: 'center', md: 'flex-end' }}
          alignItems={{ base: 'center', md: 'end' }}
          gap={{ base: '10px', md: '111px' }}
          mt={{ base: '30px', md: '-438px' }}
          pr={{ base: 'unset', md: '38px' }}
        >
          <Text
            pt={{ base: '10px', md: '160px' }}
            maxW={{ base: '254px', md: '510px' }}
            margin={{ base: '0 auto', md: 'unset' }}
            textAlign={{ base: 'start', md: 'end' }}
          >
            {LEADER_SHIP.executiveChef.description}
          </Text>
          <Flex flexDirection="column" gap={{ base: '10px', md: '24px' }}>
            <Heading as="h4" variant="secondary" textAlign="center">
              Executive Chef
            </Heading>
            <Text textAlign="center">{LEADER_SHIP.executiveChef.name}</Text>
            <Box
              width={{ base: '254px', md: '726px' }}
              height={{ base: '301px', md: '861px' }}
              position="relative"
              margin="0 auto"
            >
              <Image
                fill
                src={LEADER_SHIP.executiveChef.avatar}
                alt="Executive chef avatar"
                sizes="(max-width: 768px) 254px, 301px
        (min-width: 1200px) 726px, 861px"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Reservation Section */}
      <Box
        as="section"
        padding={{ base: '70px 12px', md: '237px 138px 254px 138px' }}
        backgroundColor="alabaster"
      >
        <ReservationForm
          onSubmitForm={handleSubmit}
          handleChangeDate={handleChangeDate}
          onChangeField={handleChangeField}
          isDisableField={isDisableField}
          isDisableButton={isDisableField || !reservation.date}
        />
      </Box>
    </>
  )
}

export default About
