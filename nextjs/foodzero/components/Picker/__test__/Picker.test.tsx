import { fireEvent, render, screen } from '@utils/testUtils'

// Component
import Picker from '@components/Picker'

describe('Picker Component', () => {
  const props = {
    isMinDate: true,
    isMaxDate: true,
    onChangeDate: jest.fn(),
  }

  it('renders picker component', () => {
    const { container } = render(<Picker {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('Should onchange date picker ', () => {
    render(<Picker {...props} />)

    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '12/09/2022' } })
    expect(input).toHaveValue('12/09/2022')
  })
})
