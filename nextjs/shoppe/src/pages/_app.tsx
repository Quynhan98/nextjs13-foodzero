import '../../styles/reset.css'
import '../../styles/globals.css'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SWRConfig } from 'swr'

// Themes
import { customTheme } from '@themes/index'

// Layouts
import PageLayout from '@layouts/PageLayout'

// Services
import { fetcherApi } from '@services/index'

// Components
import { ErrorBoundary } from '@components/ErrorBoundary'

// Contexts
import { CartProvider } from '@contexts/CartProvider'
import { LoadingProvider } from '@contexts/LoadingProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetcherApi,
      }}
    >
      <ChakraProvider theme={customTheme}>
        <ErrorBoundary>
          <CartProvider>
            <LoadingProvider>
              <PageLayout>
                <Component {...pageProps} />
              </PageLayout>
            </LoadingProvider>
          </CartProvider>
        </ErrorBoundary>
      </ChakraProvider>
    </SWRConfig>
  )
}
