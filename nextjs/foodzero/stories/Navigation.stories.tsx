import type { Meta } from '@storybook/react'

// Components
import Navigation from '@components/Navigation'

// Constants
import { NAV_LIST } from '@constants/index'

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    backgrounds: {
      default: 'zinnwalditeBrown',
      values: [{ name: 'zinnwalditeBrown', value: '#233000' }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '50px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default = {
  args: {
    navList: NAV_LIST,
  },
}
