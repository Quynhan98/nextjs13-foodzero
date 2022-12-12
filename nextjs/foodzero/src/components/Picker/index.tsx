import { memo, useState } from 'react'
import { Input, InputProps } from '@chakra-ui/react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// Utils
import { startDateFrom, startDateTo } from '@utils/index'

interface DatePickerProps extends InputProps {
  isMinDate?: boolean
  isMaxDate?: boolean
  isMonthDropdown?: boolean
  isYearDropdown?: boolean
  onChangeDate: (date: Date) => void
  disabled?: boolean
}

const Picker = ({
  isMinDate,
  isMaxDate,
  isMonthDropdown,
  isYearDropdown,
  onChangeDate,
  disabled,
  ...rest
}: DatePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>()

  const handleChange = (dateTime: Date) => {
    setStartDate(dateTime)
    onChangeDate(dateTime)
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      placeholderText="MM/DD/YYYY"
      showMonthDropdown={isMonthDropdown}
      showYearDropdown={isYearDropdown}
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
