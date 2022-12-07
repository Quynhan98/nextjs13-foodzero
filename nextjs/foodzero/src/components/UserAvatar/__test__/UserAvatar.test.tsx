import { render, screen } from '@utils/testUtils'

// Mocks
import { AVATAR_MOCK } from '@mocks/mockData'

// Components
import UserAvatar from '@components/UserAvatar'

describe('UserAvatar component', () => {
  const props = {
    src: AVATAR_MOCK,
    name: 'John Doe',
    job: 'Bloger',
  }
  it('Renders UserAvatar correctly', () => {
    const { container } = render(<UserAvatar {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render data correctly', () => {
    render(<UserAvatar {...props} />)

    const name = screen.getByRole('heading')
    const job = screen.getByText(/bloger/i)

    expect(name).toHaveTextContent(props.name)
    expect(job).toHaveTextContent(props.job)
  })
})
