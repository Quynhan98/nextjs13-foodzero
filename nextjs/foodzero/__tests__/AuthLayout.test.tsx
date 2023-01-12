// Utils
import { render } from '@utils/testUtils'

// App
import AuthLayout from 'app/(auth)/layout'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Auth Layout render', () => {
  it('Should Auth Layout match Snapshot', () => {
    const { container } = render(<AuthLayout>Contents Page</AuthLayout>)

    expect(container).toMatchSnapshot()
  })
})
