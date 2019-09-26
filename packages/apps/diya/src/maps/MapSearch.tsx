import React from 'react'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps'
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox'

const PlaceWithStandloneSearchBox = withScriptjs(
  withGoogleMap(() => {
    const [location, setLocation] = React.useState<{ lat: any; lng: any }>()
    const searchBox = React.useRef<any>()
    const [place, setPlace] = React.useState([])

    React.useEffect(() => {
      place.map(({ geometry: { location } }: any) => {
        setLocation({ lat: location.lat(), lng: location.lng() })
      })
    }, [place])
    return (
      <div>
        <StandaloneSearchBox
          ref={searchBox}
          onPlacesChanged={() => {
            setPlace(searchBox.current.getPlaces())
          }}
        >
          <input
            ref={searchBox}
            type="text"
            placeholder="Customized your placeholder"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
            }}
          />
        </StandaloneSearchBox>
        <ol>
          {place.map(
            ({ place_id, formatted_address, geometry: { location } }: any) => {
              return (
                <li key={place_id}>
                  {formatted_address}
                  {' at '}({location.lat()}, {location.lng()})
                </li>
              )
            },
          )}
        </ol>
        <GoogleMap
          defaultZoom={15}
          center={location || { lat: 17.385044, lng: 78.486671 }}
        >
          <Marker position={location} />,
        </GoogleMap>
      </div>
    )
  }),
)

export const MySearchStandlone = () => (
  <PlaceWithStandloneSearchBox
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJu6P9EdyC5YfmwzLJzCuDL_26l5Syqx0&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `600px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)
