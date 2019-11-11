import { GoogleMap, GoogleMapProps } from '@react-google-maps/api'
import React from 'react'

export const Map: React.FC<GoogleMapProps> = props => {
  return <GoogleMap {...props}>{props.children}</GoogleMap>
}
