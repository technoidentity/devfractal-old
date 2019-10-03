import { DrawingManager } from '@react-google-maps/api'
import React from 'react'
import { MapSearch } from './MapSearch'

export const GeoFenceDrawer: React.FC = () => {
  const [draw, setDraw] = React.useState<boolean>(true)
  return (
    <DrawingManager
      options={{
        drawingControl: draw,
        drawingControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP,
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

export const GeoFence = () => (
  <MapSearch>
    <GeoFenceDrawer />
  </MapSearch>
)
