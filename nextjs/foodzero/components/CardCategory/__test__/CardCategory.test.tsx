import { render, screen } from '@utils/testUtils'

// Mocks
import { CARD_CATEGORY } from '@mocks/mockData'

// Components
import CardCategory from '@components/CardCategory'

describe('CardCategory component', () => {
  const props = { ...CARD_CATEGORY }

  it('Renders CardCategory correctly', () => {
    const { container } = render(<CardCategory {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render data correctly', () => {
    render(<CardCategory {...props} />)

    const category = screen.getByText(props.category)
    const link = screen.getByRole('link')

    expect(category).toHaveTextContent(props.category)
    expect(link.getAttribute('href')).toEqual(props.href)
  })
})
