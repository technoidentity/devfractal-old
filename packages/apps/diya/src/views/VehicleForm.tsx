import React from 'react'
import {
  Box,
  Button,
  Column,
  Columns,
  CreateLink,
  formComponent,
  Image,
  links,
  Media,
  MediaContent,
  required,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import * as yup from 'yup'
import { useAuth } from '../auth/AuthContext'
import { VehicleAdd } from '../common'

const vehicleLinks = links('vehicles')

const schema = yup.object().shape({
  manufactureYear: yup.date().required(),
  warrantyExpiry: yup
    .date()
    .required()
    .min(
      yup.ref('manufactureYear'),
      'warrantyExpiry must be later than manufacture year',
    ),
  lastService: yup
    .date()
    .required()
    .min(
      yup.ref('manufactureYear'),
      'lastService must be later than manufacture year',
    ),
  insuranceExpiry: yup
    .date()
    .required()
    .min(
      yup.ref('manufactureYear'),
      'insuranceExpiry must be later than manufacture year',
    ),
})

export const VehicleForm = formComponent(
  VehicleAdd,
  ({ onSubmit, initial, edit }) => {
    const { setHeaderText } = useAuth()
    if (edit) {
      setHeaderText('Update Vehicle')
    } else {
      setHeaderText('Create Vehicle')
    }
    return (
      <>
        <CreateLink alignment="right" variant="primary" to={vehicleLinks.list}>
          Back
        </CreateLink>
        <Section>
          <Title textAlignment="left" size="5" textColor="info">
            Vehicle Details
          </Title>

          <Simple.Form
            initialValues={initial}
            onSubmit={onSubmit}
            validationSchema={schema}
          >
            <Columns>
              <Column>
                <div>
                  {edit ? (
                    <Simple.Text name="vehicleName" disabled />
                  ) : (
                    <p>{}</p>
                  )}
                  <Simple.Text
                    name="vehicleSerialNum"
                    label="Vehicle Serial Number"
                    validations={[required()]}
                  />
                  <Simple.Text
                    name="makersClass"
                    label="Maker's Class"
                    validations={[required()]}
                  />

                  <Simple.Text name="vehicleClass" validations={[required()]} />

                  <Simple.Date
                    name="manufactureYear"
                    label="Manufacture Year"
                    dateFormat="dd/MM/yyyy"
                    validations={[required()]}
                  />
                  <Simple.Text
                    name="color"
                    label="Colour"
                    validations={[required()]}
                  />
                </div>
              </Column>

              <Column>
                <div>
                  <Simple.Text
                    name="registrationNumber"
                    label="Regn. Number"
                    validations={[required()]}
                  />

                  <Simple.Date
                    name="warrantyExpiry"
                    dateFormat="dd/MM/yyyy"
                    validations={[required()]}
                  />

                  <Simple.Date
                    name="lastService"
                    label="Last Service"
                    dateFormat="dd/MM/yyyy"
                    validations={[required()]}
                  />
                  <Simple.Date
                    name="insuranceExpiry"
                    validations={[required()]}
                    dateFormat="dd/MM/yyyy"
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
                {edit ? (
                  <Simple.Select name="status">
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                  </Simple.Select>
                ) : (
                  <p>{}</p>
                )}
              </Column>
            </Columns>

            <Simple.FormButtons submit={edit ? 'Update' : 'Save'} />
          </Simple.Form>
        </Section>
      </>
    )
  },
)
