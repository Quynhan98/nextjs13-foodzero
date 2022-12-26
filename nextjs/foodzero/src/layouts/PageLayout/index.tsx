import React, { lazy, memo, Suspense, useEffect } from 'react'
import { SWRConfig } from 'swr'
import { useRouter } from 'next/router'
import { Box, Center, Spinner } from '@chakra-ui/react'

// Layouts
import Header from '@layouts/Header'

// Constants
import { LOCAL_STORAGE_KEY, PAGE_URL } from '@constants/index'

// Context
import { AuthProvider } from '@contexts/AuthProvider'
import { LoadingProvider } from '@contexts/LoadingProvider'
import { BookingProvider } from '@contexts/BookingProvider'

// Services
import { fetcherInstanceAPI } from '@services/api'

// Utils
import { getLocalStorage } from '@utils/localStorage'

const Footer = lazy(() => import('@layouts/Footer'))

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
    <SWRConfig
      value={{
        fetcher: fetcherInstanceAPI,
      }}
    >
      <LoadingProvider>
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
              <Suspense fallback={<Spinner />}>
                <Footer />
              </Suspense>
            </BookingProvider>
          )}
        </AuthProvider>
      </LoadingProvider>
    </SWRConfig>
  )
}

export default memo(PageLayouts)
