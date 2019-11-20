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
import {
  AssignForm,
  ClientListResponse,
  DriverListResponse,
  VehicleEdit,
} from '../common'
import { HeadTitle } from '../components'
import { getClientList, getDriverList, getVehicle } from '../pages'

const AssignVehicleFormProps = req({
  onSubmit: fn<SubmitAction<AssignForm>>(),
})

export const AssignVehicleForm = component(
  AssignVehicleFormProps,
  ({ onSubmit }) => {
    const { params }: any = useRouteMatch()
    const [vehicleData, setVehicleData] = useState<VehicleEdit['data']>()
    const [driverList, setDriverList] = useState<
      DriverListResponse['data']['rows']
    >([])
    const [clientList, setClientList] = useState<
      ClientListResponse['data']['rows']
    >([])
    const vehicleId: string = params.id

    React.useMemo(async () => {
      const vehicleData = await getVehicle(vehicleId)
      const driverList = await getDriverList()
      const clientList = await getClientList()
      setVehicleData(vehicleData)
      setDriverList(driverList)
      setClientList(clientList)
    }, [vehicleId])
    return (
      <Section>
        <Columns columnCentered>
          <Column size="half">
            <HeadTitle>Assign</HeadTitle>
            <Simple.Form
              initialValues={{ ...empty(AssignForm), vehicleId }}
              onSubmit={onSubmit}
            >
              <Columns>
                <Column>
                  <Simple.Select label="Vehicle" name="vehicleId" disabled>
                    <option value={vehicleId}>
                      {vehicleData && vehicleData.vehicleName}
                    </option>
                  </Simple.Select>
                  <Simple.Select label="Driver" name="driverId">
                    <option value="">Select Driver</option>
                    {driverList &&
                      driverList.map(driverList => (
                        <option key={driverList.id} value={driverList.id}>
                          {driverList.name}
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
