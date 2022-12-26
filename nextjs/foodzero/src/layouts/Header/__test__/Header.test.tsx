import Router from 'next/router'

// Utils
import { fireEvent, render, screen, waitFor } from '@utils/testUtils'
import { NextRouterProvider } from '@utils/nextRouterProvider'

// Components
import Header from '@layouts/Header'

// Constants
import { NAV_LIST, PAGE_URL } from '@constants/index'

describe('Header render', () => {
  it('Should Header match Snapshot', () => {
    const { container } = render(
      <NextRouterProvider router={{ pathname: PAGE_URL.HOME.URL }}>
        <Header />
      </NextRouterProvider>,
    )

    expect(container).toMatchSnapshot()
  })

  it('Should render navigation modal', () => {
    render(
      <NextRouterProvider router={{ pathname: PAGE_URL.HOME.URL }}>
        <Header />
      </NextRouterProvider>,
    )

    const buttonMenu = screen.getByTestId('buttonMenu')

    fireEvent.click(buttonMenu)
    expect(screen.getByText(NAV_LIST[0].name)).toBeTruthy()
  })

  it('Should call Reservation button', () => {
    render(
      <NextRouterProvider router={{ pathname: PAGE_URL.HOME.URL }}>
        <Header />
      </NextRouterProvider>,
    )

    const button = screen.getByRole('button', { name: /Reservation/i })

    fireEvent.click(button)
    waitFor(() => {
      expect(Router.push).toHaveBeenCalledWith(
        `${PAGE_URL.HOME}/#reservationSection`,
      )
    })
  })
})
