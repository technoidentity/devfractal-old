import React, { useState } from 'react'
import {
  Column,
  Columns,
  CreateLink,
  formComponent,
  links,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { ClientListResponse, GeoFence, VehicleResponse } from '../common'
import { HeadTitle } from '../components'
import { GeoFence as GeoFenceMap } from '../maps'
import { getClientList, getVehicleList } from '../pages'

const geoFenceLinks = links('geo_fences')

export const GeoFenceForm = formComponent(
  GeoFence,
  ({ initial, onSubmit, edit }) => {
    const { logout, setUser } = useAuth()
    const [vehicleList, setVehicleList] = useState<
      VehicleResponse['data']['rows']
    >([])
    const [clientList, setClientList] = useState<
      ClientListResponse['data']['rows']
    >([])

    React.useMemo(async () => {
      const vehicleList = await getVehicleList({ setUser, logout })
      const clientList = await getClientList({ setUser, logout })
      setVehicleList(vehicleList)
      setClientList(clientList)
    }, [logout, setUser])
    return (
      <>
        <Section>
          <HeadTitle>{edit ? 'Update' : 'Add'} GeoFence</HeadTitle>
        </Section>
        <CreateLink alignment="right" variant="primary" to={geoFenceLinks.list}>
          Back
        </CreateLink>
        <Section>
          <Columns>
            <Column>
              <GeoFenceMap />
            </Column>
            <Column>
              <Simple.Form initialValues={initial} onSubmit={onSubmit}>
                <Simple.Text name="areaName" />
                <Simple.Select label="Assign Vehicle" name="vehicleId">
                  <option value="">Select Vehicle</option>

                  {vehicleList &&
                    vehicleList.map(vehicleList => (
                      <option key={vehicleList.id} value={vehicleList.id}>
                        {vehicleList.vehicleName}
                      </option>
                    ))}
                </Simple.Select>
                <Simple.Select label="Assign Client" name="clientId">
                  <option value="">Select Client</option>
                  {clientList &&
                    clientList.map(clientList => (
                      <option key={clientList.id} value={clientList.id}>
                        {clientList.name}
                      </option>
                    ))}
                </Simple.Select>
                <Simple.TextArea name="comments" />

                <Simple.FormButtons submit={edit ? 'Update' : 'Save'} />
              </Simple.Form>
            </Column>
          </Columns>
        </Section>
      </>
    )
  },
)
