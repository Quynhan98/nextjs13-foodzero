import { render, screen } from '@utils/testUtils'

// Components
import OpenTime from '@components/OpenTime'

// Constants
import { OPEN_TIME } from '@constants/variables'

describe('OpenTime component', () => {
  const props = { ...OPEN_TIME }

  it('Renders OpenTime default correctly', () => {
    const { container } = render(<OpenTime {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render data correctly', () => {
    render(<OpenTime {...props} />)

    const openTime = screen.getByText(props.openTime)
    const brunch = screen.getByText(props.brunch)
    const lunch = screen.getByText(props.lunch)
    const dinner = screen.getByText(props.dinner)

    expect(openTime).toHaveTextContent(props.openTime)
    expect(brunch).toHaveTextContent(props.brunch)
    expect(lunch).toHaveTextContent(props.lunch)
    expect(dinner).toHaveTextContent(props.dinner)
  })
})
