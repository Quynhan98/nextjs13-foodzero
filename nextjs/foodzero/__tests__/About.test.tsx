// Utils
import { render } from '@utils/testUtils'

// App
import About from 'app/(landing)/about/page'

describe('About render', () => {
  it('Should About match Snapshot', () => {
    const { container } = render(<About />)

    expect(container).toMatchSnapshot()
  })
})
