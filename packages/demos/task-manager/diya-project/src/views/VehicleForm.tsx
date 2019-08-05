import { FormikActions } from 'formik'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
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
import { empty, fn, props } from 'technoidentity-utils'
import { Vehicle } from '../common'

const VehicleFormProps = props(
  {
    initial: Vehicle,
  },
  {
    onSubmit: fn<
      (values: Vehicle, actions: FormikActions<Vehicle>) => Promise<void>
    >(),
  },
)

const initialValues = empty(Vehicle)

export const VehicleForm = component(
  VehicleFormProps,
  ({ onSubmit, initial }) => (
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
        <Simple.Form
          initialValues={initial || initialValues}
          onSubmit={onSubmit}
        >
          <Columns>
            <Column>
              <div>
                <Simple.Text
                  name="vehicleID"
                  label="Vehicle ID"
                  validations={[required()]}
                />
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
                <DateField
                  name="lastServicedDate"
                  label="Last service date"
                  validations={[required()]}
                />
                <DateField
                  name="insuranceExpiryDate"
                  label="Insurance expiry date"
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
