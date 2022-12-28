import { useState, useCallback, FormEvent, ChangeEvent } from 'react'
import Image from 'next/image'
import { Box, Flex, Heading, Text, useToast } from '@chakra-ui/react'

// Constants
import {
  INTRO_VIDEO,
  LEADER_SHIP,
  NUMBER_OF_PERSON,
  RESERVATION_TIME,
  SERVER_ERROR,
  SNACKBAR_BOOKING_SUCCESS,
  TIME_DUPLICATED_ERROR,
} from '@constants/index'

// Components
import ReservationForm from '@components/ReservationForm'
import Process from '@components/Process'
import LoadingIndicator from '@components/LoadingIndicator'

// Hooks
import { useBookingContext } from '@hooks/useBookingContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Context
import { IBookingContext } from '@contexts/BookingProvider'

// Utils
import { findItemByValue, formatDate } from '@utils/index'

const reservationInit = {
  date: '',
  time: RESERVATION_TIME[0],
  person: NUMBER_OF_PERSON[0],
}

const About = () => {
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
      const dateDuplicated = booking.filter((item) => item.date === newDate)

      if (reservation.time) {
        const timeDuplicated = findItemByValue({
          data: dateDuplicated,
          value: reservation.time,
          key: 'time',
        })

        setErrorMessage(timeDuplicated ? TIME_DUPLICATED_ERROR : '')
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
      <Flex
        backgroundImage="/images/aboutBackground.webp"
        backgroundSize="cover"
        objectFit="cover"
        maxW="1920px"
        maxH="1080px"
        padding={{ base: '90px 12px', md: '410px 138px 328px 138px' }}
        justifyContent="flex-end"
      >
        <Box maxW="915px" mr="81px">
          <Heading size="extraLarge">Who We Are</Heading>
          <Text
            pt={{ base: '10px', md: '50px' }}
            variant="primary"
            fontFamily="Rufina"
            size="common"
          >
            The most important thing for us is to give you the comfortable
            dining experience
          </Text>
        </Box>
      </Flex>

      {/* Our Story section */}
      <Box
        as="section"
        padding={{ base: '60px 12px', md: '218px 138px 299px 138px' }}
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '92px', md: '355px' },
          height: { base: '78px', md: '300px' },
          top: { base: '20px', md: '112px' },
          left: '35%',
          backgroundImage: '/images/tomato.webp',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      >
        {/* Our Story */}
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          alignItems="center"
          gap={{ base: '30px', md: '102px' }}
        >
          <Box
            pl={{ base: '10px', md: '77px' }}
            pt={{ base: '0px', md: '150px' }}
          >
            <Heading as="h3" size="large" variant="secondary">
              Our Story
            </Heading>
            <Text pt="18px" maxW="668px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.
            </Text>
          </Box>
          <Box
            width={{ base: '277px', md: '792px' }}
            height={{ base: '198px', md: '567px' }}
            position="relative"
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
        {/* Restaurant Manager */}
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
      <Box
        as="section"
        padding={{ base: '60px 12px', md: '267px 138px 320px 138px' }}
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '117px', md: '468px' },
          height: { base: '136px', md: '547px' },
          top: '8px',
          right: '0px',
          backgroundImage: '/images/rosemaryRight.webp',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
        _after={{
          content: '""',
          position: 'absolute',
          width: { base: '82px', md: '320px' },
          height: { base: '83px', md: '330px' },
          bottom: { base: '8px', md: '32px' },
          left: '0px',
          backgroundImage: '/images/rosemaryLeft.webp',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      >
        <Heading
          as="h3"
          size="large"
          variant="secondary"
          textAlign="center"
          pr={{ base: '30px', md: '65px' }}
        >
          Sophisticated Process
        </Heading>
        <Process />
      </Box>

      {/* Reservation Section */}
      <Box
        id="reservationSection"
        as="section"
        padding={{ base: '70px 12px', md: '237px 138px 254px 138px' }}
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

export default About
