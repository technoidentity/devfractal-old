import {
  GoogleMap,
  GoogleMapProps,
  Polygon,
  PolygonProps,
} from '@react-google-maps/api'
import React from 'react'
import { googleMapApiKey } from '../config'
import { defaultGoogleMapProps } from './defaultSettings'
import { LoadMapApiKey } from './LoadMapApiKey'

interface PolygonDrawerProps {
  readonly apiKey: string
  readonly mapOptions: Omit<GoogleMapProps, 'center'>
  readonly polygonOptions: PolygonProps
}

export const PolygonDrawer: React.FC<PolygonDrawerProps> = ({
  apiKey,
  mapOptions,
  polygonOptions,
}) => (
  <LoadMapApiKey googleMapsApiKey={apiKey}>
    <GoogleMap
      {...mapOptions}
      center={polygonOptions.paths && polygonOptions.paths[0]}
    >
      <Polygon {...polygonOptions} />
    </GoogleMap>
  </LoadMapApiKey>
)

export const DiyaPolygon = () => (
  <PolygonDrawer
    apiKey={googleMapApiKey}
    mapOptions={{ ...defaultGoogleMapProps, zoom: 5 }}
    polygonOptions={{
      paths: [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 25.774, lng: -80.19 },
      ],
      options: {
        fillColor: '#1F4788',
        fillOpacity: 0.5,
      },
    }}
  />
)
