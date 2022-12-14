// Utils
import { render } from '@utils/testUtils'

// Layouts
import PageLayout from '@layouts/PageLayout'

// Utils
import { NextRouterProvider } from '@utils/nextRouterProvider'

// Constants
import { PAGE_URL } from '@constants/index'

describe('PageLayout render', () => {
  it('Should PageLayout match Snapshot', () => {
    const { container } = render(
      <NextRouterProvider router={{ pathname: PAGE_URL.HOME.URL }}>
        <PageLayout>Contents Page</PageLayout>
      </NextRouterProvider>,
    )

    expect(container).toMatchSnapshot()
  })

  it('Should PageLayout of Login page match Snapshot', () => {
    const { container } = render(
      <NextRouterProvider router={{ pathname: PAGE_URL.LOGIN.URL }}>
        <PageLayout>Contents Login Page</PageLayout>
      </NextRouterProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})
