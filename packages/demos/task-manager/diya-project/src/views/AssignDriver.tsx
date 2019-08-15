import { FormikActions } from 'formik'
import { keyof, string, TypeOf } from 'io-ts'
import React from 'react'
import {
  Column,
  Columns,
  component,
  Label,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { empty, fn, req } from 'technoidentity-utils'

const VehicleNumbers = keyof({ number1: true, number2: true })

const AssignDriverDetails = req({
  vehicleNumber: VehicleNumbers,
  batteryId: string,
  client: string,
})

type AssignDriverDetails = TypeOf<typeof AssignDriverDetails>

const AssignDriverFormProps = req({
  onSubmit: fn<
    (
      values: AssignDriverDetails,
      actions: FormikActions<typeof AssignDriverDetails>,
    ) => void
  >(),
})

export const AssignDriverForm = component(
  AssignDriverFormProps,
  ({ onSubmit }) => (
    <Section>
      <Columns columnCentered>
        <Column size="half">
          <Title size="5">Assign</Title>
          <Simple.Form
            initialValues={empty(AssignDriverDetails)}
            onSubmit={onSubmit}
          >
            <Label>Vehicle Number</Label>

            <Simple.Select name="vehicleNumber">
              <option value="number1">TSO1A0428</option>
              <option value="number2">TSO1A0429</option>
            </Simple.Select>

            <Simple.Text name="batteryId" />
            <Simple.Text name="client" />

            <Simple.FormButtons />
          </Simple.Form>
        </Column>
      </Columns>
    </Section>
  ),
)
