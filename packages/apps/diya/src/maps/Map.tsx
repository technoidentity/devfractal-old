import React from 'react'
import { GoogleMap } from 'react-google-maps'

export const Map: React.FC = props => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 17.385044, lng: 78.486671 }}
    >
      {props.children}
    </GoogleMap>
  )
}
