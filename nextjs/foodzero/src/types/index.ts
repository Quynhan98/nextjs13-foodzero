export interface LoginAccount {
  email: string
  password: string
}
export interface IUser extends LoginAccount {
  id: string
}
