import { Box } from '@chakra-ui/react'

// Components
import CardReview from '@components/CardReview'

// Mocks
import { QUOTE_MOCK } from '@mocks/mockData'

const Testimonial = () => {
  return (
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
  )
}

export default Testimonial
