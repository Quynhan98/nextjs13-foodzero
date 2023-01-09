// Utils
import { render } from '@utils/testUtils'

// Components
import Header from '@components/Header'

// Mocks useRouter
const useRouter = jest.spyOn(require('next/navigation'), 'useRouter')

export function mockNextUseRouter(props: {
  route: string
  pathname: string
  query: string
  asPath: string
}) {
  useRouter.mockImplementationOnce(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
  }))
}

describe('Header render', () => {
  // Mocks Next.js route
  mockNextUseRouter({
    route: '/',
    pathname: '/',
    query: '',
    asPath: `/?error=${encodeURIComponent('Uh oh - something went wrong')}`,
  })

  it('Should Header match Snapshot', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
