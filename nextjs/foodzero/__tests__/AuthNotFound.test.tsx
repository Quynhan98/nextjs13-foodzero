// Utils
import { render } from '@utils/testUtils'

// App
import NotFoundPage from 'app/(auth)/not-found'

describe('NotFoundPage render', () => {
  it('Should NotFoundPage match Snapshot', () => {
    const { container } = render(<NotFoundPage />)

    expect(container).toMatchSnapshot()
  })
})
