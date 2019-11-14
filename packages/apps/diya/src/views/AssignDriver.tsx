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
  Title,
} from 'technoidentity-devfractal'
import { empty, fn, req } from 'technoidentity-utils'
import {
  ClientListResponse,
  DriverAssign,
  DriverResponse,
  VehicleResponse,
} from '../common'
import { getClientList, getDriver, getVehicleList } from '../pages'

const AssignDriverFormProps = req({
  onSubmit: fn<SubmitAction<DriverAssign>>(),
})

export const AssignDriverForm = component(
  AssignDriverFormProps,
  ({ onSubmit }) => {
    const { params }: any = useRouteMatch()
    const [driverData, setDriverData] = useState<DriverResponse['data']>()
    const [vehicleList, setVehicleList] = useState<
      VehicleResponse['data']['rows']
    >([])
    const [clientList, setClientList] = useState<
      ClientListResponse['data']['rows']
    >([])
    const driverId: string = params.id

    React.useMemo(async () => {
      const driverData = await getDriver(driverId)
      const vehicleList = await getVehicleList()
      const clientList = await getClientList()
      setDriverData(driverData)
      setVehicleList(vehicleList)
      setClientList(clientList)
    }, [])
    return (
      <Section>
        <Columns columnCentered>
          <Column size="half">
            <Title size="5">Assign</Title>
            <Simple.Form
              initialValues={{ ...empty(DriverAssign), driverId }}
              onSubmit={onSubmit}
            >
              <Columns>
                <Column>
                  <Simple.Select label="Driver" name="driverId" disabled>
                    <option value={driverId}>
                      {driverData && driverData.name}
                    </option>
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

                  <Simple.Select label="Client" name="clientId">
                    <option value="">Select Client</option>
                    {clientList &&
                      clientList.map(clientList => (
                        <option key={clientList.id} value={clientList.id}>
                          {clientList.name}
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
