// Utils
import {
  cleanup,
  screen,
  render,
  RenderResult,
  fireEvent,
  waitFor,
} from '@utils/testUtils'
import { formatPhoneNumber } from '@utils/index'

// Constants
import {
  INVALID_EMAIL_FORMAT,
  PHONE_ERROR_LENGTH,
  SERVER_ERROR,
  SNACKBAR_BOOKING_SUCCESS,
} from '@constants/index'

// App
import ContactPage from 'app/(landing)/contact/ContactPage'

describe('Contact page', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    }),
  ) as jest.Mock

  const bookingMock = {
    firstName: 'John',
    lastName: 'Wick',
    email: 'John@gmail.com',
    phone: '1231231231',
    date: '12/21/2022',
    time: '12:00 am',
    person: '2 Person',
  }

  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(<ContactPage />)
  })

  afterEach(() => {
    cleanup()
  })

  it('Renders Contact page correctly', () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })

  it('Should call onChange first name', () => {
    const firstName = screen.getByPlaceholderText('First Name')

    fireEvent.change(firstName, {
      target: { value: bookingMock.firstName },
    })

    expect(firstName).toHaveValue(bookingMock.firstName)
  })

  it('Should call onChange last name', () => {
    const lastName = screen.getByPlaceholderText('Last Name')

    fireEvent.change(lastName, {
      target: { value: bookingMock.lastName },
    })

    expect(lastName).toHaveValue(bookingMock.lastName)
  })

  it('Should call onChange email', () => {
    const email = screen.getByPlaceholderText('Email')

    fireEvent.change(email, {
      target: { value: bookingMock.email },
    })

    expect(email).toHaveValue(bookingMock.email)
  })

  it('Should call onChange phone', () => {
    const phone = screen.getByPlaceholderText('Phone')

    fireEvent.change(phone, {
      target: { value: bookingMock.phone },
    })

    expect(phone).toHaveValue(formatPhoneNumber(bookingMock.phone))
  })

  it('Should call onChange date picker', () => {
    const date = screen.getByPlaceholderText('MM/DD/YYYY')

    fireEvent.change(date, {
      target: { value: bookingMock.date },
    })

    expect(date).toHaveValue(bookingMock.date)
  })

  it('Should onchange time ', () => {
    const time = screen.getByTestId('selectTime')

    fireEvent.change(time, { target: { value: bookingMock.time } })

    expect(time).toHaveValue(bookingMock.time)
  })

  it('Should onchange person ', () => {
    const person = screen.getByTestId('selectPerson')

    fireEvent.change(person, { target: { value: bookingMock.person } })

    expect(person).toHaveValue(bookingMock.person)
  })

  it('Should call submit form booking', () => {
    const button = screen.getByRole('button', { name: /Book Now/i })

    fireEvent.submit(button)

    waitFor(() => {
      expect(screen.getByText(SNACKBAR_BOOKING_SUCCESS)).toBeTruthy()
    })
  })

  it('Should call submit form booking with server error', () => {
    jest.fn().mockImplementationOnce(() => Promise.reject(SERVER_ERROR))

    const button = screen.getByRole('button', { name: /Book Now/i })

    fireEvent.submit(button)

    waitFor(() => {
      expect(screen.getByText(SERVER_ERROR)).toBeTruthy()
    })
  })

  it('Should call submit form booking with format email and phone error', () => {
    const email = screen.getByPlaceholderText('Email')
    const phone = screen.getByPlaceholderText('Phone')
    const button = screen.getByRole('button', { name: /Book Now/i })

    fireEvent.change(email, { target: { value: 'notEmail' } })
    fireEvent.change(phone, { target: { value: '00' } })
    fireEvent.submit(button)

    waitFor(() => {
      expect(screen.getByText(PHONE_ERROR_LENGTH)).toBeTruthy()
      expect(screen.getByText(INVALID_EMAIL_FORMAT)).toBeTruthy()
    })
  })
})
