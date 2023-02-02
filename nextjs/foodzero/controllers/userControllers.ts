// Constants
import { USERS_ENDPOINT } from '@constants/index'

// Types
import { IUser } from '@self-types/index'

// Services
import { fetcherInstanceAPI } from '@services/api'

// Utils
import { findItemByValue } from '@utils/index'

/**
 * Find existed user
 */
export const findExistedUser = async (
  type: keyof IUser,
  value: string,
): Promise<IUser | undefined> => {
  const users = await fetcherInstanceAPI({ endpoint: USERS_ENDPOINT })

  return findItemByValue({ data: users as IUser[], key: type, value })
}
