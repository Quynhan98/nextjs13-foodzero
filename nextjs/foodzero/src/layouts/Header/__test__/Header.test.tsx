// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import Header from '@layouts/Header'

// Constants
import { NAV_LIST } from '@constants/index'

describe('Header render', () => {
  it('Should Header match Snapshot', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })

  it('Should render navigation modal', () => {
    render(<Header />)

    const buttonMenu = screen.getByTestId('buttonMenu')

    fireEvent.click(buttonMenu)
    expect(screen.getByText(NAV_LIST[0].name)).toBeTruthy()
  })
})
