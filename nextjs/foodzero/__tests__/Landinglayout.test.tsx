// Utils
import { render } from '@utils/testUtils'

// App
import RootLayout from 'app/(landing)/layout'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(() => '/'),
}))

describe('RootLayout render', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('Should RootLayout match Snapshot', () => {
    window.localStorage.setItem('userId', JSON.stringify('gff1'))

    const { container } = render(<RootLayout>Contents Page</RootLayout>)

    expect(container).toMatchSnapshot()
  })
})
