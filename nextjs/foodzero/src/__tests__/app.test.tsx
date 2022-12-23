import React from 'react'
import { NextPage } from 'next'
import { Router } from 'next/router'

// Pages
import App from '@pages/_app'

// Utils
import { render } from '@utils/testUtils'
import { NextRouterProvider } from '@utils/nextRouterProvider'

jest.mock('@fontsource/lato', () => jest.fn())
jest.mock('@fontsource/rufina', () => jest.fn())

describe('App render', () => {
  const mockedPageProps = {}
  const mockComponent: NextPage = () => <div>Mocked Test Component</div>
  const mockRouterFunction = jest.fn()

  it('Should show match App DOM Snapshot', () => {
    const { container } = render(
      <NextRouterProvider router={{ pathname: 'test_app' }}>
        <App
          pageProps={mockedPageProps}
          Component={mockComponent}
          router={mockRouterFunction as unknown as Router}
        />
      </NextRouterProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})
