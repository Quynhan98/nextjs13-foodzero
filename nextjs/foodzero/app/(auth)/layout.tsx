'use client'

import React from 'react'
import { Center, ChakraProvider } from '@chakra-ui/react'

// Context
import { AuthProvider } from '@contexts/AuthProvider'

// Themes
import { customTheme } from '@themes/index'

export interface IAuthLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IAuthLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={customTheme}>
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
        </ChakraProvider>
      </body>
    </html>
  )
}
