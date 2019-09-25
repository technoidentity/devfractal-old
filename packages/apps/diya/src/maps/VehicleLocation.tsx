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
import { fakeBaseURL, googleMapApi } from '../config'
import evIcon from '../images/ev.png'

const http = httpAPI({ baseURL: fakeBaseURL })

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

interface EvPositionState {
  readonly lat: number
  readonly lng: number
  readonly description: string
}

interface EvLocationsProps {
  readonly resource: string
}

const EvLocations: React.FC<EvLocationsProps> = ({ resource }) => {
  const [state, setState] = React.useState<EvPositionState>()
  const [evs, setEVs] = React.useState<VehicleLocation[]>([])
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await http.get({ resource }, readonlyArray(VehicleLocation))
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
            position={{
              lat: Number(ev.lat),
              lng: Number(ev.lng),
            }}
            icon={evIcon}
            onClick={() => {
              setState({
                lat: Number(ev.lat),
                lng: Number(ev.lng),
                description: ev.description,
              })
            }}
          />
        ))}
      {state && (
        <InfoWindow
          position={{
            lat: state.lat,
            lng: state.lng,
          }}
          onCloseClick={() => setState(undefined)}
        >
          <div>{state.description}</div>
        </InfoWindow>
      )}
    </Map>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(EvLocations))

export const MapView = () => (
  <WrappedMap
    resource="vehicles_location"
    googleMapURL={googleMapApi}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<section style={{ height: `600px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)
