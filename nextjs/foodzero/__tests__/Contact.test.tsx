// Utils
import { render } from '@utils/testUtils'

// App
import Contact from 'app/(landing)/contact/page'

describe('Contact render', () => {
  it('Should Contact match Snapshot', () => {
    const { container } = render(<Contact />)

    expect(container).toMatchSnapshot()
  })
})
