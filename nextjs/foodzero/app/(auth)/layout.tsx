'use client'

import React from 'react'
import { Center, ChakraProvider } from '@chakra-ui/react'

// Context
import { AuthProvider } from '@contexts/AuthProvider'
import { LoadingProvider } from '@contexts/LoadingProvider'

// Themes
import { customTheme } from '@themes/index'

export interface IAuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={customTheme}>
          <LoadingProvider>
            <AuthProvider>
              <Center
                as="main"
                minHeight="100vh"
                pb="150px"
                backgroundColor="alabaster"
              >
                {children}
              </Center>
            </AuthProvider>
          </LoadingProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
