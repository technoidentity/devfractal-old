import React from 'react'
import { useState } from 'react'
import { useRouteMatch } from 'react-router'
import {
  Column,
  Columns,
  component,
  CreateLink,
  links,
  Section,
  Simple,
  SubmitAction,
} from 'technoidentity-devfractal'
import { empty, fn, req } from 'technoidentity-utils'
import * as yup from 'yup'
import { useAuth } from '../auth/AuthContext'
import {
  AssignForm,
  ClientListResponse,
  DriverListResponse,
  VehicleEdit,
} from '../common'
import { HeadTitle } from '../components'
import { getClientList, getDriverList, getVehicle } from '../pages'
const vehicleLinks = links('vehicles')

const AssignVehicleFormProps = req({
  onSubmit: fn<SubmitAction<AssignForm>>(),
})

const schema = yup.object().shape({
  vehicleId: yup.string().required('this is a required field'),
  driverId: yup.string().required('this is a required field'),
  clientId: yup.string().required('this is required field'),
  start: yup.date().required('this is a required field'),
  end: yup
    .date()
    .required()
    .min(yup.ref('start'), 'end date must be later than start date'),
})

export const AssignVehicleForm = component(
  AssignVehicleFormProps,
  ({ onSubmit }) => {
    const { logout, setUser, setHeaderText } = useAuth()
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
      const vehicleData = await getVehicle(vehicleId, { setUser, logout })
      const driverList = await getDriverList({ setUser, logout, setHeaderText })
      const clientList = await getClientList({ setUser, logout, setHeaderText })
      setVehicleData(vehicleData)
      setDriverList(driverList)
      setClientList(clientList)
      setHeaderText('Assign')
    }, [vehicleId, logout, setUser, setHeaderText])
    return (
      <>
        <CreateLink alignment="right" variant="primary" to={vehicleLinks.list}>
          Back
        </CreateLink>
        <Section>
          <Columns columnCentered>
            <Column size="half">
              <HeadTitle>Assign</HeadTitle>
              <Simple.Form
                initialValues={{
                  ...empty(AssignForm),
                  vehicleId,
                }}
                validationSchema={schema}
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
                    <Simple.Date
                      name="start"
                      label="Start"
                      dateFormat="dd/MM/yyyy hh:mm a"
                    />
                    <Simple.Date
                      name="end"
                      label="End"
                      dateFormat="dd/MM/yyyy hh:mm a"
                    />
                  </Column>
                </Columns>
                <Simple.FormButtons submit={'Assign'} />
              </Simple.Form>
            </Column>
          </Columns>
        </Section>
      </>
    )
  },
)
