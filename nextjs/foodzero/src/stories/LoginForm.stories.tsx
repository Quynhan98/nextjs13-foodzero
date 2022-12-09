import { useState, useCallback, ChangeEvent, FormEvent } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Mocks
import { USERS_MOCK } from '@mocks/mockData'

// Components
import LoginForm from '@components/LoginForm'

// Utils
import { loginValidate } from '@utils/validation'

// Types
import { LoginAccount } from '@self-types/index'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Component/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const login: LoginAccount = {
  email: '',
  password: '',
}

const Template: ComponentStory<typeof LoginForm> = (args) => {
  const [loginAccount, setLoginAccount] = useState(login)
  const [errorMsg, setErrorMsg] = useState<string>('')

  // Check disable button login
  const isDisableButton = !loginAccount.email || !loginAccount.password

  // Get input value
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const inputValues = { [e.target.name]: e.target.value }

    setLoginAccount((prev) => ({
      ...prev,
      ...inputValues,
    }))
  }, [])

  // Function submit login form
  const handleSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()
      const loginFormValidate = loginValidate(loginAccount, USERS_MOCK)

      if (!loginFormValidate.isValid && loginFormValidate.error) {
        setErrorMsg(loginFormValidate.error)
      } else {
        alert(`Login Successfully!`)
      }
    },
    [loginAccount],
  )

  return (
    <Box maxW="1644px" backgroundColor="alabaster">
      <LoginForm
        {...args}
        onSubmitForm={handleSubmitForm}
        onChangeForm={handleChange}
        error={errorMsg}
        isDisable={isDisableButton}
      />
    </Box>
  )
}

export const Default = Template.bind({})
