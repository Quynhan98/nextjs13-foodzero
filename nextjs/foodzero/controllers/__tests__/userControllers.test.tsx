// Mocks
import { USERS_MOCK } from '@mocks/mockData'

// Controllers
import { userControllers } from 'controllers/userControllers'

const { findExistedUser, isMatchPassword } = userControllers

jest.mock('@services/api', () => ({
  fetcherInstanceAPI: jest.fn(() => [
    {
      id: 'gff1',
      email: 'foodzero@gmail.com',
      password: '123456789',
      reservations: [],
    },
  ]),
}))

describe('userController', () => {
  const props = {
    email: 'foodzero@gmail.com',
    password: '123456789',
  }

  it('should findExistedUser', async () => {
    const currentUser = await findExistedUser('email', props.email)

    expect(currentUser).toEqual(USERS_MOCK[0])
  })

  it('should isMatchPassword', () => {
    const matchPassword = isMatchPassword(props.password, USERS_MOCK[0])

    expect(matchPassword).toEqual(true)
  })
})
