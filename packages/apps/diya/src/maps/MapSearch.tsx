import { Autocomplete, GoogleMapProps, Marker } from '@react-google-maps/api'
import React from 'react'
import { Input, InputProps } from 'technoidentity-devfractal'
import { LoadMapApiKey } from './LoadMapApiKey'
import { Map } from './Map'

interface MapSearchProps extends Omit<InputProps, 'onLoad' | 'onDragEnd'> {
  readonly defaultMapSettings: GoogleMapProps
  readonly location: google.maps.LatLngLiteral
  readonly googleMapApiKey: string
  onLoad?(autocomplete: google.maps.places.Autocomplete): void
  onPlaceChanged?(): void
  onDragEnd?(e: google.maps.MouseEvent): void
}

export const MapSearch: React.FC<MapSearchProps> = props => {
  const {
    googleMapApiKey,
    defaultMapSettings,
    location,
    onLoad,
    onPlaceChanged,
    onDragEnd,
    children,
    ...rest
  } = props

  return (
    <LoadMapApiKey googleMapsApiKey={googleMapApiKey}>
      <Map {...defaultMapSettings} center={location || undefined}>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <Input {...rest} />
        </Autocomplete>
        <Marker position={location} draggable={true} onDragEnd={onDragEnd} />
        {children}
      </Map>
    </LoadMapApiKey>
  )
}
