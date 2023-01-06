'use client'

import '@fontsource/lato'
import '@fontsource/rufina'

import React from 'react'
import { SWRConfig } from 'swr'
import { Center, ChakraProvider } from '@chakra-ui/react'

// Context
import { AuthProvider } from '@contexts/AuthProvider'

// Services
import { swrFetcher } from '@services/api'

// Themes
import { customTheme } from '@themes/index'

export interface IAuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <html lang="en">
      <body>
        <SWRConfig
          value={{
            fetcher: swrFetcher,
          }}
        >
          <AuthProvider>
            <ChakraProvider theme={customTheme}>
              <Center
                as="main"
                minHeight="100vh"
                pb="150px"
                backgroundColor="alabaster"
              >
                {children}
              </Center>
            </ChakraProvider>
          </AuthProvider>
        </SWRConfig>
      </body>
    </html>
  )
}
