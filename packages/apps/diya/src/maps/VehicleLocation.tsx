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

interface EvLocationsProps<D> {
  readonly data: readonly D[]
}

function isVehicleLocation(data: unknown): data is readonly VehicleLocation[] {
  return (data as VehicleLocation[]).every(el => el.lat !== undefined)
}

function EvLocations<D>({ data }: EvLocationsProps<D>) {
  const [state, setState] = React.useState<EvPositionState>()
  return (
    <>
      {isVehicleLocation(data) &&
        data.map((ev: VehicleLocation) => (
          <Marker
            onMouseOver={() => {
              setState({
                lat: Number(ev.lat),
                lng: Number(ev.lng),
                description: ev.description,
              })
            }}
            onMouseDown={() => setState(undefined)}
            key={ev.id}
            position={{
              lat: Number(ev.lat),
              lng: Number(ev.lng),
            }}
            icon={evIcon}
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

interface MapViewProps<D> {
  readonly data: readonly D[]
}

export function MapView<D>({ data }: MapViewProps<D>) {
  return (
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
}
