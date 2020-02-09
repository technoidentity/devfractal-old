import { StandaloneSearchBox } from '@react-google-maps/api'
import { Input } from '@stp/devfractal'
import React, { MutableRefObject } from 'react'

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
