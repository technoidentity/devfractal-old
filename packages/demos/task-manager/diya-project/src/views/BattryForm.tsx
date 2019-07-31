import { FormikActions } from 'formik'
import { number, string, TypeOf } from 'io-ts'
import React from 'react'
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
import { ISODate } from './VehicleForm'

const BatteryDetails = req({
  batteryId: string,
  batteryMake: string,
  batteryModel: string,
  capacity: string,
  batteryCycles: number,
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
      <Simple.Form initialValues={empty(BatteryDetails)} onSubmit={onSubmit}>
        <Columns columnCentered>
          <Column size="half">
            <Simple.Text name="batteryId" />
            <Simple.Text name="batteryMake" />
            <Simple.Text name="batteryModel" />
          </Column>
          <Column>
            <Simple.Text name="capacity" />
            <Simple.Text name="batteryCycles" />
            <DateField name="lastCharged" />
          </Column>
          <Column>
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
  ),
)
