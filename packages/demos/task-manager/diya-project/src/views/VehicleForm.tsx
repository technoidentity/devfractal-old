import { FormikActions } from 'formik'
import { number, string, TypeOf, union } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import React from 'react'
// import 'react-datepicker/dist/react-datepicker.css'
import {
  Box,
  Button,
  Column,
  Columns,
  component,
  DateField,
  Image,
  Media,
  MediaContent,
  Section,
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
    <Section>
      <Title textAlignment="centered">Vehicle Details</Title>
      <Simple.Form initialValues={empty(VehicleDetails)} onSubmit={onSubmit}>
        <Columns columnCentered>
          <Column size="half">
            <div>
              <Simple.Text name="vehicleId" />
              <Simple.Text name="makersClass" label="Maker's Class" />
              <Simple.Text name="vehicleClass" />
              <Simple.Text name="yearOfManufacturing" />
              <Simple.Text name="color" />
            </div>
          </Column>
          <Column>
            <div>
              <Simple.Text name="regnNumber" label="Regn. Number" />
              <Simple.Text name="warranty" />
              <DateField name="lastServicedDate" />
              <DateField name="insuranceExpiryDate" />
            </div>
          </Column>
          <Column>
            <Title size="6">Vehicle Photo</Title>
            <Box>
              <Media>
                <MediaContent>
                  <Image
                    size="128x128"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </MediaContent>
              </Media>
            </Box>
            <Button variant="dark">Upload Photo</Button>
          </Column>
        </Columns>
        <Simple.FormButtons />
      </Simple.Form>
    </Section>
  ),
)
