// Utils
import { render } from '@utils/testUtils'

// App
import Head from 'app/head'

describe('Head render', () => {
  it('Should Head match Snapshot', () => {
    const { container } = render(<Head />)

    expect(container).toMatchSnapshot()
  })
})
