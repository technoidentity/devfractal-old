import { FormikActions } from 'formik'
import { string, TypeOf } from 'io-ts'
import React from 'react'
import {
  Column,
  Columns,
  component,
  Section,
  Simple,
  DateField,
  Title,
} from 'technoidentity-devfractal'
import { empty, fn, req } from 'technoidentity-utils'
import { ISODate } from './VehicleForm'

const BatteryDetails = req({
  batteryId: string,
  batteryMake: string,
  batteryModel: string,
  capacity: string,
  batteryCycles: string,
  lastCharged: ISODate,
})

type BatteryDetails = TypeOf<typeof BatteryDetails>

const BatteryDetailsFormProps = req({
  onSubmit: fn<
    (values: BatteryDetails, actions: FormikActions<BatteryDetails>) => void
  >(),
})

export const BatteryDetailsForm = component(
  BatteryDetailsFormProps,
  ({ onSubmit }) => (
    <Section>
      <Title textAlignment="centered">Battery Details</Title>
      <Columns columnCentered>
        <Column size="half">
          <Simple.Form
            initialValues={empty(BatteryDetails)}
            onSubmit={onSubmit}
          >
            <Simple.Text name="batteryId" />
            <Simple.Text name="batteryMake" />
            <Simple.Text name="batteryModel" />
            <Simple.Text name="capacity" />
            <Simple.Text name="batteryCycles" />
            <DateField name="lastCharged" />
            <Simple.FormButtons />
          </Simple.Form>
        </Column>
      </Columns>
    </Section>
  ),
)
