// Components
import SEO from '@components/SEO'

// Constants
import { BASE_URL } from '@constants/endPoints'

// Utils
import { render } from '@utils/testUtils'

describe('SEO component', () => {
  it('should SEO renders snapshot', () => {
    const { container } = render(
      <SEO
        title="Foodzero"
        description="This is a food restaurant"
        urlLink={BASE_URL}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
