import React from 'react'
import { useState } from 'react'
import { useRouteMatch } from 'react-router'
import {
  Column,
  Columns,
  component,
  Section,
  Simple,
  SubmitAction,
} from 'technoidentity-devfractal'
import { empty, fn, req } from 'technoidentity-utils'
import { useAuth } from '../auth/AuthContext'
import {
  AssignForm,
  ClientResponse,
  DriverListResponse,
  VehicleResponse,
} from '../common'
import { HeadTitle } from '../components'
import { getClient, getDriverList, getVehicleList } from '../pages'

const AssignClientFormProps = req({
  onSubmit: fn<SubmitAction<AssignForm>>(),
})

export const AssignClientForm = component(
  AssignClientFormProps,
  ({ onSubmit }) => {
    const { logout, setUser } = useAuth()
    const { params }: any = useRouteMatch()
    const [clientData, setClientData] = useState<ClientResponse['data']>()
    const [driverList, setDriverList] = useState<
      DriverListResponse['data']['rows']
    >([])
    const [vehicleList, setVehicleList] = useState<
      VehicleResponse['data']['rows']
    >([])
    const clientId: string = params.id

    React.useMemo(async () => {
      const clientData = await getClient(clientId, { setUser, logout })
      const driverList = await getDriverList({ setUser, logout })
      const vehicleList = await getVehicleList({ setUser, logout })
      setClientData(clientData)
      setDriverList(driverList)
      setVehicleList(vehicleList)
    }, [clientId])
    return (
      <Section>
        <Columns columnCentered>
          <Column size="half">
            <HeadTitle>Assign</HeadTitle>
            <Simple.Form
              initialValues={{ ...empty(AssignForm), clientId }}
              onSubmit={onSubmit}
            >
              <Columns>
                <Column>
                  <Simple.Select label="Client" name="clientId" disabled>
                    <option value={clientId}>
                      {clientData && clientData.name}
                    </option>
                  </Simple.Select>
                  <Simple.Select label="Driver" name="driverId">
                    <option value="">Select Vehicle</option>
                    {driverList &&
                      driverList.map(driverList => (
                        <option key={driverList.id} value={driverList.id}>
                          {driverList.name}
                        </option>
                      ))}
                  </Simple.Select>
                  <Simple.Select label="Vehicle" name="vehicleId">
                    <option value="">Select Vehicle</option>
                    {vehicleList &&
                      vehicleList.map(vehicleList => (
                        <option key={vehicleList.id} value={vehicleList.id}>
                          {vehicleList.vehicleName}
                        </option>
                      ))}
                  </Simple.Select>
                </Column>

                <Column>
                  <Simple.Date name="start" />
                  <Simple.Date name="end" />
                </Column>
              </Columns>
              <Simple.FormButtons />
            </Simple.Form>
          </Column>
        </Columns>
      </Section>
    )
  },
)
