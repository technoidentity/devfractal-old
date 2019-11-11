import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { DrawingManager } from '@react-google-maps/api'
import React from 'react'
import { googleMapApiKey } from '../config'
import { defaultMapSettings } from './defaultSettings'
import { MapSearch } from './MapSearch'

interface GeoFenceDrawerProps {
  onPolygonComplete(polygon: google.maps.Polygon): void
  readonly options: google.maps.PolygonOptions
}

export const GeoFenceDrawer: React.FC<GeoFenceDrawerProps> = ({
  onPolygonComplete,
  options,
}) => {
  const [drawable, setDrawable] = React.useState<boolean>(true)
  return (
    <DrawingManager
      options={{
        drawingControl: drawable,
        drawingControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_CENTER,
          drawingModes: [google.maps.drawing.OverlayType.POLYGON],
        },
        polygonOptions: options,
      }}
      onPolygonComplete={(poly: google.maps.Polygon) => {
        setDrawable(!drawable)
        onPolygonComplete(poly)
      }}
      drawingMode={
        drawable ? google.maps.drawing.OverlayType.POLYGON : undefined
      }
    />
  )
}

export const GeoFence = () => {
  const [location, setLocation] = React.useState<google.maps.LatLngLiteral>({
    lat: 17.385044,
    lng: 78.486671,
  })

  const [places, setPlaces] = React.useState<google.maps.places.Autocomplete>()

  return (
    <>
      <MapSearch
        mapOptions={defaultMapSettings}
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
        inputOptions={{
          type: 'search',
          ctrlSize: 'small',
          rightIcon: faSearch,
        }}
        markerOptions={{
          draggable: true,
          onDragEnd: event => {
            setLocation(event.latLng.toJSON())
          },
        }}
      >
        <GeoFenceDrawer
          onPolygonComplete={poly => {
            poly
              .getPath()
              .getArray()
              .map(e => e.toJSON())
          }}
          options={{
            fillColor: '#1F4788',
            fillOpacity: 0.5,
          }}
        />
      </MapSearch>
    </>
  )
}
