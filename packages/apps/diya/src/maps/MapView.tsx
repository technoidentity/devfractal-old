import React from 'react'
import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps'
import { http as httpAPI } from 'technoidentity-devfractal'
import { readonlyArray } from 'technoidentity-utils'
import { VehicleLocation } from '../common'
import evIcon from '../images/ev.png'

const http = httpAPI({ baseURL: 'http://localhost:9999' })

const Map: React.FC = props => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 17.385044, lng: 78.486671 }}
    >
      {props.children}
    </GoogleMap>
  )
}

interface EvPositionState{
    readonly lat : number
    readonly lng: number
    readonly description: string
}

const WrappedMap = withScriptjs(
  withGoogleMap(() => {
    const [state, setState] = React.useState<EvPositionState>()
    const [evs, setEVs] = React.useState<VehicleLocation[]>([])
    React.useEffect(() => {
      const fetchData = async () => {
        const data = await http.get(
          { resource: 'vehicles_location' },
          readonlyArray(VehicleLocation),
        )
        setEVs([...data])
      }
      fetchData()
    }, [])
    return (
      <Map>
        {evs &&
          evs.map((ev: VehicleLocation) => (
            <Marker
              key={ev.id}
              position={{ lat: Number(ev.lat), lng: Number(ev.lng) }}
              icon={evIcon}
              onClick={()=>{setState({
                              lat: Number(ev.lat),
                              lng: Number(ev.lng),
                            description: ev.description})}}
            />
          ))}
        {state && (
          <InfoWindow
            position={{lat : state.lat, lng: state.lng }}
            onCloseClick={() => setState(undefined)}
          >
            <div>{state.description}</div>
          </InfoWindow>
        )}
      </Map>
    )
  }),
)

export const MapView = () => (
  <WrappedMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJu6P9EdyC5YfmwzLJzCuDL_26l5Syqx0&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `600px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)
