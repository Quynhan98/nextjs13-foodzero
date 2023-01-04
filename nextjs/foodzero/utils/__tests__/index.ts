// Utils
import { formattedDate, formattedHour } from '@utils/index'

describe('Get format date and time', () => {
  const date = '2022-12-06T23:29:35.000Z'

  it('should get date', () => {
    const formatDate = formattedDate(date)

    expect(formatDate).toEqual('December 06, 2022')
  })

  it('should get time', () => {
    const formatDate = formattedHour(date)

    expect(formatDate).toEqual('06:29 AM')
  })
})
