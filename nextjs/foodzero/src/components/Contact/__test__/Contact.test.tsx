import { render, screen } from '@utils/testUtils'

// Components
import Contact from '@components/Contact'

// Constants
import { CONTACT } from '@constants/variables'

describe('Contact component', () => {
  const props = { ...CONTACT }

  it('Renders Contact default correctly', () => {
    const { container } = render(<Contact {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Renders Contact with social icon correctly', () => {
    const { container } = render(<Contact {...props} isIcon />)

    expect(container).toMatchSnapshot()
  })

  it('Should render data correctly', () => {
    render(<Contact {...props} />)

    const phoneNumber = screen.getByText(props.phoneNumber)
    const email = screen.getByText(props.email)
    const address = screen.getByText(props.address)

    expect(phoneNumber).toHaveTextContent(props.phoneNumber)
    expect(email).toHaveTextContent(props.email)
    expect(address).toHaveTextContent(props.address)
  })
})
