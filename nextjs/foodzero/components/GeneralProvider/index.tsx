import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

// Context
import { AuthProvider } from '@contexts/AuthProvider'
import { LoadingProvider } from '@contexts/LoadingProvider'

// Themes
import { customTheme } from '@themes/index'

export interface IProviderProps {
  children: ReactNode
}

const GeneralProvider = ({ children }: IProviderProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <LoadingProvider>
        <AuthProvider>{children}</AuthProvider>
      </LoadingProvider>
    </ChakraProvider>
  )
}

export default GeneralProvider
