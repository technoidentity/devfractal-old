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
import { Battery } from '../common'

const BatteryFormProps = props(
  {
    initial: Battery,
  },
  {
    onSubmit: fn<
      (values: Battery, actions: FormikActions<Battery>) => Promise<void>
    >(),
  },
)

const initialValues = empty(Battery)

export const BatteryForm = component(
  BatteryFormProps,
  ({ onSubmit, initial }) => (
    <>
      <Navbar textBackgroundColor="light">
        <NavbarBrand>
          <NavbarItem>
            <Title size="4" textColor="info">
              Add Battery
            </Title>
          </NavbarItem>
        </NavbarBrand>
      </Navbar>
      <Section>
        <Title textAlignment="left" size="5" textColor="info">
          Battery Details
        </Title>
        <Simple.Form
          initialValues={initial || initialValues}
          onSubmit={onSubmit}
        >
          <Columns>
            <Column>
              <Simple.Text
                name="batteryID"
                label="Battery ID"
                validations={[required()]}
              />
              <Simple.Text name="batteryMake" validations={[required()]} />
              <Simple.Text name="batteryModel" validations={[required()]} />
            </Column>
            <Column>
              <Simple.Text name="capacity" validations={[required()]} />
              <Simple.Text name="batteryCycles" validations={[required()]} />
              <DateField
                name="lastCharged"
                label="Last charged"
                validations={[required()]}
              />
            </Column>
            <Column narrow>
              <Title size="6">Battery Photo</Title>
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
