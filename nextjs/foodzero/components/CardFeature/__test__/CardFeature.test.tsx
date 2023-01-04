import { render, screen } from '@utils/testUtils'

// Mocks
import { CARD_FEATURE } from '@mocks/mockData'

// Components
import CardFeature from '@components/CardFeature'

describe('CardFeature component', () => {
  const props = { ...CARD_FEATURE }

  it('Renders CardFeature correctly', () => {
    const { container } = render(<CardFeature {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render data correctly', () => {
    render(<CardFeature {...props} />)

    const title = screen.getByText(props.title)
    const description = screen.getByText(props.description)

    expect(title).toHaveTextContent(props.title)
    expect(description).toHaveTextContent(props.description)
  })
})
