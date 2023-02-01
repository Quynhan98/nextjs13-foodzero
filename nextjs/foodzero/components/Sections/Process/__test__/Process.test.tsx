import { render } from '@utils/testUtils'

// Components
import Process from '@components/Sections/Process'

describe('Process component', () => {
  it('Renders Process correctly', () => {
    const { container } = render(<Process />)

    expect(container).toMatchSnapshot()
  })
})
