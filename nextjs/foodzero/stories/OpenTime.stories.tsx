import { Meta } from '@storybook/react'

// Components
import OpenTime from '@components/OpenTime'

// Constants
import { OPEN_TIME } from '@constants/index'

const meta: Meta<typeof OpenTime> = {
  title: 'Components/OpenTime',
  component: OpenTime,
  parameters: {
    backgrounds: {
      default: 'zinnwalditeBrown',
      values: [{ name: 'zinnwalditeBrown', value: '#233000' }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '900px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default = {
  args: {
    ...OPEN_TIME,
  },
}
