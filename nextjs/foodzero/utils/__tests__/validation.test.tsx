// Constants
import { INVALID_EMAIL_FORMAT, REGEX_EMAIL, REQUIRED } from '@constants/index'

// Validation
import { checkValidate, loginValidate } from '@utils/validation'

describe('checkValidate data', () => {
  it('should returns an error when the input value is empty', () => {
    const props = {
      value: '',
      regex: REGEX_EMAIL,
      errorMess: INVALID_EMAIL_FORMAT,
    }
    const errorMessage = checkValidate(props)

    expect(errorMessage).toEqual(REQUIRED)
  })

  it('should returns an error when the input value is in the wrong format', () => {
    const props = {
      value: 'emailInValidFormat',
      regex: REGEX_EMAIL,
      errorMess: INVALID_EMAIL_FORMAT,
    }
    const errorMessage = checkValidate(props)

    expect(errorMessage).toEqual(INVALID_EMAIL_FORMAT)
  })
})

describe('loginValidate', () => {
  const accountMock = {
    email: 'foodzero@gmail.com',
    password: '123456789',
  }

  const accountMockError = {
    email: 'foodzero',
    password: '1234567',
  }

  it('should login invalid', () => {
    const response = loginValidate(accountMockError)

    expect(response.isValid).toEqual(false)
  })

  it('should login valid', () => {
    const response = loginValidate(accountMock)

    expect(response.isValid).toEqual(true)
  })

  it('should error when logging in email and password is not valid', () => {
    const response = loginValidate(accountMockError)

    expect(response.isValid).toEqual(false)
    expect(response.error).toBeTruthy()
  })
})
