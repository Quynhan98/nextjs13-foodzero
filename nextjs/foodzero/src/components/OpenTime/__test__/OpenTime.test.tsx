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
    const brunch = screen.getByText(props.businessHours[0].time)
    const lunch = screen.getByText(props.businessHours[1].time)
    const dinner = screen.getByText(props.businessHours[2].time)

    expect(openTime).toHaveTextContent(props.openTime)
    expect(brunch).toHaveTextContent(props.businessHours[0].time)
    expect(lunch).toHaveTextContent(props.businessHours[1].time)
    expect(dinner).toHaveTextContent(props.businessHours[2].time)
  })
})
