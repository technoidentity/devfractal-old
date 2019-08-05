import { FormikActions } from 'formik'
import { number, string, TypeOf } from 'io-ts'
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
  Navbar,
  NavbarBrand,
  NavbarItem,
  required,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { empty, fn, ISODate, req } from 'technoidentity-utils'

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

export const AddVehicleForm = component(
  VehicleDetailsFormProps,
  ({ onSubmit }) => (
    <>
      <Navbar textBackgroundColor="light">
        <NavbarBrand>
          <NavbarItem>
            <Title size="4" textColor="info">
              Add Vehicle
            </Title>
          </NavbarItem>
        </NavbarBrand>
      </Navbar>
      <Section>
        <Title textAlignment="left" size="5" textColor="info">
          Vehicle Details
        </Title>
        <Simple.Form initialValues={empty(VehicleDetails)} onSubmit={onSubmit}>
          <Columns>
            <Column>
              <div>
                <Simple.Text name="vehicleId" validations={[required()]} />
                <Simple.Text
                  name="makersClass"
                  label="Maker's Class"
                  validations={[required()]}
                />
                <Simple.Text name="vehicleClass" validations={[required()]} />
                <Simple.Text
                  name="yearOfManufacturing"
                  validations={[required()]}
                />
                <Simple.Text name="color" validations={[required()]} />
              </div>
            </Column>
            <Column>
              <div>
                <Simple.Text
                  name="regnNumber"
                  label="Regn. Number"
                  validations={[required()]}
                />
                <Simple.Text name="warranty" validations={[required()]} />
                <DateField name="lastServicedDate" validations={[required()]} />
                <DateField
                  name="insuranceExpiryDate"
                  validations={[required()]}
                />
              </div>
            </Column>
            <Column narrow>
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
    </>
  ),
)
