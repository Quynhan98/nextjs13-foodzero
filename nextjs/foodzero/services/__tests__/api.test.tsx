// Constants
import { SERVER_ERROR, USERS_ENDPOINT } from '@constants/index'

// Mocks
import { USERS_MOCK } from '@mocks/mockData'

// Services
import { fetcherInstance, fetcherInstanceAPI } from '@services/api'

describe('Test fetcherInstance function helper', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(USERS_MOCK),
    }),
  ) as jest.Mock

  test('Test function fetcherInstance is success', async () => {
    const response = await fetcherInstance(USERS_ENDPOINT)

    expect(response.length).toEqual(USERS_MOCK.length)
  })

  test('Test function fetcherInstance is error', async () => {
    jest.fn().mockImplementationOnce(() => Promise.reject(SERVER_ERROR))

    let response

    try {
      response = await fetcherInstance(USERS_ENDPOINT)
    } catch (error) {
      expect(response).toEqual(SERVER_ERROR)
    }
  })
})

describe('Test fetcherInstanceAPI function helper', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(USERS_MOCK),
    }),
  ) as jest.Mock

  test('Test function fetcherInstanceAPI is success', async () => {
    const response = await fetcherInstanceAPI(USERS_ENDPOINT)

    expect(response.length).toEqual(USERS_MOCK.length)
  })

  test('Test function fetcherInstanceAPI is error', async () => {
    jest.fn().mockImplementationOnce(() => Promise.reject(SERVER_ERROR))

    let response

    try {
      response = await fetcherInstanceAPI(USERS_ENDPOINT)
    } catch (error) {
      expect(response).toEqual(SERVER_ERROR)
    }
  })
})
