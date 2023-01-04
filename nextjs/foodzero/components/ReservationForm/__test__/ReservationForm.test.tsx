import React from 'react'

// Utils
import {
  render,
  screen,
  cleanup,
  fireEvent,
  RenderResult,
} from '@utils/testUtils'

// Components
import ReservationForm from '@components/ReservationForm'

describe('ReservationForm', () => {
  const userMock = {
    firstName: 'John',
    lastName: 'Wick',
    email: 'John@gmail.com',
    phone: '1231231231',
    date: '12/09/2022',
    time: '12:00 am',
    person: '2 Person',
  }

  const props = {
    onSubmitForm: jest.fn(),
    handleChangeDate: jest.fn(),
    onChangeField: jest.fn(),
    isDisable: false,
    isShowFullField: true,
  }

  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(<ReservationForm {...props} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('ReservationForm with full field matches snapshot', () => {
    const { container } = wrapper

    expect(container).toMatchSnapshot()
  })

  it('ReservationForm default matches snapshot', () => {
    const { container } = render(
      <ReservationForm {...props} isShowFullField={false} />,
    )

    expect(container).toMatchSnapshot()
  })

  it('Should call onChange first name', () => {
    const firstName = screen.getByPlaceholderText('First Name')

    fireEvent.change(firstName, {
      target: { value: userMock.firstName },
    })

    expect(props.onChangeField).toBeCalled()
    expect(firstName).toHaveValue(userMock.firstName)
  })

  it('Should call onChange last name', () => {
    const lastName = screen.getByPlaceholderText('Last Name')

    fireEvent.change(lastName, {
      target: { value: userMock.lastName },
    })

    expect(props.onChangeField).toBeCalled()
    expect(lastName).toHaveValue(userMock.lastName)
  })

  it('Should call onChange email', () => {
    const email = screen.getByPlaceholderText('Email')

    fireEvent.change(email, {
      target: { value: userMock.email },
    })

    expect(props.onChangeField).toBeCalled()
    expect(email).toHaveValue(userMock.email)
  })

  it('Should call onChange phone', () => {
    const phone = screen.getByPlaceholderText('Phone')

    fireEvent.change(phone, {
      target: { value: userMock.phone },
    })

    expect(props.onChangeField).toBeCalled()
    expect(phone).toHaveValue(userMock.phone)
  })

  it('Should onchange date picker ', () => {
    const datePicker = screen.getByPlaceholderText('MM/DD/YYYY')

    fireEvent.change(datePicker, { target: { value: userMock.date } })

    expect(datePicker).toHaveValue(userMock.date)
  })

  it('Should onchange time ', () => {
    const time = screen.getByTestId('selectTime')

    fireEvent.change(time, { target: { value: userMock.time } })

    expect(time).toHaveValue(userMock.time)
  })

  it('Should onchange person ', () => {
    const person = screen.getByTestId('selectPerson')

    fireEvent.change(person, { target: { value: userMock.person } })

    expect(person).toHaveValue(userMock.person)
  })

  it('Should call submit form', () => {
    const button = screen.getByRole('button')

    fireEvent.submit(button)

    expect(props.onSubmitForm).toBeCalled()
  })
})
