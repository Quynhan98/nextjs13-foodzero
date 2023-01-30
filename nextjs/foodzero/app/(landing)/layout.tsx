'use client'

import React, { useEffect } from 'react'
import { SWRConfig } from 'swr'
import { useRouter, usePathname } from 'next/navigation'
import { Box, ChakraProvider } from '@chakra-ui/react'

// Constants
import { LOCAL_STORAGE_KEY, PAGE_URL } from '@constants/index'

// Contexts
import { AuthProvider } from '@contexts/AuthProvider'
import { BookingProvider } from '@contexts/BookingProvider'
import { LoadingProvider } from '@contexts/LoadingProvider'

// Services
import { swrFetcher } from '@services/api'

// Utils
import { getLocalStorage } from '@utils/localStorage'

// Components
import Header from '@components/Header'
import Footer from '@components/Footer'

// Themes
import { customTheme } from '@themes/index'

// Types
import { UserSession } from '@self-types/AuthContext'

export interface IRootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const userSession: UserSession = getLocalStorage(
    LOCAL_STORAGE_KEY.USER_SESSION,
  )

  const isLoginPage = pathname === PAGE_URL.LOGIN.URL

  useEffect(() => {
    // Redirect to Login page with unauthorized user
    if (!userSession.userId && !isLoginPage) {
      router.push(PAGE_URL.LOGIN.URL)
    }
  }, [isLoginPage, userSession.userId])

  return (
    <html lang="en">
      <body>
        <SWRConfig
          value={{
            fetcher: swrFetcher,
          }}
        >
          <ChakraProvider theme={customTheme}>
            <LoadingProvider>
              <AuthProvider>
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
              </AuthProvider>
            </LoadingProvider>
          </ChakraProvider>
        </SWRConfig>
      </body>
    </html>
  )
}
