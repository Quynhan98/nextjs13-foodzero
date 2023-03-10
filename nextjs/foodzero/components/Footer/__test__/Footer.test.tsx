// Utils
import { render } from '@utils/testUtils'

// Components
import Footer from '@components/Footer'

describe('Footer render', () => {
  it('Should Footer match Snapshot', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()
  })
})
