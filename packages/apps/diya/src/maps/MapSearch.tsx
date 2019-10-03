import { Autocomplete, GoogleMapProps, Marker } from '@react-google-maps/api'
import React from 'react'
import { Input, InputProps } from 'technoidentity-devfractal'
import { googleMapApiKey } from '../config'
import { defaultMapSettings } from './defaultSettings'
import { LoadMapApiKey } from './LoadMapApiKey'
import { Map } from './Map'

interface MapSearchInnerProps extends Omit<InputProps, 'onLoad' | 'onDragEnd'> {
  readonly defaultMapSettings: GoogleMapProps
  readonly location: google.maps.LatLngLiteral
  readonly googleMapApiKey: string
  onLoad?(autocomplete: google.maps.places.Autocomplete): void
  onPlaceChanged?(): void
  onDragEnd?(e: google.maps.MouseEvent): void
}

export const MapSearchInner: React.FC<MapSearchInnerProps> = props => {
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

export const MapSearch: React.FC = props => {
  const [location, setLocation] = React.useState<google.maps.LatLngLiteral>({
    lat: 17.385044,
    lng: 78.486671,
  })

  const [places, setPlaces] = React.useState<google.maps.places.Autocomplete>()

  return (
    <MapSearchInner
      defaultMapSettings={defaultMapSettings}
      googleMapApiKey={googleMapApiKey}
      location={location}
      onLoad={autocomplete => {
        setPlaces(autocomplete)
      }}
      onPlaceChanged={() => {
        const geometry =
          places && places.getPlace() && places.getPlace().geometry
        if (geometry) {
          setLocation(geometry.location.toJSON())
        }
      }}
      onDragEnd={e => {
        setLocation(e.latLng.toJSON())
      }}
      type="search"
      ctrlSize="medium"
    >
      {props.children}
    </MapSearchInner>
  )
}
