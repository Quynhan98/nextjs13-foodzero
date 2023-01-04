import { useContext } from 'react'

// Contexts
import { LoadingContext } from '@contexts/LoadingProvider'

export const useLoadingContext = () => {
  return useContext(LoadingContext)
}
