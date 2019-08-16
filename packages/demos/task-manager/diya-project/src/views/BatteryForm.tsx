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
import { empty } from 'technoidentity-utils'
import { Battery } from '../common'
import { HeadTitle } from '../components'
import { formProps } from '../crud'

const BatteryFormProps = formProps(Battery)

export const BatteryForm = component(
  BatteryFormProps,
  ({ onSubmit, initial = empty(Battery) }) => (
    <>
      <HeadTitle>Add or Update Battery</HeadTitle>

      <Section>
        <Title textAlignment="left" size="5" textColor="info">
          Battery Details
        </Title>

        <Simple.Form initialValues={initial} onSubmit={onSubmit}>
          <Columns>
            <Column>
              <Simple.Text name="batteryMake" validations={[required()]} />
              <Simple.Text name="batteryModel" validations={[required()]} />
              <Simple.Date name="lastCharged" />
            </Column>

            <Column>
              <Simple.Text name="capacity" validations={[required()]} />
              <Simple.Number name="batteryCycles" validations={[required()]} />
            </Column>

            <Column narrow>
              <Title size="6" textColor="info">
                Battery Photo
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

          <Simple.FormButtons alignment="centered" />
        </Simple.Form>
      </Section>
    </>
  ),
)
