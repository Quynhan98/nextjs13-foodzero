import React, { createContext, useCallback, useMemo, useReducer } from 'react'

// Constants
import { LOCAL_STORAGE_KEY } from '@constants/index'

// Types
import { IAuthContext } from '@self-types/AuthContext'
import { LoginAccount } from '@self-types/index'
import { loginUser } from '@services/index'
import AuthReducer, { USER_ACTION } from '@contexts/AuthReducer'

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userSection, dispatch] = useReducer(AuthReducer, {}, () =>
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.USER_ID) || 'null'),
  )

  const login = useCallback(
    async (account: LoginAccount) => {
      const response = await loginUser(account)

      dispatch({
        type: USER_ACTION.SET_USER,
        userSection: { userId: response.id },
      })
      localStorage.setItem('userId', JSON.stringify(response.id))
    },
    [dispatch],
  )

  const value = useMemo(
    () => ({ userSection, login }),
    [userSection],
  ) as IAuthContext

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
