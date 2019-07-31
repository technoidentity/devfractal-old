import { FormikActions } from 'formik'
import { number, string, TypeOf, union } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import React from 'react'
import {
  Column,
  Columns,
  component,
  DateField,
  Label,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { empty, fn, req } from 'technoidentity-utils'

export const ISODate = union([date, DateFromISOString])

const VehicleDetails = req({
  vehicleId: string,
  makersClass: string,
  vehicleClass: string,
  yearOfManufacturing: number,
  color: string,
  regnNumber: string,
  warranty: number,
  lastServicedDate: ISODate,
  insuranceExpiryDate: ISODate,
})

type VehicleDetails = TypeOf<typeof VehicleDetails>

const VehicleDetailsFormProps = req({
  onSubmit: fn<
    (values: VehicleDetails, actions: FormikActions<VehicleDetails>) => void
  >(),
})

export const VehicleDetailsForm = component(
  VehicleDetailsFormProps,
  ({ onSubmit }) => (
    <Columns columnCentered>
      <Column size="half">
        <Title>Vehicle Details</Title>
        <Simple.Form initialValues={empty(VehicleDetails)} onSubmit={onSubmit}>
          <Simple.Text name="vehicleId" />
          <Simple.Text name="makersClass" label="Maker's Class" />
          <Simple.Text name="vehicleClass" />
          <Simple.Text name="yearOfManufacturing" />
          <Simple.Text name="color" />

          <Simple.Text name="regnNumber" label="Regn. Number" />
          <Simple.Text name="warranty" />
          <Label>Last Serviced Date</Label>
          <DateField name="lastServicedDate" />
          <Label>Insurance Expiry Date</Label>
          <DateField name="insuranceExpiryDate" />
          <Simple.FormButtons />
        </Simple.Form>
      </Column>
    </Columns>
  ),
)
