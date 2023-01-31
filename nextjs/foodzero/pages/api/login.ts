'use client'

import { NextApiRequest, NextApiResponse } from 'next'

// Constants
import {
  CLIENT_ERROR_RESPONSE,
  EMAIL_NOT_EXIST,
  INVALID_PASSWORD,
  SUCCESS_RESPONSE,
} from '@constants/index'

// Controllers
import { findExistedUser } from 'controllers/userControllers'

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { password, email } = req.body

  const currentUser = await findExistedUser('email', email)

  // Email not match
  if (!currentUser) {
    return res
      .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
      .json({ error: { email: EMAIL_NOT_EXIST } })
  }

  // Email match, password not match
  if (currentUser && currentUser.password !== password) {
    return res
      .status(CLIENT_ERROR_RESPONSE.NOT_FOUND)
      .json({ error: { password: INVALID_PASSWORD } })
  }

  // Email and password match
  return res
    .status(SUCCESS_RESPONSE.OK)
    .json({ id: currentUser.id, email: currentUser.email })
}
