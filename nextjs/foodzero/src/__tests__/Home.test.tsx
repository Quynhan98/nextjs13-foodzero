import { render } from '@utils/testUtils'

// Home
import Home from '@pages/index'

describe('Home page', () => {
  it('Renders Home page correctly', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})
