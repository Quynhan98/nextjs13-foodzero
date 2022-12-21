import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import SelectField from '@components/SelectField'

// Constants
import { RESERVATION_TIME } from '@constants/variables'

describe('SelectField component', () => {
  const props = { options: RESERVATION_TIME, onChangeSelect: jest.fn() }

  it('Renders SelectField default correctly', () => {
    const { container } = render(<SelectField {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render data correctly', () => {
    render(<SelectField {...props} />)

    expect(screen.getAllByRole('option').length).toBe(RESERVATION_TIME.length)
  })

  it('Should onchange select ', () => {
    render(<SelectField {...props} />)

    const select = screen.getByTestId('select')

    fireEvent.change(select, { target: { value: RESERVATION_TIME[2] } })
    expect(select).toHaveValue(RESERVATION_TIME[2])
  })
})
