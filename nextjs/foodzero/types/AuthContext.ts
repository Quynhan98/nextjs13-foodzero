import { IUser, LoginAccount } from '@self-types/index'

export interface UserSession {
  userId: string
}

export interface IAuthContext {
  userSession: UserSession | null
  login: (account: LoginAccount) => Promise<Omit<IUser, 'password'>>
}
