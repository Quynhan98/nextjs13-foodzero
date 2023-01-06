'use client'

import '@fontsource/lato'
import '@fontsource/rufina'

import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useMemo,
  useState,
} from 'react'
import Image from 'next/image'
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from '@chakra-ui/react'

// Components
import CardBlog from '@components/CardBlog'
import CardCategory from '@components/CardCategory'
import CardFeature from '@components/CardFeature'
import CardReview from '@components/CardReview'
import PriceList from '@components/PriceList'
import ReservationForm from '@components/ReservationForm'

// Mocks
import { QUOTE_MOCK } from '@mocks/mockData'

// Constants
import {
  CATEGORY_SECTION,
  FEATURES_SECTION,
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

// Utils
import { findItemByValue, formatDate } from '@utils/index'

interface IHomeProps {
  menu: IOurMenu[]
  posts: IPost[]
}

const reservationInit = {
  date: '',
  time: RESERVATION_TIME[0],
  person: NUMBER_OF_PERSON[0],
}

const HomePage = ({ contents }: { contents: string }) => {
  const data: IHomeProps = contents ? JSON.parse(contents) : {}

  const { menu, posts } = data

  const toast = useToast()
  const { booking, addBooking } = useBookingContext() as IBookingContext
  const [reservation, setReservation] = useState(reservationInit)
  const [errorMessage, setErrorMessage] = useState<string>('')

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

        setReservation(reservationInit)
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

  const renderChefSection = useMemo(
    () => (
      <Flex
        gap={{ base: '10px', '2xl': '61px' }}
        justifyContent="space-between"
      >
        <Box
          mt="20px"
          width={{ base: '147px', md: '686px', '2xl': '980px' }}
          height={{ base: '133px', md: '623px', '2xl': '890px' }}
          position="relative"
          zIndex={2}
        >
          <Image
            fill
            src="/images/excellentCook.webp"
            alt="excellent cook picture"
            sizes="(max-width: 768px) 147px, 133px
              (min-width: 768px) 686px, 623px
              (min-width: 1200px) 980px, 890px"
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box maxW={{ base: '200px', md: '450px', '2xl': '620px' }}>
          <Heading as="h3" size="large" variant="secondary">
            Excellent cook
          </Heading>
          <Text pt="18px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc.
          </Text>
        </Box>
      </Flex>
    ),
    [],
  )

  return (
    <>
      {/* Hero Section */}
      <Box
        top="0px"
        position="relative"
        padding={{
          base: '100px 12px',
          md: '250px 50px 100px 50px',
          '2xl': '310px 138px 222px 138px',
        }}
        _before={{
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0px',
          left: '0px',
          backgroundColor: 'zinnwalditeBrown',
          zIndex: -1,
        }}
      >
        <Flex
          position="relative"
          flexDirection="column"
          _before={{
            content: '""',
            position: 'absolute',
            width: { base: '198px', md: '554px', '2xl': '792px' },
            height: { base: '233px', md: '652px', '2xl': '931px' },
            top: { base: '90px', '2xl': '124px' },
            right: '0px',
            backgroundImage: '/images/bigSteak.webp',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            zIndex: -1,
          }}
        >
          <Heading
            size="extraLarge"
            maxW={{ base: '80%', md: '60%', '2xl': '68%' }}
          >
            Healthy Eating is important part of lifestyle
          </Heading>
          <Text
            pt={{ base: '25px', '2xl': '50px' }}
            maxW={{ base: '160px', md: '550px', '2xl': '840px' }}
            variant="primary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            congue arcu
          </Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          pt={{ base: '40px', md: '70px', '2xl': '100px' }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            gap={{ base: '20px', md: '40px' }}
          >
            <Text size="extraLarge" variant="primary" transform="rotate(90deg)">
              Scroll
            </Text>
            <Divider
              height={{ base: '80px', md: '270px', '2xl': '406px' }}
              variant="dashed"
              borderLeftWidth="2px"
              borderLeftColor="white"
              orientation="vertical"
              opacity={0.6}
            />
          </Flex>
          <Box
            width={{ base: '214px', md: '598px', '2xl': '854px' }}
            height={{ base: '60px', md: '168px', '2xl': '240px' }}
            position="relative"
            mt={{ base: '0px', md: '130px', '2xl': '225px' }}
            mr={{ base: '65px', md: '200px', '2xl': '285px' }}
            textAlign="center"
          >
            <Image
              fill
              priority
              src="/images/spiceCups.webp"
              alt="spice cups picture"
              sizes="(max-width: 768px) 214px, 60px
                (min-width: 768px) 598px, 168px
                (min-width: 1200px) 854px, 240px"
            />
          </Box>
        </Flex>
        <Flex
          pt={{ base: '20px', md: '80px', '2xl': '157px' }}
          justifyContent="space-between"
        >
          <Flex flexDirection="column">
            <Box
              width={{ base: '180px', md: '554px', '2xl': '792px' }}
              height={{ base: '127px', md: '392px', '2xl': '560px' }}
              position="relative"
            >
              <Image
                fill
                priority
                src="/images/clamSoup.webp"
                alt="clam soup picture"
                sizes="(max-width: 768px) 180px, 127px
                  (min-width: 768px) 554px, 392px
                  (min-width: 1200px) 792px, 560px"
              />
            </Box>
            <Heading
              as="h3"
              maxW={{ base: '180px', md: '350px', '2xl': '500px' }}
              pt={{ base: '10px', '2xl': '54px' }}
            >
              Start to plan your diet today
            </Heading>
            <Text
              pt={{ base: '15px', '2xl': '54px' }}
              variant="primary"
              maxW={{ base: '180px', md: '390px', '2xl': '565px' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            maxW={{ base: '150px', md: '356px', '2xl': '508px' }}
          >
            <Text variant="primary" pb={{ base: '15px', '2xl': '84px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </Text>
            <Box
              width={{ base: '150px', md: '356px', '2xl': '508px' }}
              height={{ base: '210px', md: '497px', '2xl': '710px' }}
              position="relative"
            >
              <Image
                fill
                priority
                src="/images/spiceJar.webp"
                alt="spice jar picture"
                sizes="(max-width: 768px) 150px, 210px
                  (min-width: 768px) 356px, 497px
                  (min-width: 1200px) 508px, 710px"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Our Menu Section */}
      <Box
        as="section"
        padding={{
          base: '50px 12px',
          md: '100px 50px',
          '2xl': '176px 138px 218px 138px',
        }}
        position="relative"
        minH="100vh"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '220px', md: '628px', '2xl': '897px' },
          height: { base: '236px', md: '628px', '2xl': '897px' },
          top: '0px',
          right: '0px',
          backgroundImage: '/images/menuBackground.webp',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      >
        <Heading as="h3" size="large" variant="secondary" pt="54px">
          Our Menu
        </Heading>
        <Text
          pt={{ base: '10px', '2xl': '54px' }}
          maxW={{ md: '490px', '2xl': '532px' }}
        >
          This is a section of your menu. Give your section a brief description
        </Text>
        <UnorderedList
          display="grid"
          gridTemplateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          listStyleType="none"
          marginLeft="0px"
          pt={{ base: '40px', md: '100px', '2xl': '158px' }}
          gap={{ base: '30px', md: '60px' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
        >
          {menu.map((item) => (
            <ListItem
              maxW={{ md: '560px', '2xl': '792px' }}
              key={`menu-${item.id}`}
            >
              <PriceList {...item} />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      {/* Chef Section */}
      <Box
        as="section"
        padding={{
          base: '50px 12px',
          md: '140px 50px 0px 50px',
          '2xl': '240px 138px 0px 110px',
        }}
        backgroundColor="alabaster"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '100px', md: '280px', '2xl': '400px' },
          height: { base: '80px', md: '232px', '2xl': '320px' },
          top: { base: '30px', md: '80px', '2xl': '135px' },
          left: { base: '12px', md: '40px', '2xl': '85px' },
          backgroundImage: '/images/leafLeft.webp',
          backgroundSize: 'cover',
          objectFit: 'cover',
          zIndex: 1,
        }}
        _after={{
          content: '""',
          position: 'absolute',
          width: { base: '113px', md: '315px', '2xl': '450px' },
          height: { base: '98px', md: '273px', '2xl': '390px' },
          bottom: { base: '20px', md: '25px', '2xl': '30px' },
          right: { base: '12px', md: '50px', '2xl': '138px' },
          backgroundImage: '/images/leafRight.webp',
          backgroundSize: 'cover',
          objectFit: 'cover',
          zIndex: 1,
        }}
      >
        {renderChefSection}
      </Box>

      {/* Features Section */}
      <Box
        as="section"
        padding={{
          base: '70px 12px',
          md: '120px 50px',
          '2xl': '207px 138px 190px 138px',
        }}
      >
        <UnorderedList
          display="flex"
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          listStyleType="none"
          marginLeft="0px"
          gap="30px"
        >
          {FEATURES_SECTION.map((item) => (
            <ListItem key={`feature-${item.id}`}>
              <CardFeature {...item} />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      {/* Recenter Post Section */}
      <Box
        as="section"
        padding={{
          base: '50px 12px',
          md: '80px 50px',
          '2xl': '130px 138px 105px 138px',
        }}
      >
        <UnorderedList
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          listStyleType="none"
          marginLeft="0px"
          gap="30px"
        >
          {posts.map((item) => (
            <ListItem maxW="792px" key={`blog-${item.id}`}>
              <CardBlog {...item} />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

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
      <Box
        as="section"
        padding={{
          base: '60px 12px',
          md: '100px 50px',
          '2xl': '128px 138px 136px 138px',
        }}
      >
        <Center flexDirection="column">
          <Heading
            as="h3"
            size="large"
            variant="secondary"
            maxW={{ base: '350px', md: '800px', '2xl': '1100px' }}
            textAlign="center"
          >
            Calories Energy Balance
          </Heading>
          <Text pt="18px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Center>
        <UnorderedList
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          listStyleType="none"
          marginLeft="0px"
          pt={{ base: '50px', '2xl': '126px' }}
          gap="30px"
        >
          {CATEGORY_SECTION.map((item) => (
            <ListItem key={`category-${item.id}`}>
              <CardCategory {...item} />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      {/* Testimonials Section */}
      <Box
        as="section"
        padding={{
          base: '50px 12px',
          md: '100px 50px 100px 150px',
          '2xl': '118px 138px 145px 246px',
        }}
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          width: { base: '70px', md: '197px', '2xl': '282px' },
          height: { base: '58px', md: '164px', '2xl': '234px' },
          top: { base: '170px', md: '118px' },
          right: { base: '15px', md: '180px', '2xl': '255px' },
          backgroundImage: '/images/quotationMarks.webp',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -2,
        }}
      >
        <CardReview quotes={QUOTE_MOCK} />
      </Box>
    </>
  )
}

export default HomePage
