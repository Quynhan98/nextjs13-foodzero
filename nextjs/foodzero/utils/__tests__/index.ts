// Utils
import {
  formattedDate,
  formattedHour,
  formatDate,
  formatPhoneNumber,
} from '@utils/index'

describe('Get format date(Month DD, YYYY) and time', () => {
  const date = '2022-12-06T23:29:35.000Z'

  it('should get date (Month DD, YYYY)', () => {
    const newDate = formattedDate(date)

    expect(newDate).toEqual('December 06, 2022')
  })

  it('should get time', () => {
    const time = formattedHour(date)

    expect(time).toEqual('06:29 AM')
  })
})

describe('Get format date (MM/DD/YYYY)', () => {
  const date = new Date('2022-12-06')

  it('should get date', () => {
    const newDate = formatDate(date)

    expect(newDate).toEqual('12/06/2022')
  })
})

describe('Get format phone number', () => {
  it('should format phone when less than 4 numbers', () => {
    const phoneFormat = formatPhoneNumber('123')

    expect(phoneFormat).toEqual('123')
  })

  it('should format phone when less than 7 numbers', () => {
    const phoneFormat = formatPhoneNumber('123456')

    expect(phoneFormat).toEqual('(123) 456')
  })

  it('should format phone when full number is available', () => {
    const phoneFormat = formatPhoneNumber('1234567891')

    expect(phoneFormat).toEqual('(123) 456-7891')
  })
})
