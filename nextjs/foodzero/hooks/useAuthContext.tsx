import { useContext } from 'react'

// Contexts
import { AuthContext } from '@contexts/AuthProvider'

export const useAuthContext = () => {
  return useContext(AuthContext)
}
