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

// Themes
import { rufina } from '@themes/index'

type QuoteType = {
  id: string
  authorName: string
  job: string
  quote: string
  avatar: string
}

interface CardReviewProps extends BoxProps {
  quotes: QuoteType[]
}

const CardReview = ({ quotes, ...rest }: CardReviewProps) => {
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
        size="extraLarge"
        variant="secondary"
        fontFamily={rufina.style.fontFamily}
        fontWeight="bold"
        maxW={{ base: '100%', md: '830px', '2xl': '1262px' }}
      >
        “ {quote.quote}
      </Text>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        pt={{ base: '20px', '2xl': '86px' }}
        gap={{ base: '15px', '2xl': '10px' }}
      >
        <UserAvatar
          src={quote.avatar}
          name={quote.authorName}
          job={quote.job}
        />
        <Flex alignItems="center" width="100%" justifyContent="flex-end">
          <Button
            data-testid="buttonBack"
            onClick={handleGoBack}
            variant="light"
            size="small"
          >
            <Image
              width={isMobile ? 23 : 46}
              height={isMobile ? 13 : 26}
              src="/images/leftArrow.webp"
              alt="right arrow icon"
            />
          </Button>
          <Text
            fontFamily={rufina.style.fontFamily}
            fontSize={{ base: 'base', '2xl': 'md' }}
            lineHeight={{ base: 'base', '2xl': 'sm' }}
            variant="secondary"
            textAlign="center"
            pl={{ base: '20px', md: '30px', '2xl': '40px' }}
            pr={{ base: '20px', md: '30px', '2xl': '40px' }}
          >
            {currentSlider}/{quotes.length}
          </Text>
          <Button
            data-testid="buttonNext"
            onClick={handleNext}
            variant="light"
            size="small"
          >
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

export default memo(CardReview)
