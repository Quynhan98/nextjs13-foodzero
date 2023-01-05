'use client'

import '@fontsource/lato'
import '@fontsource/rufina'

import React, { useEffect } from 'react'
import { SWRConfig } from 'swr'
import { useRouter, usePathname } from 'next/navigation'
import { Box, Center, ChakraProvider } from '@chakra-ui/react'

// Constants
import { BASE_URL, LOCAL_STORAGE_KEY, PAGE_URL } from '@constants/index'

// Context
import { AuthProvider } from '@contexts/AuthProvider'
import { BookingProvider } from '@contexts/BookingProvider'

// Services
import { swrFetcher } from '@services/api'

// Utils
import { getLocalStorage } from '@utils/localStorage'

// Components
import Header from '@components/Header'
import Footer from '@components/Footer'

// Themes
import { customTheme } from '@themes/index'

export interface IRootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const userId = getLocalStorage(LOCAL_STORAGE_KEY.USER_ID)

  const isLoginPage = pathname === PAGE_URL.LOGIN.URL

  useEffect(() => {
    // Redirect to Login page with unauthorized user
    if (!userId && !isLoginPage) {
      router.push(PAGE_URL.LOGIN.URL)
    }
  }, [isLoginPage, userId])

  return (
    <html lang="en">
      <head>
        <title>Foodzero</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Foodzero" />
        <meta name="description" content="This is a food restaurant" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Foodzero" />
        <meta property="og:description" content="This is a food restaurant" />
        <meta property="og:url" content={BASE_URL} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Foodzero" />
        <meta
          property="twitter:description"
          content="This is a food restaurant"
        />
        <link rel="icon" href="/images/logo.webp" />
      </head>
      <body>
        <SWRConfig
          value={{
            fetcher: swrFetcher,
          }}
        >
          <AuthProvider>
            <ChakraProvider theme={customTheme}>
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
            </ChakraProvider>
          </AuthProvider>
        </SWRConfig>
      </body>
    </html>
  )
}
