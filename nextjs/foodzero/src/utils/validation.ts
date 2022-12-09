// Constants
import {
  EMAIL_NOT_EXIST,
  INVALID_EMAIL_OR_PASSWORD,
  REGEX_EMAIL,
  REGEX_PASSWORD,
  REQUIRED,
} from '@constants/index'

// Types
import { IUser, LoginAccount } from '@self-types/index'

// Utils
import { findItemByValue } from '@utils/index'

export interface checkValidateProps {
  value: string
  regex: RegExp
  errorMess: string
}

export interface ValidationResult {
  isValid: boolean
  error?: string
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

export const loginValidate = (
  loginAccount: LoginAccount,
  users: IUser[] | [],
): ValidationResult => {
  const result: ValidationResult = { isValid: true }
  result.error = ''

  const user = findItemByValue({
    data: users,
    value: loginAccount.email,
    key: 'email',
  })

  const validateEmail = checkValidate({
    value: loginAccount.email,
    regex: REGEX_EMAIL,
    errorMess: INVALID_EMAIL_OR_PASSWORD,
  })

  const validatePassword = checkValidate({
    value: loginAccount.password,
    regex: REGEX_PASSWORD,
    errorMess: INVALID_EMAIL_OR_PASSWORD,
  })

  if (
    validateEmail ||
    validatePassword ||
    loginAccount.password !== user?.password
  ) {
    result.error = INVALID_EMAIL_OR_PASSWORD
  }

  if (!user) {
    result.error = EMAIL_NOT_EXIST
  }

  // Result
  if (result.error) {
    result.isValid = false
  }

  return result
}
