import { StandaloneSearchBox } from '@react-google-maps/api'
import React from 'react'
import { Input } from 'technoidentity-devfractal'

export const StandaloneGoogleMapSearchBox = ({
  onPlacesChanged,
}: {
  onPlacesChanged(ref: React.MutableRefObject<any>): void
}) => {
  const searchBox = React.useRef<any>()
  return (
    <StandaloneSearchBox
      ref={searchBox}
      onPlacesChanged={() => onPlacesChanged(searchBox)}
    >
      <Input type="search" placeholder="Customized your placeholder" />
    </StandaloneSearchBox>
  )
}
