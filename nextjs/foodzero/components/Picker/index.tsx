import { memo, useState } from 'react'
import { Input, InputProps } from '@chakra-ui/react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// Utils
import { startDateFrom, startDateTo } from '@utils/index'

interface DatePickerProps extends InputProps {
  isMinDate?: boolean
  isMaxDate?: boolean
  onChangeDate: (date: Date) => void
  disabled?: boolean
  pickerValue?: string
}

const Picker = ({
  isMinDate,
  isMaxDate,
  onChangeDate,
  disabled,
  pickerValue,
  ...rest
}: DatePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>()

  const handleChange = (dateTime: Date) => {
    setStartDate(dateTime)
    onChangeDate(dateTime)
  }

  return (
    <DatePicker
      selected={!pickerValue ? null : startDate}
      onChange={handleChange}
      placeholderText="MM/DD/YYYY"
      dropdownMode="scroll"
      minDate={isMinDate ? startDateFrom : null}
      maxDate={isMaxDate ? startDateTo : null}
      disabled={disabled}
      useShortMonthInDropdown
      customInput={<Input {...rest} />}
    />
  )
}

export default memo(Picker)
