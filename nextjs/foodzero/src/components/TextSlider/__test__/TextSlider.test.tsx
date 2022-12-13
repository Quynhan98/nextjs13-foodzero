import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import TextSlider from '@components/TextSlider'

// Mocks
import { QUOTE_MOCK } from '@mocks/mockData'

describe('TextSlider component', () => {
  const props = {
    quotes: QUOTE_MOCK,
  }

  it('Renders TextSlider correctly', () => {
    const { container } = render(<TextSlider {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Renders current slide and click button correctly', () => {
    render(<TextSlider {...props} />)

    const buttonNext = screen.getByTestId('buttonNext')
    const buttonBack = screen.getByTestId('buttonBack')

    expect(screen.getByText(`1/${QUOTE_MOCK.length}`)).toHaveTextContent(
      `1/${QUOTE_MOCK.length}`,
    )

    fireEvent.click(buttonNext)
    expect(screen.getByText(`2/${QUOTE_MOCK.length}`)).toHaveTextContent(
      `2/${QUOTE_MOCK.length}`,
    )

    fireEvent.click(buttonBack)
    expect(screen.getByText(`1/${QUOTE_MOCK.length}`)).toHaveTextContent(
      `1/${QUOTE_MOCK.length}`,
    )
  })
})
