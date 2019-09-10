import React from 'react'
import {
  Column,
  Columns,
  component,
  Create,
  formProps,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
import { AssignVehicle, assignVehicleAPI } from '../common'
import { HeadTitle } from '../components'

const AssignVehicleFormProps = formProps(AssignVehicle)

export const AssignVehicleForm = component(
  AssignVehicleFormProps,
  ({ onSubmit, initial = empty(AssignVehicle) }) => (
    <>
      <Section>
        <HeadTitle>Assign </HeadTitle>
        <Simple.Form initialValues={initial} onSubmit={onSubmit}>
          <Columns>
            <Column>
              <Simple.Text name="client" />
              <Simple.Text name="batteryID" label="Battery ID" />
              <Simple.Text name="driver" />
            </Column>
            <Column>
              <Simple.Date name="startDate" />
              <Simple.Date name="endDate" />
              <Simple.Select name="contractType">
                <option value="">Select</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </Simple.Select>
            </Column>
          </Columns>
          <Simple.FormButtons />
        </Simple.Form>
      </Section>
    </>
  ),
)

export const AssignVehicleRoute = () => (
  <Create
    api={assignVehicleAPI}
    form={AssignVehicleForm}
    path="/assignVehicle/:id"
    redirectTo="/vehicles"
  />
)
