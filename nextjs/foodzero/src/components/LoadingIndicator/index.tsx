import React, { memo } from 'react'
import { Center, Spinner, SpinnerProps } from '@chakra-ui/react'

const LoadingIndicator = ({ ...props }: SpinnerProps) => {
  return (
    <Center
      backgroundColor="silverFoil"
      opacity={0.3}
      position="fixed"
      backdropFilter="blur(3px)"
      inset={0}
      zIndex={1500}
      pb="150px"
    >
      <Spinner {...props} />
    </Center>
  )
}

export default memo(LoadingIndicator)
