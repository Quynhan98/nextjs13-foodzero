import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, useToast } from '@chakra-ui/react'

// Component
import LoginForm from '@components/LoginForm'

// Types
import { IUser, LoginAccount } from '@self-types/index'

// Utils
import { loginValidate } from '@utils/validation'
import { setLocalStorage } from '@utils/localStorage'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

// Constants
import {
  LOCAL_STORAGE_KEY,
  LOGIN_ENDPOINT,
  PAGE_URL,
  SERVER_ERROR,
} from '@constants/index'

// Services
import { fetcherInstance } from '@services/api'

const login: LoginAccount = {
  email: '',
  password: '',
}

const initErrorMsgs = {
  email: '',
  password: '',
}

const Login = () => {
  const router = useRouter()
  const toast = useToast()
  const { setUserId } = useAuthContext()
  const [loginAccount, setLoginAccount] = useState(login)
  const [errorMsgs, setErrorMsgs] = useState(initErrorMsgs)

  // Check disable button login
  const isDisableButton = !loginAccount.email || !loginAccount.password

  // Get input value
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const inputValues = { [e.target.name]: e.target.value }

      setLoginAccount((prev) => ({
        ...prev,
        ...inputValues,
      }))

      setErrorMsgs(errorMsgs)
    },
    [errorMsgs],
  )

  // Function submit login form
  const handleSubmitForm = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()

      try {
        const users: IUser[] = await fetcherInstance(LOGIN_ENDPOINT)

        const loginFormValidate = loginValidate(loginAccount, users)

        if (!loginFormValidate.isValid && loginFormValidate.error) {
          setErrorMsgs(loginFormValidate.error)
        } else {
          setUserId(loginFormValidate.data?.userId || '')

          setLocalStorage(
            LOCAL_STORAGE_KEY.USER_ID,
            loginFormValidate.data?.userId,
          )
          setLocalStorage(
            LOCAL_STORAGE_KEY.IS_TOKEN,
            `${(LOCAL_STORAGE_KEY.USER_ID, loginFormValidate.data?.userId)}-LP`,
          )

          router.push(PAGE_URL.HOME.URL)
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: SERVER_ERROR,
          status: 'error',
          isClosable: true,
          position: 'top-right',
        })
      }
    },
    [loginAccount, router, toast],
  )

  return (
    <Box maxW="798px" width="100%" margin="12px">
      <LoginForm
        onSubmitForm={handleSubmitForm}
        onChangeForm={handleChange}
        emailError={errorMsgs.email}
        passwordError={errorMsgs.password}
        isDisable={isDisableButton}
      />
    </Box>
  )
}

export default Login
