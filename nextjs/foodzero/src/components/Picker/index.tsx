import { memo, useState } from 'react'
import { Input } from '@chakra-ui/react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// Utils
import { startDateFrom, startDateTo } from '@utils/index'

interface DatePickerProps {
  isMinDate?: boolean
  isMaxDate?: boolean
  isMonthDropdown?: boolean
  isYearDropdown?: boolean
  onChange: (date: Date) => void
  disabled?: boolean
  width?: string
}

const Picker = ({
  isMinDate,
  isMaxDate,
  isMonthDropdown,
  isYearDropdown,
  onChange,
  disabled,
  width,
}: DatePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>()

  const handleChange = (dateTime: Date) => {
    setStartDate(dateTime)
    onChange(dateTime)
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
      customInput={<Input width={width} />}
    />
  )
}

export default memo(Picker)
