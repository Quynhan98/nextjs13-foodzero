import React from 'react'

// Utils
import { render, screen, cleanup, fireEvent } from '@utils/testUtils'

// Components
import LoginForm from '@components/LoginForm'
import { INVALID_EMAIL_OR_PASSWORD } from '@constants/errorMessage'

describe('LoginForm', () => {
  const accountMock = {
    email: 'foodzero@gmail.com',
    password: '123456789',
  }

  const props = {
    onChangeForm: jest.fn(),
    onSubmitForm: jest.fn(),
    error: '',
    isDisable: false,
  }

  beforeEach(() => {
    render(<LoginForm {...props} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('LoginForm matches snapshot', () => {
    const { container } = render(<LoginForm {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should call onChange input email', () => {
    const email = screen.getByTestId('email')

    fireEvent.change(email, {
      target: { value: accountMock.email },
    })

    expect(props.onChangeForm).toBeCalled()
    expect(email).toHaveValue(accountMock.email)
  })

  it('Should call onChange input password', () => {
    const password = screen.getByTestId('password')

    fireEvent.change(password, {
      target: { value: accountMock.password },
    })

    expect(props.onChangeForm).toBeCalled()
    expect(password).toHaveValue(accountMock.password)
  })

  it('Should call submit form', () => {
    const button = screen.getByRole('button')

    fireEvent.submit(button)

    expect(props.onSubmitForm).toBeCalled()
  })

  it('Should render ErrorMessage', () => {
    render(<LoginForm {...props} error={INVALID_EMAIL_OR_PASSWORD} />)

    expect(screen.getByText(INVALID_EMAIL_OR_PASSWORD)).toHaveTextContent(
      INVALID_EMAIL_OR_PASSWORD,
    )
  })
})
