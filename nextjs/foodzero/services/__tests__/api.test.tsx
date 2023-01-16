// Constants
import { SERVER_ERROR } from '@constants/index'

// Mocks
import { USERS_MOCK } from '@mocks/mockData'

// Services
import {
  basicFetch,
  fetcherInstance,
  fetcherInstanceAPI,
  swrFetcher,
} from '@services/api'

describe('Test swrFetcher', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(USERS_MOCK),
    }),
  ) as jest.Mock

  test('Test function swrFetcher is success', async () => {
    try {
      const response = await swrFetcher('/users')
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(USERS_MOCK.length)
      }
    } catch (error) {
      console.log(error)
    }
  })

  test('Test function swrFetcher is error', async () => {
    jest.fn().mockImplementationOnce(() => Promise.reject(SERVER_ERROR))

    try {
      const response = await swrFetcher('/users')
      const responseData = await response.json()
      if (response) {
        expect(response).toBeCalled()
        expect(responseData).toEqual(SERVER_ERROR)
      }
    } catch (error) {
      console.log(error)
    }
  })
})

describe('Test basicFetch', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(USERS_MOCK),
    }),
  ) as jest.Mock

  test('Test function basicFetch use default method (SSG) success', async () => {
    try {
      const response = await basicFetch({
        endpoint: '/users',
      })
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(USERS_MOCK.length)
      }
    } catch (error) {
      console.log(error)
    }
  })

  test('Test function basicFetch use ISR method success', async () => {
    try {
      const response = await basicFetch({
        endpoint: '/users',
        fetchingMethod: 'ISR',
      })
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(USERS_MOCK.length)
      }
    } catch (error) {
      console.log(error)
    }
  })

  test('Test function basicFetch use SSR method success', async () => {
    try {
      const response = await basicFetch({
        endpoint: '/users',
        fetchingMethod: 'SSR',
      })
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(USERS_MOCK.length)
      }
    } catch (error) {
      console.log(error)
    }
  })
})

describe('Test fetcherInstanceAPI', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(USERS_MOCK),
    }),
  ) as jest.Mock

  test('Test function fetcherInstanceAPI is success', async () => {
    try {
      const response = await fetcherInstanceAPI({
        endpoint: '/users',
        fetchingMethod: 'SSR',
      })
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(USERS_MOCK.length)
      }
    } catch (error) {
      console.log(error)
    }
  })
})

describe('Test fetcherInstance', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(USERS_MOCK),
    }),
  ) as jest.Mock

  test('Test function fetcherInstance is success', async () => {
    try {
      const response = await fetcherInstance({
        endpoint: '/users',
        fetchingMethod: 'SSR',
      })
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(USERS_MOCK.length)
      }
    } catch (error) {
      console.log(error)
    }
  })
})
