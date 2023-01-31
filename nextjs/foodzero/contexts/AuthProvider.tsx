import React, { createContext, useCallback, useMemo, useReducer } from 'react'

// Constants
import { LOCAL_STORAGE_KEY } from '@constants/index'

// Types
import { IAuthContext } from '@self-types/AuthContext'
import { LoginAccount } from '@self-types/index'

// Services
import { loginUser } from '@services/index'

// Contexts
import AuthReducer, { USER_ACTION } from '@contexts/AuthReducer'

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userSession, dispatch] = useReducer(AuthReducer, {}, () =>
    JSON.parse(
      typeof window !== 'undefined'
        ? localStorage.getItem(LOCAL_STORAGE_KEY.USER_SESSION) || 'null'
        : 'null',
    ),
  )

  const login = useCallback(
    async (account: LoginAccount) => {
      const response = await loginUser(account)

      if (response.id) {
        dispatch({
          type: USER_ACTION.SET_USER,
          userSession: { userId: response.id },
        })

        localStorage.setItem(
          LOCAL_STORAGE_KEY.USER_SESSION,
          JSON.stringify({ userId: response.id }),
        )
      }

      return response
    },
    [dispatch],
  )

  const value = useMemo(() => ({ userSession, login }), [login, userSession])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
