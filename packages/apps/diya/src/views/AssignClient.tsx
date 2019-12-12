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
  ClientResponse,
  DriverListResponse,
  VehicleResponse,
} from '../common'
import { getClient, getDriverList, getVehicleList } from '../pages'

const clientLinks = links('clients')

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

const AssignClientFormProps = req({
  onSubmit: fn<SubmitAction<AssignForm>>(),
})

export const AssignClientForm = component(
  AssignClientFormProps,
  ({ onSubmit }) => {
    const { logout, setUser, setHeaderText } = useAuth()
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
      const driverList = await getDriverList({ setUser, logout, setHeaderText })
      const vehicleList = await getVehicleList({
        setUser,
        logout,
        setHeaderText,
      })
      setClientData(clientData)
      setDriverList(driverList)
      setVehicleList(vehicleList)
      setHeaderText('Assign')
    }, [clientId, logout, setUser, setHeaderText])
    return (
      <Section>
        <Columns columnCentered>
          <Column size="half">
            <CreateLink
              alignment="right"
              variant="primary"
              to={clientLinks.list}
            >
              Back
            </CreateLink>
            <Simple.Form
              initialValues={{ ...empty(AssignForm), clientId }}
              validationSchema={schema}
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
                    <option value="">Select Driver</option>
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
