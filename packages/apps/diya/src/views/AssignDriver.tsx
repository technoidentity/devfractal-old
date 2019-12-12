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
  DriverResponse,
  VehicleResponse,
} from '../common'
import { getClientList, getDriver, getVehicleList } from '../pages'

const driverLinks = links('drivers')

const AssignDriverFormProps = req({
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

export const AssignDriverForm = component(
  AssignDriverFormProps,
  ({ onSubmit }) => {
    const { logout, setUser, setHeaderText } = useAuth()
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
      const driverData = await getDriver(driverId, { setUser, logout })
      const vehicleList = await getVehicleList({
        setUser,
        logout,
        setHeaderText,
      })
      const clientList = await getClientList({ setUser, logout, setHeaderText })
      setDriverData(driverData)
      setVehicleList(vehicleList)
      setClientList(clientList)
      setHeaderText('Assign')
    }, [driverId, logout, setUser, setHeaderText])
    return (
      <Section>
        <Columns columnCentered>
          <Column size="half">
            <CreateLink
              alignment="right"
              variant="primary"
              to={driverLinks.list}
            >
              Back
            </CreateLink>
            <Simple.Form
              initialValues={{ ...empty(AssignForm), driverId }}
              validationSchema={schema}
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
    )
  },
)
