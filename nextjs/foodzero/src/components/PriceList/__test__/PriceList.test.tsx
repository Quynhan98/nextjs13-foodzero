import { render, screen } from '@utils/testUtils'

// Mocks
import { PRICE_LIST_MOCK } from '@mocks/mockData'

// Components
import PriceList from '@components/PriceList'

describe('PriceList component', () => {
  const props = { ...PRICE_LIST_MOCK }

  it('Renders PriceList correctly', () => {
    const { container } = render(<PriceList {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render data correctly', () => {
    render(<PriceList {...props} />)

    const price = screen.getByRole('heading', { level: 4 })
    const name = screen.getByRole('heading', { level: 3 })

    expect(price).toHaveTextContent(`$${props.price}`)
    expect(name).toHaveTextContent(props.name)
  })
})
