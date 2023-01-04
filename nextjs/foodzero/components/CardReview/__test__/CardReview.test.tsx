import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import CardReview from '@components/CardReview'

// Mocks
import { QUOTE_MOCK } from '@mocks/mockData'

describe('CardReview component', () => {
  const props = {
    quotes: QUOTE_MOCK,
  }

  it('Renders CardReview correctly', () => {
    const { container } = render(<CardReview {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Renders current slide and click button correctly', () => {
    render(<CardReview {...props} />)

    const buttonNext = screen.getByTestId('buttonNext')
    const buttonBack = screen.getByTestId('buttonBack')

    expect(screen.getByText(`1/${QUOTE_MOCK.length}`)).toBeTruthy()

    fireEvent.click(buttonNext)
    expect(screen.getByText(`2/${QUOTE_MOCK.length}`)).toBeTruthy()

    fireEvent.click(buttonBack)
    expect(screen.getByText(`1/${QUOTE_MOCK.length}`)).toBeTruthy()
  })
})
