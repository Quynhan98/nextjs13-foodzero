import { render, screen } from '@utils/testUtils'

// Components
import ListSocial from '@components/ListSocial'

// Constants
import { SOCIAL_LIST } from '@constants/variables'

describe('ListSocial component', () => {
  const props = { listSocial: SOCIAL_LIST }

  it('Renders ListSocial correctly', () => {
    const { container } = render(<ListSocial {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render data correctly', () => {
    render(<ListSocial {...props} />)

    const listItem = screen.getAllByRole('listitem')
    expect(listItem.length).toEqual(SOCIAL_LIST.length)
  })
})
