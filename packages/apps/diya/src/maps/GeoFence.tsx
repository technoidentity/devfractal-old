import React from 'react'
import { withGoogleMap, withScriptjs } from 'react-google-maps'
import DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager'
import { googleMapApi } from '../config'
import { Map } from './Map'

export const GeoFenceDrawer: React.FC = () => {
  const [draw, setDraw] = React.useState<boolean>(true)
  return (
    <DrawingManager
      options={{
        drawingControl: draw,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [google.maps.drawing.OverlayType.POLYGON],
        },
        polygonOptions: {
          fillColor: '#1F4788',
          fillOpacity: 0.5,
          geodesic: true,
        },
      }}
      onPolygonComplete={(poly: google.maps.Polygon) => {
        const path = poly.getPath()
        if (path) {
          path.getArray().map(e => e.toJSON())
        }
        setDraw(!draw)
      }}
      drawingMode={draw ? google.maps.drawing.OverlayType.POLYGON : undefined}
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

export const GeoFenceDraw = () => (
  <GeoFenceInner
    googleMapURL={googleMapApi}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `600px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)
