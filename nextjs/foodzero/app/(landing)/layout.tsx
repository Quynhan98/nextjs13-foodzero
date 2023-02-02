'use client'

import { ReactNode, useEffect } from 'react'
import { SWRConfig } from 'swr'
import { useRouter, usePathname } from 'next/navigation'
import { Box } from '@chakra-ui/react'

// Constants
import { LOCAL_STORAGE_KEY, PAGE_URL } from '@constants/index'

// Contexts
import { BookingProvider } from '@contexts/BookingProvider'

// Services
import { swrFetcher } from '@services/api'

// Utils
import { getLocalStorage } from '@utils/localStorage'

// Components
import Header from '@components/Header'
import Footer from '@components/Footer'
import GeneralProvider from '@components/GeneralProvider'

// Types
import { UserSession } from '@self-types/AuthContext'

export interface IRootLayoutProps {
  children: ReactNode
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
          <GeneralProvider>
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
          </GeneralProvider>
        </SWRConfig>
      </body>
    </html>
  )
}
