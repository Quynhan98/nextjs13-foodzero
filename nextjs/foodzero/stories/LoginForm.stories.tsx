import { useState, useCallback, ChangeEvent, FormEvent } from 'react'
import { Meta } from '@storybook/react'

// Mocks
import { USERS_MOCK } from '@mocks/mockData'

// Components
import LoginForm from '@components/LoginForm'

// Utils
import { loginValidate } from '@utils/validation'

// Types
import { LoginAccount } from '../types/index'

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
    (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()
      const loginFormValidate = loginValidate(loginAccount, USERS_MOCK)

      if (!loginFormValidate.isValid && loginFormValidate.error) {
        setErrorMsgs(loginFormValidate.error)
      } else {
        alert(`Login Successfully!`)

        setErrorMsgs(initErrorMsgs)
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
