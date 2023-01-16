import { useState, useCallback, ChangeEvent, FormEvent } from 'react'
import { Meta } from '@storybook/react'

// Mocks
import { USERS_MOCK } from '@mocks/mockData'

// Components
import LoginForm from '@components/LoginForm'

// Utils
import { loginValidate } from '@utils/validation'
import { findItemByValue } from '@utils/index'

// Types
import { LoginAccount } from '@self-types/index'

// Constants
import { EMAIL_NOT_EXIST, INVALID_PASSWORD } from '@constants/index'

const meta: Meta<typeof LoginForm> = {
  title: 'Components/LoginForm',
  component: LoginForm,
  parameters: {
    backgrounds: {
      default: 'alabaster',
      values: [{ name: 'alabaster', value: '#EBF0E4' }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1644px', margin: '0 auto', paddingTop: '50px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

const login: LoginAccount = {
  email: '',
  password: '',
}

const initErrorMsgs = {
  email: '',
  password: '',
}

const LoginWithHooks = () => {
  const [loginAccount, setLoginAccount] = useState(login)
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
    (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()
      const loginFormValidate = loginValidate(loginAccount)

      if (!loginFormValidate.isValid && loginFormValidate.error) {
        setErrorMsgs(loginFormValidate.error)
      } else {
        const users = findItemByValue({
          data: USERS_MOCK,
          value: loginAccount.email,
          key: 'email',
        })

        if (!users) {
          setErrorMsgs((prev) => ({
            ...prev,
            email: EMAIL_NOT_EXIST,
          }))
        } else if (users && users.password !== loginAccount.password) {
          setErrorMsgs((prev) => ({
            ...prev,
            password: INVALID_PASSWORD,
          }))
        } else {
          alert(`Login Successfully!`)

          setErrorMsgs(initErrorMsgs)
        }
      }
    },
    [loginAccount],
  )

  return (
    <LoginForm
      onSubmitForm={handleSubmitForm}
      onChangeForm={handleChange}
      emailError={errorMsgs.email}
      passwordError={errorMsgs.password}
      isDisable={isDisableButton}
    />
  )
}

export const Default = {
  render: () => <LoginWithHooks />,
}
