import { InfoWindow, Marker } from '@react-google-maps/api'
import React from 'react'
import { VehicleLocation } from '../common'
import { googleMapApiKey } from '../config'
import evIcon from '../images/ev.png'
import { defaultMapSettings } from './defaultSettings'
import { LoadMapApiKey } from './LoadMapApiKey'
import { Map } from './Map'

interface EvPositionState {
  readonly lat: number
  readonly lng: number
  readonly description: string
}

interface EvLocationsProps {
  readonly data: readonly VehicleLocation[]
}

const EvLocations: React.FC<EvLocationsProps> = ({ data }) => {
  const [state, setState] = React.useState<EvPositionState>()
  return (
    <>
      {data &&
        data.map((ev: VehicleLocation) => (
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

export const MapView: React.FC<{ readonly data: readonly any[] }> = ({
  data,
}) => (
  <LoadMapApiKey
    googleMapsApiKey={googleMapApiKey}
    loadComponent={LoadComponent}
    errorComponent={ErrorComponent}
  >
    <Map {...defaultMapSettings}>
      <EvLocations data={data} />
    </Map>
  </LoadMapApiKey>
)
