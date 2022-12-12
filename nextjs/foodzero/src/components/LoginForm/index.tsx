import { ChangeEvent, FormEvent, memo } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react'

interface LoginFormProps {
  onSubmitForm?: (e: FormEvent<HTMLFormElement>) => void
  onChangeForm?: (e: ChangeEvent<HTMLInputElement>) => void
  emailError?: string
  passwordError?: string
  isDisable: boolean
}

const LoginForm = ({
  onSubmitForm,
  onChangeForm,
  emailError,
  passwordError,
  isDisable,
}: LoginFormProps) => {
  return (
    <form onSubmit={onSubmitForm}>
      <FormControl
        display="flex"
        flexDirection="column"
        justifyContent="center"
        isInvalid={!!(emailError || passwordError)}
        padding={{ base: '25px', md: '50px' }}
      >
        <FormLabel
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="bold"
          fontFamily="Rufina"
          textAlign="center"
          pb={{ base: '58px', md: '115px' }}
        >
          Login
        </FormLabel>
        <Input
          data-testid="email"
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChangeForm}
        />
        {emailError && (
          <FormErrorMessage fontSize={{ base: 'xxs', md: 'base' }}>
            {emailError}
          </FormErrorMessage>
        )}
        <Input
          data-testid="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChangeForm}
          mt={{ base: '25px', md: '50px' }}
        />
        {passwordError && (
          <FormErrorMessage fontSize={{ base: 'xxs', md: 'base' }}>
            {passwordError}
          </FormErrorMessage>
        )}
        <Button
          mt={{ base: '40px', md: '80px' }}
          type="submit"
          isDisabled={isDisable}
          _hover={{ backgroundColor: 'none' }}
        >
          Sign In
        </Button>
      </FormControl>
    </form>
  )
}

export default memo(LoginForm)
