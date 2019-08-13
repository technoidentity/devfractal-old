import { Get } from 'devfractal-api'
import { SimpleTable } from 'devfractal-simple'
import { ButtonsGroup, component, Section, Title } from 'devfractal-ui-core'
import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import { req } from 'technoidentity-utils'
import { Geofence, geofenceAPI } from '../common'
import { Actions } from '../views'

export const GeofenceListProps = req({ geofenceList: readonlyArray(Geofence) })

type GeofenceListProps = TypeOf<typeof GeofenceListProps>

const GeofenceListView: React.FC<GeofenceListProps> = ({ geofenceList }) => (
  <>
    <ButtonsGroup alignment="right">
      <Link to="geofence/add" className="button is-primary">
        Create Geofence
      </Link>
    </ButtonsGroup>
    <SimpleTable
      data={geofenceList}
      headers={['areaName', 'assignVehicle', 'assignClient', 'Actions']}
    >
      {(key, values) =>
        key === 'Actions' ? (
          <Actions editUrl={`geofence/${values.ID}/edit`} />
        ) : // tslint:disable-next-line: no-null-keyword
        null
      }
    </SimpleTable>
  </>
)

const GeofenceListTable = component(GeofenceListProps, ({ geofenceList }) => (
  <Section>
    <Title size="4">Geofence</Title>
    <GeofenceListView geofenceList={geofenceList} />
  </Section>
))

export const GeofenceList: React.FC = () => (
  <Get asyncFn={() => geofenceAPI.many()}>
    {data => <GeofenceListTable geofenceList={data} />}
  </Get>
)
