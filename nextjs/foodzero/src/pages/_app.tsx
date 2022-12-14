import '@fontsource/lato'
import '@fontsource/rufina'

import React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

// Themes
import { customTheme } from '@themes/index'

// Components
import { ErrorBoundary } from '@components/ErrorBoundary'

// Layouts
import PageLayout from '@layouts/PageLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <ErrorBoundary>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ErrorBoundary>
    </ChakraProvider>
  )
}
