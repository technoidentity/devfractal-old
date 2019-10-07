import { InfoWindow, Marker } from '@react-google-maps/api'
import React from 'react'
import { http as httpAPI } from 'technoidentity-devfractal'
import { readonlyArray } from 'technoidentity-utils'
import { VehicleLocation } from '../common'
import { fakeBaseURL, googleMapApiKey } from '../config'
import evIcon from '../images/ev.png'
import { defaultMapSettings } from './defaultSettings'
import { LoadMapApiKey } from './LoadMapApiKey'
import { Map } from './Map'

const http = httpAPI({ baseURL: fakeBaseURL })

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
  }, [resource])
  return (
    <>
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
    </>
  )
}

const LoadComponent = () => <div>...Loading Map</div>
const ErrorComponent = () => <div>Map cannot be loaded right now, sorry.</div>

export const MapView: React.FC = () => (
  <LoadMapApiKey
    googleMapsApiKey={googleMapApiKey}
    loadComponent={LoadComponent}
    errorComponent={ErrorComponent}
  >
    <Map {...defaultMapSettings}>
      <EvLocations resource="vehicles_location" />
    </Map>
  </LoadMapApiKey>
)
