import { StandaloneSearchBox } from '@react-google-maps/api'
import React, { MutableRefObject } from 'react'
import { Input } from '@stp/devfractal'

export const StandaloneGoogleMapSearchBox = ({
  onPlacesChanged,
}: {
  onPlacesChanged(ref: MutableRefObject<StandaloneSearchBox>): void
}) => {
  const searchBox: MutableRefObject<StandaloneSearchBox> = React.useRef<any>()

  return (
    <StandaloneSearchBox
      ref={searchBox}
      onPlacesChanged={() => onPlacesChanged(searchBox)}
    >
      <Input type="search" placeholder="Enter Location Name" />
    </StandaloneSearchBox>
  )
}
