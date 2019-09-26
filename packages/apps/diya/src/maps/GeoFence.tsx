import React from 'react'
import { withGoogleMap, withScriptjs } from 'react-google-maps'
import DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager'
import { googleMapApi } from '../config'
import { Map } from './Utils'

const GeoFenceDrawer = () => {
  return (
    <DrawingManager
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [google.maps.drawing.OverlayType.POLYLINE],
        },

        polylineOptions: {},
      }}
    />
  )
}

const GeoFenceInner = withScriptjs(
  withGoogleMap(() => (
    <Map>
      <GeoFenceDrawer />
    </Map>
  )),
)

export const GeoFence = () => (
  <GeoFenceInner
    googleMapURL={googleMapApi}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `600px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)
