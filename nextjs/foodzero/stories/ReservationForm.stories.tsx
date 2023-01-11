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

export const Primary = {
  args: {
    date: new Date(),
  },
}

export const Secondary = {
  args: {
    date: new Date(),
    isShowFullField: true,
  },
}
