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
import { Actions, GeoFence, geoFenceAPI, StaticPagination } from '../common'

export const GeoFenceListProps = req({ geoFenceList: readonlyArray(GeoFence) })

type GeoFenceListProps = TypeOf<typeof GeoFenceListProps>

const GeoFenceListView: React.FC<GeoFenceListProps> = ({ geoFenceList }) => (
  <>
    <ButtonsGroup alignment="right">
      <Link to="geo_fence/add" className="button is-primary">
        Create GeoFence
      </Link>
    </ButtonsGroup>
    <SimpleTable
      data={geoFenceList}
      headers={['areaName', 'assignVehicle', 'assignClient', 'Actions']}
      striped
    >
      {(key, values) =>
        key === 'Actions' ? (
          <Actions editURL={`geo_fence/${values.id}/edit`} />
        ) : // tslint:disable-next-line: no-null-keyword
        null
      }
    </SimpleTable>
  </>
)

const GeoFenceListTable = component(GeoFenceListProps, ({ geoFenceList }) => (
  <Section>
    <Title size="4" textColor="info">
      GeoFence
    </Title>
    <GeoFenceListView geoFenceList={geoFenceList} />
    <StaticPagination />
  </Section>
))

export const GeoFenceList: React.FC = () => (
  <Get asyncFn={() => geoFenceAPI.many()}>
    {data => <GeoFenceListTable geoFenceList={data} />}
  </Get>
)
