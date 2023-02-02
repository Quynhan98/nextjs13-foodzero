'use client'

import { ReactNode } from 'react'
import { Center } from '@chakra-ui/react'

// Components
import GeneralProvider from '@components/GeneralProvider'

export interface IAuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <html lang="en">
      <body>
        <GeneralProvider>
          <Center
            as="main"
            minHeight="100vh"
            pb="150px"
            backgroundColor="alabaster"
          >
            {children}
          </Center>
        </GeneralProvider>
      </body>
    </html>
  )
}
