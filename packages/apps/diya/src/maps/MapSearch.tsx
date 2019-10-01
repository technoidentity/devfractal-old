import React from 'react'
import { Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import { googleMapApi } from '../config'
import { GeoFenceDrawer } from './GeoFence'
import { Map } from './Map'
import { MapSearchBox } from './MapSearchBox'

interface MapSearchBoxProps {
  readonly defaultCenter: google.maps.LatLngLiteral
}

const MapSearchInner = withScriptjs(
  withGoogleMap(({ defaultCenter }: MapSearchBoxProps) => {
    const [location, setLocation] = React.useState<google.maps.LatLngLiteral>()
    const [place, setPlace] = React.useState<google.maps.places.PlaceResult[]>(
      [],
    )

    React.useEffect(() => {
      place.map(({ geometry }: google.maps.places.PlaceResult) => {
        if (geometry) {
          setLocation({
            lat: geometry.location.lat(),
            lng: geometry.location.lng(),
          })
        }
      })
    }, [place])
    return (
      <>
        <Map center={location || defaultCenter}>
          <GeoFenceDrawer />
          <MapSearchBox
            onPlacesChanged={ref => {
              setPlace(ref.current.getPlaces())
            }}
          />
          <Marker position={location} />,
        </Map>
      </>
    )
  }),
)

export const MapSearch = () => (
  <MapSearchInner
    googleMapURL={googleMapApi}
    defaultCenter={{ lat: 17.385044, lng: 78.486671 }}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `600px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)
