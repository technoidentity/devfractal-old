import { FormikActions } from 'formik'
import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {
  Box,
  Button,
  Column,
  Columns,
  component,
  Image,
  Media,
  MediaContent,
  required,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { empty, fn, props } from 'technoidentity-utils'
import { HeadTitle, Vehicle } from '../common'

// tslint:disable-next-line: typedef
export function formProps<Spec extends Mixed>(spec: Spec) {
  return props(
    { initial: spec },
    {
      onSubmit: fn<
        (
          values: TypeOf<Spec>,
          actions: FormikActions<TypeOf<Spec>>,
        ) => Promise<void>
      >(),
    },
  )
}

const VehicleFormProps = formProps(Vehicle)

export type VehicleFormProps = TypeOf<typeof VehicleFormProps>

export const VehicleForm = component(
  VehicleFormProps,
  ({ onSubmit, initial = empty(Vehicle) }) => (
    <>
      <HeadTitle>Add Vehicle</HeadTitle>

      <Section>
        <Title textAlignment="left" size="5" textColor="info">
          Vehicle Details
        </Title>

        <Simple.Form initialValues={initial} onSubmit={onSubmit}>
          <Columns>
            <Column>
              <div>
                <Simple.Text
                  name="makersClass"
                  label="Maker's Class"
                  validations={[required()]}
                />

                <Simple.Text name="vehicleClass" validations={[required()]} />

                <Simple.Number
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

                <Simple.Number name="warranty" validations={[required()]} />

                <Simple.Date
                  name="lastServicedDate"
                  validations={[required()]}
                />
                <Simple.Date
                  name="insuranceExpiryDate"
                  validations={[required()]}
                />
              </div>
            </Column>

            <Column narrow>
              <Title size="6" textColor="info">
                Vehicle Photo
              </Title>

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

          <Simple.FormButtons alignment="centered" size="medium" />
        </Simple.Form>
      </Section>
    </>
  ),
)
