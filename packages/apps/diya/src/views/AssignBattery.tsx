import React from 'react'
import {
  component,
  Create,
  formProps,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
import { AssignBattery, assignBatteryAPI } from '../common'
import { HeadTitle } from '../components'

const AssignBatteryProps = formProps(AssignBattery)

export const AssignBatteryForm = component(
  AssignBatteryProps,
  ({ onSubmit, initial = empty(AssignBattery) }) => (
    <>
      <Section>
        <HeadTitle>Assign</HeadTitle>
        <Simple.Form initialValues={initial} onSubmit={onSubmit}>
          <Simple.Text label="Client" name="client" />
          <Simple.Text name="vehicleID" label="Vehicle" />
          <Simple.Text label="Driver" name="driver" />
          <Simple.FormButtons submit={'Assign'} />
        </Simple.Form>
      </Section>
    </>
  ),
)

export const AssignBatteryRoute = () => (
  <Create
    api={assignBatteryAPI}
    form={AssignBatteryForm}
    path="/assignBattery/:id"
    redirectTo="/batteries"
  />
)
