import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import {
  CLIENT_ERROR_RESPONSE,
  SERVER_ERROR,
  SUCCESS_RESPONSE,
  USERS_ENDPOINT,
} from '@constants/index'

// Services
import { fetcherInstanceAPI } from '@services/api'

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const data = await fetcherInstanceAPI(`${USERS_ENDPOINT}`)
      if (data) {
        return res.status(SUCCESS_RESPONSE.OK).json(data)
      }
      return res.status(SUCCESS_RESPONSE.OK).json([])
    } catch (error) {
      return res.status(CLIENT_ERROR_RESPONSE.NOT_FOUND).send(SERVER_ERROR)
    }
  } else {
    return res
      .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
      .json({ message: SERVER_ERROR })
  }
}
