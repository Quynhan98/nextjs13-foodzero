import Image from 'next/image'
import {
  Box,
  Grid,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from '@chakra-ui/react'
import {
  MENU_ENDPOINT,
  NUMBER_OF_PERSON,
  RESERVATION_TIME,
  SERVER_ERROR,
} from '@constants/index'
import { fetcherInstance } from '@services/api'
import { GetStaticProps } from 'next'
import { IMenu } from '@self-types/Menu'
import PriceList from '@components/PriceList'
import ReservationForm from '@components/ReservationForm'
import { SNACKBAR_BOOKING_SUCCESS } from '@constants/text'
import { IBookingContext } from '@contexts/BookingProvider'
import { useBookingContext } from '@hooks/useBookingContext'
import { useState, useCallback, FormEvent } from 'react'

interface IMenuProps {
  menu: IMenu
  error: string
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const menu: IMenu = await fetcherInstance(`${MENU_ENDPOINT}`)

    return {
      props: {
        menu,
      },
    }
  } catch (error) {
    return {
      props: {
        error: SERVER_ERROR,
      },
    }
  }
}

const reservationInit = {
  date: new Date(),
  time: RESERVATION_TIME[0],
  person: NUMBER_OF_PERSON[0],
}

const Menu = ({ menu }: IMenuProps) => {
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
          position: 'top-right',
        })
      }
    },
    [booking, reservation],
  )

  const handleChangeDate = useCallback(async (date: Date) => {
    setReservation((prev) => ({
      ...prev,
      date,
    }))
  }, [])

  const handleSelectTime = useCallback(async (time: string) => {
    setReservation((prev) => ({
      ...prev,
      time,
    }))
  }, [])

  const handleSelectPerson = useCallback(async (person: string) => {
    setReservation((prev) => ({
      ...prev,
      person,
    }))
  }, [])

  return (
    <>
      <Box
        backgroundImage="/images/newMenuBackground.webp"
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

      {/* Starters section */}
      <Box
        as="section"
        padding={{ base: '100px 12px', md: '122px 138px 140px 138px' }}
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '220px', md: '516px' },
          height: { base: '236px', md: '439px' },
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
        <Grid
          pt="81px"
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={{ base: '30px', md: '102px' }}
        >
          <Box
            width={{ base: '130px', md: '792px' }}
            height={{ base: '180px', md: '898px' }}
            position="relative"
          >
            <Image
              fill
              src="/images/youngTofu.webp"
              alt="excellent cook picture"
              sizes="(max-width: 768px) 792px, 898px
        (max-width: 1200px) 50vw,
        33vw"
            />
          </Box>
          <UnorderedList
            listStyleType="none"
            marginLeft="0px"
            gap={{ base: '30px', md: '60px' }}
          >
            {menu.starters.map((item) => (
              <ListItem maxW="792px" key={`states-${item.id}`}>
                <PriceList {...item} />
              </ListItem>
            ))}
          </UnorderedList>
        </Grid>
      </Box>

      {/* Mains section */}
      <Box
        as="section"
        padding={{ base: '40px 12px', md: '82px 138px 65px 138px' }}
      >
        <Heading as="h3" size="large" variant="secondary" textAlign="center">
          Mains
        </Heading>
        <Text pt="18px" textAlign="center">
          This is a section of your menu. Give your section a brief description
        </Text>
        <Grid
          pt="129px"
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={{ base: '30px', md: '102px' }}
        >
          <UnorderedList
            listStyleType="none"
            marginLeft="0px"
            gap={{ base: '30px', md: '60px' }}
          >
            {menu.mains.map((item) => (
              <ListItem maxW="792px" key={`mains-${item.id}`}>
                <PriceList {...item} />
              </ListItem>
            ))}
          </UnorderedList>
          <Box
            width={{ base: '130px', md: '792px' }}
            height={{ base: '180px', md: '898px' }}
            position="relative"
          >
            <Image
              fill
              src="/images/youngTofu.webp"
              alt="excellent cook picture"
              sizes="(max-width: 768px) 792px, 898px
        (max-width: 1200px) 50vw,
        33vw"
            />
          </Box>
        </Grid>
      </Box>

      {/* Pastries & Drinks section */}

      <Box
        as="section"
        padding={{ base: '100px 12px', md: '122px 138px 140px 138px' }}
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '220px', md: '516px' },
          height: { base: '236px', md: '439px' },
          top: '0px',
          left: '50%',
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
        <Grid
          pt="81px"
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={{ base: '30px', md: '102px' }}
        >
          <Box
            width={{ base: '130px', md: '792px' }}
            height={{ base: '180px', md: '898px' }}
            position="relative"
          >
            <Image
              fill
              src="/images/youngTofu.webp"
              alt="excellent cook picture"
              sizes="(max-width: 768px) 792px, 898px
        (max-width: 1200px) 50vw,
        33vw"
            />
          </Box>
          <UnorderedList
            listStyleType="none"
            marginLeft="0px"
            gap={{ base: '30px', md: '60px' }}
          >
            {menu.pastriesAndDrinks.map((item) => (
              <ListItem maxW="792px" key={`pastries-and-drinks-${item.id}`}>
                <PriceList {...item} />
              </ListItem>
            ))}
          </UnorderedList>
        </Grid>
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
          handleSelectTime={handleSelectTime}
          handleSelectPerson={handleSelectPerson}
          isDisableField={isDisableField}
        />
      </Box>
    </>
  )
}

export default Menu
