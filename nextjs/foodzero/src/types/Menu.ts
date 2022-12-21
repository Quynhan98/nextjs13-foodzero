export interface IOurMenu {
  id: string
  name: string
  price: number
  description: string
}

export interface IMenu {
  id: string
  ourMenu: IOurMenu[]
  starters: IOurMenu[]
  mains: IOurMenu[]
  pastriesAndDrinks: IOurMenu[]
}
