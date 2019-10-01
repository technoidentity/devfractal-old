import React from 'react'
import SearchBox from 'react-google-maps/lib/components/places/SearchBox'
import { Input } from 'technoidentity-devfractal'

export const MapSearchBox = ({
  onPlacesChanged,
}: {
  onPlacesChanged(ref: React.MutableRefObject<SearchBox>): void
}) => {
  // TODO: set type to useRef
  const searchBox: React.MutableRefObject<SearchBox> = React.useRef<any>()

  return (
    <SearchBox
      controlPosition={5}
      ref={searchBox}
      onPlacesChanged={() => onPlacesChanged(searchBox)}
    >
      <Input type="search" placeholder="Type your address" />
    </SearchBox>
  )
}
