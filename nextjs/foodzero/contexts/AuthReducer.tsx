import { UserSession } from '@self-types/AuthContext'

export enum USER_ACTION {
  SET_USER = 'SET_USER',
}

interface SetSessionAction {
  type: USER_ACTION.SET_USER
  userSession: UserSession
}

const AuthReducer = (state: UserSession | null, action: SetSessionAction) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case USER_ACTION.SET_USER:
      return {
        ...state,
        ...action.userSession,
      }

    default:
      return state
  }
}

export default AuthReducer
