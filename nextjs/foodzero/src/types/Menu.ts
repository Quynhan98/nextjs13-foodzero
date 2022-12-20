export interface IOurMenu {
  id: string
  name: string
  price: number
  description: string
}

export interface IMenu {
  id: string
  ourMenu: IOurMenu[]
}
