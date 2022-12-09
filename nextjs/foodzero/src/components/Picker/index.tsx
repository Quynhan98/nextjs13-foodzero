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
      customInput={
        <Input
          color="black"
          border="2px"
          borderColor="black"
          _focus={{
            borderColor: 'black',
            boxShadow: '0 0 0 1px black',
          }}
          _hover={{ borderColor: 'black' }}
          borderRadius="0px"
          height={{ base: '50px', md: '96px' }}
          fontSize={{ base: 'xs', md: 'sm' }}
          paddingLeft="40px"
          width={width}
        />
      }
    />
  )
}

export default memo(Picker)
