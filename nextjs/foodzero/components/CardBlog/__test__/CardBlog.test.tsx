import { render, screen } from '@utils/testUtils'

// Mocks
import { CARD_BLOG } from '@mocks/mockData'

// Components
import CardBlog from '@components/CardBlog'

describe('CardBlog component', () => {
  const props = { ...CARD_BLOG }

  it('Renders CardBlog correctly', () => {
    const { container } = render(<CardBlog {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render data correctly', () => {
    render(<CardBlog {...props} />)

    const title = screen.getByRole('heading', { level: 4 })
    const category = screen.getByText(props.category)
    const name = screen.getByText(props.name)

    expect(title).toBeTruthy()
    expect(category).toBeTruthy()
    expect(name).toBeTruthy()
  })
})
