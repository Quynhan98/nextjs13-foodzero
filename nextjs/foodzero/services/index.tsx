// Constants
import {
  BASE_API_URL,
  BASE_URL,
  LOGIN_ENDPOINT,
  SERVER_ERROR,
} from '@constants/index'

// Types
import { IUser, LoginAccount } from '@self-types/index'

export const addToBooking = async <T,>(
  requestData: T,
  url: string,
): Promise<T> => {
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  }

  try {
    const response = await fetch(`${BASE_API_URL}${url}`, config)
    return response.json()
  } catch (error) {
    throw SERVER_ERROR
  }
}

export const loginUser = async (
  credentials: LoginAccount,
): Promise<Omit<IUser, 'password'>> => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }

  try {
    const response = await fetch(`${BASE_URL}${LOGIN_ENDPOINT}`, config)

    return response.json()
  } catch (error) {
    throw SERVER_ERROR
  }
}
