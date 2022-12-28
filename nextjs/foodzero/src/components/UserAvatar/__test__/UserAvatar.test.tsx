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

    const name = screen.getByText(props.name)
    const job = screen.getByText(props.job)

    expect(name).toBeTruthy()
    expect(job).toBeTruthy()
  })
})
