import { IUser, LoginAccount } from '@self-types/index'

export interface UserSection {
  userId: string
}

export interface IAuthContext {
  userId: string
  login: (account: LoginAccount) => Promise<Omit<IUser, 'password'>>
}
