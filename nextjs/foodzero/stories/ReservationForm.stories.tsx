// Components
import ReservationForm from '@components/ReservationForm'

export default {
  title: 'Components/ReservationForm',
  component: ReservationForm,
  parameters: {
    backgrounds: {
      default: 'alabaster',
      values: [{ name: 'alabaster', value: '#EBF0E4' }],
    },
  },
}

export const Primary = {}

export const Secondary = {
  args: {
    isShowFullField: true,
  },
}
