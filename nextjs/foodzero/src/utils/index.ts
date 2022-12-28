import { REGEX_REMOVE_BRACKETS } from '@constants/index'

// Format date (Month, DD/YYYY)
export const formattedDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })
}

// Format hour (Hour:Minute AM/PM)
export const formattedHour = (date: string) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

// First date of the month
export const startDateFrom = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
)

// Last date of the month
export const startDateTo = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 6,
  0,
)

// Find item by absolute compare value
export const findItemByValue = <T, U extends keyof T>({
  data,
  value,
  key,
}: {
  data: T[]
  value: T[U]
  key: keyof T
}): T | undefined => data.find((item) => item[key] === value)

// Format phone number
export const formatPhoneNumber = (value: string) => {
  if (!value) return value

  const phoneNumber = value.replace(REGEX_REMOVE_BRACKETS, '')

  const phoneNumberLength = phoneNumber.length

  if (phoneNumberLength < 4) return `${phoneNumber}`

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6,
  )}-${phoneNumber.slice(6, 10)}`
}

export const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, '0')
}

// Format MM/DD/YYYY
export const formatDate = (date: Date) => {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join('/')
}
