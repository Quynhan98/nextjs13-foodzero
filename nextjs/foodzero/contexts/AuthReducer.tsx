export enum USER_ACTION {
  SET_USER = 'SET_USER',
}

interface SetSessionAction {
  type: USER_ACTION.SET_USER
  userId: string
}

const AuthReducer = (
  state: { userId: string } | null,
  action: SetSessionAction,
) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case USER_ACTION.SET_USER:
      return {
        userId: action.userId,
      }

    default:
      return state
  }
}

export default AuthReducer
