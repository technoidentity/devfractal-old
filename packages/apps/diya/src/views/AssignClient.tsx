import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
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
import * as yup from 'yup'
import { useAuth } from '../auth/AuthContext'
import {
  AssignForm,
  ClientResponse,
  DriverListResponse,
  VehicleResponse,
} from '../common'
import { HeadTitle } from '../components'
import { getClient, getDriverList, getVehicleList } from '../pages'
import { formatDateWithTimeStamp } from '../reacttable/utils'

const schema = yup.object().shape({
  vehicleId: yup.string().required('this is a required field'),
  driverId: yup.string().required('this is a required field'),
  clientId: yup.string().required('this is required field'),
})

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
    const [endDate, setEndDate] = useState()
    const [startDate, setStartDate] = useState()
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
              validationSchema={schema}
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
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                      <KeyboardDateTimePicker
                        style={{
                          border: '1px solid transparent',
                          backgroundColor: 'white',
                          borderColor: '#dbdbdb',
                          borderRadius: '0',
                          color: '#363636',
                          borderBottom: 'none',
                        }}
                        defaultValue={formatDateWithTimeStamp(
                          empty(AssignForm).start,
                        )}
                        value={
                          startDate
                            ? startDate
                            : formatDateWithTimeStamp(empty(AssignForm).start)
                        }
                        onChange={e => {
                          setStartDate(e)
                        }}
                        format="dd/MM/yyyy hh:mm a"
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

                      <KeyboardDateTimePicker
                        style={{
                          border: '1px solid transparent',
                          backgroundColor: 'white',
                          borderColor: '#dbdbdb',
                          borderRadius: '0',
                          color: '#363636',
                          borderBottom: 'none',
                        }}
                        defaultValue={formatDateWithTimeStamp(
                          empty(AssignForm).end,
                        )}
                        value={
                          endDate
                            ? endDate
                            : formatDateWithTimeStamp(empty(AssignForm).end)
                        }
                        onChange={e => {
                          setEndDate(e)
                        }}
                        minDate={
                          startDate
                            ? startDate
                            : formatDateWithTimeStamp(empty(AssignForm).start)
                        }
                        format="dd/MM/yyyy hh:mm a"
                      />
                    </div>
                  </MuiPickersUtilsProvider>
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
