// Constants
import {
  INVALID_EMAIL_FORMAT,
  INVALID_PASSWORD_FORMAT,
  REGEX_EMAIL,
  REGEX_PASSWORD,
  REQUIRED,
} from '@constants/index'

// Types
import { LoginAccount } from '@self-types/index'

type ErrorMsgs = { email: string; password: string }

export interface checkValidateProps {
  value: string
  regex: RegExp
  errorMess: string
}

export interface ValidationResult {
  isValid: boolean
  error?: ErrorMsgs
}

// Check validate input value
export const checkValidate = (args: checkValidateProps): string => {
  switch (true) {
    // case required
    case args.value === '':
      return REQUIRED
    // case error format with regex
    case !args.regex.test(args.value):
      return args.errorMess
    // case valid input successfully
    default:
      return ''
  }
}

export const loginValidate = (loginAccount: LoginAccount): ValidationResult => {
  const result: ValidationResult = { isValid: true }
  result.error = { email: '', password: '' }

  const validateEmail = checkValidate({
    value: loginAccount.email,
    regex: REGEX_EMAIL,
    errorMess: INVALID_EMAIL_FORMAT,
  })

  const validatePassword = checkValidate({
    value: loginAccount.password,
    regex: REGEX_PASSWORD,
    errorMess: INVALID_PASSWORD_FORMAT,
  })

  // Email
  if (validateEmail) {
    result.error.email = validateEmail
  }

  // Password
  if (validatePassword) {
    result.error.password = validatePassword
  }

  // Result
  if (result.error.email || result.error.password) {
    result.isValid = false
  }

  return result
}
