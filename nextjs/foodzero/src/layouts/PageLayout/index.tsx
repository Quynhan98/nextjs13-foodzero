import React, { memo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Center } from '@chakra-ui/react'

// Components
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'

// Constants
import { LOCAL_STORAGE_KEY, PAGE_URL } from '@constants/index'

// Context
import { AuthProvider } from '@contexts/AuthProvider'

// Services
import { getLocalStorage } from '@utils/localStorage'
import { BookingProvider } from '@contexts/BookingProvider'

export interface IPageLayoutsProps {
  children: React.ReactNode
}

const PageLayouts = ({ children }: IPageLayoutsProps) => {
  const router = useRouter()
  const { pathname } = router

  const isLoginPage = pathname === PAGE_URL.LOGIN.URL
  const userId = getLocalStorage(LOCAL_STORAGE_KEY.USER_ID)

  useEffect(() => {
    // Redirect to Login page with unauthorized user
    if (!userId && !isLoginPage) {
      router.push(PAGE_URL.LOGIN.URL)
    }
  }, [isLoginPage, userId])

  return (
    <AuthProvider>
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
        <BookingProvider>
          <Header />
          <Box
            as="main"
            minHeight="100vh"
            maxWidth="1920px"
            width="100%"
            margin="0 auto"
          >
            {children}
          </Box>
          <Footer />
        </BookingProvider>
      )}
    </AuthProvider>
  )
}

export default memo(PageLayouts)
