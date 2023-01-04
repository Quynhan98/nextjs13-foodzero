import React from 'react'

// component
import Social from '@components/Social'

// Utils
import { render, screen } from '@utils/testUtils'

describe('Social render', () => {
  const props = {
    alt: 'facebook',
    src: '/images/facebook.webp',
    link: '/',
  }

  it('Should show match Social DOM Snapshot', () => {
    const { container } = render(<Social {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should render correct link', () => {
    render(<Social {...props} />)

    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toEqual(props.link)
  })
})
