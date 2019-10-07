import { GoogleMapProps, Polygon, PolygonProps } from '@react-google-maps/api'
import React from 'react'
import { googleMapApiKey } from '../config'
import { defaultMapSettings } from './defaultSettings'
import { LoadMapApiKey } from './LoadMapApiKey'
import { Map } from './Map'

interface PolygonDrawerProps {
  readonly googleMapApiKey: string
  readonly mapOptions: Omit<GoogleMapProps, 'center'>
  readonly polyOptions: PolygonProps
}

export const PolygonDrawer: React.FC<PolygonDrawerProps> = ({
  googleMapApiKey,
  mapOptions,
  polyOptions,
}) => (
  <LoadMapApiKey googleMapsApiKey={googleMapApiKey}>
    <Map {...mapOptions} center={polyOptions.paths && polyOptions.paths[0]}>
      <Polygon {...polyOptions} />
    </Map>
  </LoadMapApiKey>
)

export const DiyaPolygon = () => (
  <PolygonDrawer
    googleMapApiKey={googleMapApiKey}
    mapOptions={{ ...defaultMapSettings, zoom: 5 }}
    polyOptions={{
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
