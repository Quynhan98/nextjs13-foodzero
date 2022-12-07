import { render, screen } from '@utils/testUtils'

// Constants
import { NAV_LIST } from '@constants/index'

// Components
import Navigation from '@components/Navigation'

describe('Navigation component', () => {
  it('Renders Navigation correctly', () => {
    const { container } = render(<Navigation navList={NAV_LIST} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render a sufficient number of items', () => {
    render(<Navigation navList={NAV_LIST} />)

    const items = screen.getAllByRole('listitem')

    expect(items.length).toBe(NAV_LIST.length)
  })
})
