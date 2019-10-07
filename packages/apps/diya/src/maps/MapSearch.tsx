import {
  Autocomplete,
  GoogleMapProps,
  Marker,
  MarkerProps,
} from '@react-google-maps/api'
import React from 'react'
import { Input, InputProps } from 'technoidentity-devfractal'
import { LoadMapApiKey } from './LoadMapApiKey'
import { Map } from './Map'

interface MapSearchProps {
  readonly location: google.maps.LatLngLiteral
  readonly googleMapApiKey: string
  readonly mapOptions?: Omit<GoogleMapProps, 'center'>
  readonly inputOptions?: InputProps
  readonly markerOptions?: Omit<MarkerProps, 'position'>
  onLoad?(autocomplete: google.maps.places.Autocomplete): void
  onPlaceChanged?(): void
}

export const MapSearch: React.FC<MapSearchProps> = props => {
  const {
    googleMapApiKey,
    location,
    onLoad,
    onPlaceChanged,
    children,
    ...rest
  } = props

  return (
    <LoadMapApiKey googleMapsApiKey={googleMapApiKey}>
      <Map {...rest.mapOptions} center={location || undefined}>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <Input {...rest.inputOptions} />
        </Autocomplete>
        <Marker {...rest.markerOptions} position={location} />
        {children}
      </Map>
    </LoadMapApiKey>
  )
}
