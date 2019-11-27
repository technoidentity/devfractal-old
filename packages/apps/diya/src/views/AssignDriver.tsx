import TextField from '@material-ui/core/TextField'
import { FormikActions } from 'formik'
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
  ClientListResponse,
  DriverResponse,
  VehicleResponse,
} from '../common'
import { HeadTitle } from '../components'
import { getClientList, getDriver, getVehicleList } from '../pages'
import { formatDateWithTimeStamp } from '../reacttable/utils'

const AssignDriverFormProps = req({
  onSubmit: fn<SubmitAction<AssignForm>>(),
})

export const AssignDriverForm = component(
  AssignDriverFormProps,
  ({ onSubmit }) => {
    const { logout, setUser } = useAuth()
    const { params }: any = useRouteMatch()
    const [driverData, setDriverData] = useState<DriverResponse['data']>()
    const [vehicleList, setVehicleList] = useState<
      VehicleResponse['data']['rows']
    >([])
    const [clientList, setClientList] = useState<
      ClientListResponse['data']['rows']
    >([])
    const [endDate, setEndDate] = useState()
    const [startDate, setStartDate] = useState()
    const driverId: string = params.id

    React.useMemo(async () => {
      const driverData = await getDriver(driverId, { setUser, logout })
      const vehicleList = await getVehicleList({ setUser, logout })
      const clientList = await getClientList({ setUser, logout })
      setDriverData(driverData)
      setVehicleList(vehicleList)
      setClientList(clientList)
    }, [driverId])
    return (
      <Section>
        <Columns columnCentered>
          <Column size="half">
            <HeadTitle>Assign</HeadTitle>
            <Simple.Form
              initialValues={{ ...empty(AssignForm), driverId }}
              onSubmit={(
                values: AssignForm,
                actions: FormikActions<AssignForm>,
              ) => {
                const assignDriverData = {
                  ...values,
                  end: endDate
                    ? endDate
                    : formatDateWithTimeStamp(empty(AssignForm).end),
                  start: startDate
                    ? startDate
                    : formatDateWithTimeStamp(empty(AssignForm).start),
                }
                // tslint:disable-next-line: no-floating-promises
                onSubmit(assignDriverData, actions)
              }}
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
                  <div style={{ marginBottom: '0.75rem' }}>
                    <label
                      style={{
                        color: '#363636',
                        display: 'block',
                        fontSize: '1rem',
                        fontWeight: 700,
                      }}
                    >
                      Start
                    </label>
                    <TextField
                      style={{
                        border: '1px solid transparent',
                        backgroundColor: 'white',
                        borderColor: '#dbdbdb',
                        borderRadius: '0',
                        color: '#363636',
                        borderBottom: 'none',
                      }}
                      name="end"
                      type="datetime-local"
                      defaultValue={formatDateWithTimeStamp(
                        empty(AssignForm).start,
                      )}
                      onChange={e => {
                        setStartDate(e.target.value)
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <label
                      style={{
                        color: '#363636',
                        display: 'block',
                        fontSize: '1rem',
                        fontWeight: 700,
                      }}
                    >
                      End
                    </label>
                    <TextField
                      name="end"
                      style={{
                        border: '1px solid transparent',
                        backgroundColor: 'white',
                        borderColor: '#dbdbdb',
                        borderRadius: '0',
                        color: '#363636',
                        borderBottom: 'none',
                      }}
                      type="datetime-local"
                      defaultValue={formatDateWithTimeStamp(
                        empty(AssignForm).end,
                      )}
                      onChange={e => {
                        setEndDate(e.target.value)
                      }}
                    />
                  </div>
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
