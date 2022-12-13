import { memo, useState } from 'react'
import Image from 'next/image'
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'

// Components
import UserAvatar from '@components/UserAvatar'

// Constants
import { BREAKPOINTS } from '@constants/index'

type QuoteType = {
  id: string
  authorName: string
  job: string
  quote: string
  avatar: string
}

interface TextSliderProps extends BoxProps {
  quotes: QuoteType[]
}

const TextSlider = ({ quotes, ...rest }: TextSliderProps) => {
  const [isMobile] = useMediaQuery(BREAKPOINTS.MEDIUM)
  const [quote, setQuote] = useState(quotes[0])
  const [currentSlider, setCurrentSlider] = useState<number>(1)

  const handleGoBack = () => {
    const newCurrentSlider = currentSlider > 1 ? currentSlider - 1 : 1
    setCurrentSlider(newCurrentSlider)

    const currentQuote = quotes[newCurrentSlider - 1]
    setQuote(currentQuote)
  }

  const handleNext = () => {
    const newCurrentSlider =
      currentSlider < quotes.length ? currentSlider + 1 : currentSlider
    setCurrentSlider(newCurrentSlider)

    const currentQuote = quotes[newCurrentSlider - 1]
    setQuote(currentQuote)
  }

  return (
    <Box {...rest}>
      <Text
        size={{ base: 'default', md: 'extraLarge' }}
        variant="secondary"
        fontFamily="Rufina"
        maxW="1262px"
      >
        “ {quote.quote}
      </Text>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        pt={{ base: '20px', md: '86px' }}
        gap={{ base: '15px', md: '10px' }}
      >
        <UserAvatar
          src={quote.avatar}
          name={quote.authorName}
          job={quote.job}
        />
        <Flex
          alignItems="center"
          width={{ base: '100%', md: '40%' }}
          justifyContent="flex-end"
        >
          <Button
            data-testid="buttonBack"
            onClick={handleGoBack}
            variant="light"
          >
            <Image
              width={isMobile ? 23 : 46}
              height={isMobile ? 13 : 26}
              src="/images/leftArrow.webp"
              alt="right arrow icon"
            />
          </Button>
          <Text
            fontFamily="rufina"
            fontSize={{ base: 'base', md: 'md' }}
            lineHeight={{ base: 'base', md: 'sm' }}
            variant="secondary"
          >
            {currentSlider}/{quotes.length}
          </Text>
          <Button data-testid="buttonNext" onClick={handleNext} variant="light">
            <Image
              width={isMobile ? 23 : 46}
              height={isMobile ? 13 : 26}
              src="/images/rightArrow.webp"
              alt="right arrow icon"
            />
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default memo(TextSlider)
