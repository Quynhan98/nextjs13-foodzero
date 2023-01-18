import { UserSection } from '@self-types/AuthContext'

export enum USER_ACTION {
  SET_USER = 'SET_USER',
}

interface SetSessionAction {
  type: USER_ACTION.SET_USER
  userSection: UserSection
}

const AuthReducer = (state: UserSection | null, action: SetSessionAction) => {
  if (action.type) {
    return {
      ...state,
      ...action.userSection,
    }
  }

  return state
}

export default AuthReducer
