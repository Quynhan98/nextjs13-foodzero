// Constants
import { LOCAL_STORAGE_KEY } from '@constants/variables'

// Utils
import { getLocalStorage, setLocalStorage } from '@utils/localStorage'

afterEach(() => {
  jest.clearAllMocks()
})

/**
 * Set local storage
 */
describe('Set local storage correctly', () => {
  const userIdMock = 'gff1'
  it('should set local storage correctly', () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem')

    setLocalStorage(LOCAL_STORAGE_KEY.USER_ID, userIdMock)

    expect(localStorage.setItem).toHaveBeenCalled()
  })

  it('should set local storage correctly on error', () => {
    Object.getPrototypeOf(window.localStorage).setItem = jest.fn(() => {
      throw new Error('ERROR')
    })

    setLocalStorage(LOCAL_STORAGE_KEY.USER_ID, userIdMock)

    expect(localStorage.setItem).toHaveBeenCalled()
  })
})

/**
 * Get local storage
 */
describe('Get local storage correctly', () => {
  const userIdMock = 'gff1'

  it('should return defined string on get set key', () => {
    const result = getLocalStorage(LOCAL_STORAGE_KEY.USER_ID)

    expect(result).toBe(userIdMock)
  })

  it('should return empty object on get unset key', () => {
    const result = getLocalStorage(userIdMock)

    expect(result).toEqual('')
  })
})
