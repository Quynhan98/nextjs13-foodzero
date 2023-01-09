// Components
import SelectField from '@components/SelectField'

// Constants
import { NUMBER_OF_PERSON, RESERVATION_TIME } from '@constants/index'

export default {
  title: 'Components/SelectField',
  component: SelectField,
}

export const Primary = {
  args: {
    options: RESERVATION_TIME,
  },
}

export const Secondary = {
  args: {
    options: NUMBER_OF_PERSON,
  },
}
