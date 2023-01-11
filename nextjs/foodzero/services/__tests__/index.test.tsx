// Constants
import { SERVER_ERROR } from '@constants/index'

// Services
import { addToBooking } from '@services/index'

describe('Test addBooking', () => {
  const mockData = {
    reservations: [
      {
        date: '01/06/2023',
        time: '11:00 am',
        person: '1 Person',
      },
    ],
  }

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    }),
  ) as jest.Mock

  it('should call fetch success', async () => {
    try {
      const response = await addToBooking(mockData, `users/1`)

      if (response) {
        expect(response).toBeCalled()
        expect(response.reservations.length).toEqual(
          mockData.reservations.length,
        )
      }
    } catch (error) {
      console.log(error)
    }
  })

  it('should add booking error', async () => {
    jest.fn().mockImplementationOnce(() => Promise.reject(SERVER_ERROR))

    try {
      const response = await addToBooking(mockData, `users/1`)

      if (response) {
        expect(response).toBeCalled()
        expect(response).toEqual(SERVER_ERROR)
      }
    } catch (error) {
      console.log(error)
    }
  })
})
