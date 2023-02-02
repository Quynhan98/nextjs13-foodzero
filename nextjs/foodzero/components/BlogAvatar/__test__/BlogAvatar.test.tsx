import { render, screen } from '@utils/testUtils'

// Mocks
import { AVATAR_MOCK } from '@mocks/mockData'

// Components
import BlogAvatar from '@components/BlogAvatar'

describe('BlogAvatar component', () => {
  const props = {
    src: AVATAR_MOCK,
    name: 'Julie Christie',
    date: new Date('2022-12-06T23:29:35.000Z'),
    numberOfComments: 2,
  }
  it('Renders BlogAvatar correctly', () => {
    const { container } = render(<BlogAvatar {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render name correctly', () => {
    render(<BlogAvatar {...props} />)

    const name = screen.getByText('Julie Christie')

    expect(name).toHaveTextContent(props.name)
  })
})
