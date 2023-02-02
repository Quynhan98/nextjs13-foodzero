export interface IReservations {
  id?: string
  lastName?: string
  firstName?: string
  phone?: string
  email?: string
  date: Date
  time: string
  person: string
}

export interface LoginAccount {
  email: string
  password: string
}
export interface IUser extends LoginAccount {
  id: string
  reservations: IReservations[]
}
