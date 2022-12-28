import { ChangeEvent, memo } from 'react'
import { Select, SelectProps, useMediaQuery } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

// Constants
import { BREAKPOINTS } from '@constants/variables'

interface SelectFieldProps extends SelectProps {
  options: string[]
  onChangeSelect?: (e: ChangeEvent<HTMLSelectElement>) => void
}

const SelectField = ({
  options,
  onChangeSelect,
  ...rest
}: SelectFieldProps) => {
  const [isMobile] = useMediaQuery(BREAKPOINTS.MEDIUM)

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
      _invalid={{ borderColor: 'black' }}
      style={{ paddingLeft: '40px' }}
      onChange={onChangeSelect}
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
