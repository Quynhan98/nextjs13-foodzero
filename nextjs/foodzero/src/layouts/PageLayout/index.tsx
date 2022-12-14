import React, { memo } from 'react'
import { useRouter } from 'next/router'
import { Box, Center } from '@chakra-ui/react'

// Components
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'

// Constants
import { PAGE_URL } from '@constants/index'

export interface IPageLayoutsProps {
  children: React.ReactNode
}

const PageLayouts = ({ children }: IPageLayoutsProps) => {
  const router = useRouter()
  const { pathname } = router

  const isLoginPage = pathname === PAGE_URL.LOGIN.URL

  return (
    <>
      {isLoginPage ? (
        <Center
          as="main"
          minHeight="100vh"
          pb="150px"
          backgroundColor="alabaster"
        >
          {children}
        </Center>
      ) : (
        <>
          <Header />
          <Box
            as="main"
            minHeight="100vh"
            maxWidth="1664px"
            width="100%"
            margin="0 auto"
            padding={{ base: '12px', lg: '0px' }}
          >
            {children}
          </Box>
          <Footer />
        </>
      )}
    </>
  )
}

export default memo(PageLayouts)
