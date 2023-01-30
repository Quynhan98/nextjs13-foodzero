'use client'

import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, useToast } from '@chakra-ui/react'

// Component
import LoginForm from '@components/LoginForm'
import LoadingIndicator from '@components/LoadingIndicator'

// Types
import { LoginAccount } from '@self-types/index'

// Utils
import { loginValidate } from '@utils/validation'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Constants
import { PAGE_URL, SERVER_ERROR } from '@constants/index'

// Services
import { IAuthContext } from '@self-types/AuthContext'

enum ErrorField {
  Email = 'email',
  Password = 'password',
}

const loginInit: LoginAccount = {
  email: '',
  password: '',
}

const initErrorMsgs = {
  email: '',
  password: '',
}

const LoginPage = () => {
  const router = useRouter()
  const toast = useToast()
  const { login } = useAuthContext() as IAuthContext
  const { setLoading, loading } = useLoadingContext()
  const [loginAccount, setLoginAccount] = useState(loginInit)
  const [errorMsgs, setErrorMsgs] = useState(initErrorMsgs)

  // Check disable button login
  const isDisableButton = !loginAccount.email || !loginAccount.password

  // Get input value
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const inputValues = { [e.target.name]: e.target.value }

    setLoginAccount((prev) => ({
      ...prev,
      ...inputValues,
    }))

    setErrorMsgs(initErrorMsgs)
  }, [])

  // Function submit login form
  const handleSubmitForm = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()

      const formatValidation = loginValidate(loginAccount)

      if (!formatValidation.isValid && formatValidation.error) {
        setErrorMsgs(formatValidation.error)
      } else {
        try {
          setLoading(true)
          const response = await login(loginAccount)

          if (response.id) {
            router.push(PAGE_URL.HOME.URL)
          }

          const responseError = response as unknown as {
            field: ErrorField
            message: string
          }

          if (responseError.field) {
            const errorField = {
              email:
                responseError.field === ErrorField.Email
                  ? responseError.message
                  : '',
              password:
                responseError.field === ErrorField.Password
                  ? responseError.message
                  : '',
            }

            setErrorMsgs((prev) => ({
              ...prev,
              ...errorField,
            }))
          }
        } catch (error) {
          toast({
            title: 'Error',
            description: SERVER_ERROR,
            status: 'error',
            isClosable: true,
            position: 'top-right',
          })
        } finally {
          setLoading(false)
        }
      }
    },
    [loginAccount.email, loginAccount.password],
  )

  return (
    <Box
      width={{ base: '100%', md: '500px', '2xl': '700px' }}
      margin={{ base: '12px', md: '0px' }}
    >
      <LoginForm
        onSubmitForm={handleSubmitForm}
        onChangeForm={handleChange}
        emailError={errorMsgs.email}
        passwordError={errorMsgs.password}
        isDisable={isDisableButton}
      />
      {loading && <LoadingIndicator size="lg" />}
    </Box>
  )
}

export default LoginPage
