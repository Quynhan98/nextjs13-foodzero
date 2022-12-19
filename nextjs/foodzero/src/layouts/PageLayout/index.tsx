import React, { memo, useEffect, useState } from 'react'
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

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

export interface IPageLayoutsProps {
  children: React.ReactNode
}

const PageLayouts = ({ children }: IPageLayoutsProps) => {
  const router = useRouter()
  const { pathname } = router
  const { userId } = useAuthContext()
  const [authorized, setAuthorized] = useState(false)

  const isLoginPage = pathname === PAGE_URL.LOGIN.URL
  const hasAccount = !!getLocalStorage(LOCAL_STORAGE_KEY.USER_ID)

  useEffect(() => {
    // Redirect to Login page with unauthorized user
    if (hasAccount || !!userId) {
      setAuthorized(true)
    } else {
      setAuthorized(false)

      router.push(PAGE_URL.LOGIN.URL)
    }
  }, [hasAccount, userId])

  if (!authorized && !isLoginPage) return null

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
    </AuthProvider>
  )
}

export default memo(PageLayouts)
