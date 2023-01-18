import { LoginAccount } from '@self-types/index'

export interface UserSection {
  userId: string
}

export interface IAuthContext {
  userSection: UserSection
  login: (account: LoginAccount) => Promise<void>
}
