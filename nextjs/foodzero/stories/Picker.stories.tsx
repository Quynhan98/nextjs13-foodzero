// Components
import Picker from '@components/Picker'

export default {
  title: 'Components/Picker',
  component: Picker,
}

export const Default = {
  args: {
    pickerValue: new Date(),
    isMinDate: true,
    isMaxDate: true,
    width: '800px',
  },
}
