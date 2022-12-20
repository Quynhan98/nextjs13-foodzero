import { ChangeEvent, memo, useState } from 'react'
import { Select, SelectProps, useMediaQuery } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

// Constants
import { BREAKPOINTS } from '@constants/variables'

interface SelectFieldProps extends SelectProps {
  options: string[]
  handleSelect: (item: string) => void
}

const SelectField = ({ options, handleSelect, ...rest }: SelectFieldProps) => {
  const [isMobile] = useMediaQuery(BREAKPOINTS.MEDIUM)
  const [value, setValue] = useState(options[0])

  const handleSelectItem = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value

    setValue(newValue)
    handleSelect(newValue)
  }

  return (
    <Select
      data-testid="select"
      borderRadius="0px"
      border="2px"
      borderColor="black"
      fontSize={{ base: 'xs', md: 'sm' }}
      height={{ base: '50px', md: '96px' }}
      icon={<ChevronDownIcon marginRight={{ base: '40px', md: '45px' }} />}
      iconSize={isMobile ? '25px' : '45px'}
      _focus={{
        borderColor: 'black',
        boxShadow: '0 0 0 1px black',
      }}
      _hover={{ borderColor: 'black' }}
      style={{ paddingLeft: '40px' }}
      value={value}
      onChange={handleSelectItem}
      {...rest}
    >
      {options.map((option) => (
        <option key={`option-${option}`} value={option}>
          {option}
        </option>
      ))}
    </Select>
  )
}

export default memo(SelectField)
