import { ChangeEvent, FormEvent, memo } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'

// Components
import Picker from '@components/Picker'
import SelectField from '@components/SelectField'

// Constants
import { NUMBER_OF_PERSON, RESERVATION_TIME } from '@constants/index'

interface ReservationFormProps {
  onSubmitForm: (e: FormEvent<HTMLFormElement>) => void
  onChangeField?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  handleChangeDate: (date: Date) => void
  isShowFullField?: boolean
  isDisableButton?: boolean
  isDisableField?: boolean
  phoneError?: string
  emailError?: string
  timeError?: string
  date?: string
  phone?: string
  firstName?: string
  lastName?: string
  email?: string
  time?: string
  person?: string
}

const ReservationForm = ({
  onSubmitForm,
  onChangeField,
  handleChangeDate,
  isShowFullField = false,
  isDisableButton,
  isDisableField,
  phone,
  phoneError,
  emailError,
  timeError,
  date,
  firstName,
  lastName,
  email,
  time,
  person,
}: ReservationFormProps) => {
  return (
    <form onSubmit={onSubmitForm} noValidate>
      <FormControl
        isInvalid={!!(emailError || phoneError || timeError)}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxW={{ base: '320px', md: '1148px', '2xl': '1644px' }}
        margin="0 auto"
      >
        <Flex flexDirection="column" justifyContent="center" margin="0 auto">
          <Heading
            as="h3"
            size="large"
            variant="secondary"
            pb={{ base: '10px', '2xl': '18px' }}
          >
            Make a Reservation
          </Heading>
          <Text
            pb={{ base: '50px', '2xl': isShowFullField ? '115px' : '133px' }}
            textAlign={isShowFullField ? 'start' : 'center'}
            size="default"
          >
            Get in touch with restaurant
          </Text>
        </Flex>

        {isShowFullField && (
          <>
            <Flex
              flexDirection={{ base: 'column', '2xl': 'row' }}
              gap={{ base: '0px', '2xl': '48px' }}
            >
              <Input
                value={firstName}
                disabled={isDisableField}
                onChange={onChangeField}
                name="firstName"
                type="text"
                placeholder="First Name"
                mb={{ base: '18px', '2xl': '48px' }}
              />
              <Input
                value={lastName}
                disabled={isDisableField}
                onChange={onChangeField}
                name="lastName"
                type="text"
                placeholder="Last Name"
                mb={{ base: '18px', '2xl': '48px' }}
              />
            </Flex>
            <Box mb={{ base: '18px', '2xl': '48px' }}>
              <Input
                value={email}
                disabled={isDisableField}
                onChange={onChangeField}
                name="email"
                type="email"
                placeholder="Email"
              />
              {emailError && (
                <FormErrorMessage fontSize={{ base: 'xxs', '2xl': 'base' }}>
                  {emailError}
                </FormErrorMessage>
              )}
            </Box>
            <Box mb={{ base: '18px', '2xl': '48px' }}>
              <Input
                value={phone}
                disabled={isDisableField}
                onChange={onChangeField}
                name="phone"
                type="tel"
                placeholder="Phone"
              />
              {phoneError && (
                <FormErrorMessage fontSize={{ base: 'xxs', '2xl': 'base' }}>
                  {phoneError}
                </FormErrorMessage>
              )}
            </Box>
          </>
        )}
        <Flex
          flexDirection={{
            base: 'column',
            md: isShowFullField ? 'column' : 'row',
          }}
          gap={{ base: '18px', md: '48px' }}
        >
          <Flex
            justifyContent="space-between"
            flexDirection={{ base: 'column', md: 'unset' }}
            gap={{ base: '18px', md: '48px' }}
          >
            <Box>
              <Picker
                pickerValue={date}
                disabled={isDisableField}
                width={{
                  base: '320px',
                  md: isShowFullField ? '550px' : '350px',
                  '2xl': isShowFullField ? '798px' : '516px',
                }}
                onChangeDate={handleChangeDate}
                isMinDate
                isMaxDate
              />
            </Box>
            <Box>
              <SelectField
                name="time"
                value={time}
                placeholder={time}
                isDisabled={isDisableField}
                data-testid="selectTime"
                options={RESERVATION_TIME}
                onChangeSelect={onChangeField}
                width={{
                  base: '100%',
                  md: isShowFullField ? '550px' : '350px',
                  '2xl': isShowFullField ? '798px' : '516px',
                }}
              />
              {timeError && (
                <FormErrorMessage fontSize={{ base: 'xxs', '2xl': 'base' }}>
                  {timeError}
                </FormErrorMessage>
              )}
            </Box>
          </Flex>
          <SelectField
            name="person"
            value={person}
            isDisabled={isDisableField}
            data-testid="selectPerson"
            placeholder={person}
            options={NUMBER_OF_PERSON}
            onChangeSelect={onChangeField}
          />
        </Flex>
        <Box
          margin="0 auto"
          pt={{ base: '50px', '2xl': isShowFullField ? '80px' : '133px' }}
        >
          <Button
            type="submit"
            variant={isShowFullField ? 'default' : 'dark'}
            size="primary"
            isDisabled={isDisableButton}
          >
            Book Now
          </Button>
        </Box>
      </FormControl>
    </form>
  )
}

export default memo(ReservationForm)
