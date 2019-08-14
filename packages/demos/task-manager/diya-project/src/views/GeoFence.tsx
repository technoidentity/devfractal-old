import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonsGroup,
  component,
  Get,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { GeoFence, geofenceAPI } from '../common'
import { Actions } from '../views'

export const GeoFenceListProps = req({ geofenceList: readonlyArray(GeoFence) })

type GeoFenceListProps = TypeOf<typeof GeoFenceListProps>

const GeoFenceListView: React.FC<GeoFenceListProps> = ({ geofenceList }) => (
  <>
    <ButtonsGroup alignment="right">
      <Link to="geofence/add" className="button is-primary">
        Create GeoFence
      </Link>
    </ButtonsGroup>
    <SimpleTable
      data={geofenceList}
      headers={['areaName', 'assignVehicle', 'assignClient', 'Actions']}
    >
      {(key, values) =>
        key === 'Actions' ? (
          <Actions editURL={`geofence/${values.ID}/edit`} />
        ) : // tslint:disable-next-line: no-null-keyword
        null
      }
    </SimpleTable>
  </>
)

const GeoFenceListTable = component(GeoFenceListProps, ({ geofenceList }) => (
  <Section>
    <Title size="4">GeoFence</Title>
    <GeoFenceListView geofenceList={geofenceList} />
  </Section>
))

export const GeoFenceList: React.FC = () => (
  <Get asyncFn={() => geofenceAPI.many()}>
    {data => <GeoFenceListTable geofenceList={data} />}
  </Get>
)
