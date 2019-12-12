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
  positive,
  required,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import * as yup from 'yup'
import { useAuth } from '../auth/AuthContext'
import { BatteryAdd } from '../common'

const batteryLinks = links('batteries')

const schema = yup.object().shape({
  cycles: yup
    .number()
    .required('this is a required field')
    .nullable(),
})

export const BatteryForm = formComponent(
  BatteryAdd,
  ({ onSubmit, edit, initial }) => {
    const { setHeaderText } = useAuth()
    if (edit) {
      setHeaderText('Update Battery')
    } else {
      setHeaderText('Create Battery')
    }
    return (
      <>
        <CreateLink alignment="right" variant="primary" to={batteryLinks.list}>
          Back
        </CreateLink>
        <Section>
          <Title textAlignment="left" size="5" textColor="info">
            Battery Details
          </Title>

          <Simple.Form
            initialValues={initial}
            onSubmit={onSubmit}
            validationSchema={schema}
          >
            <Columns>
              <Column>
                <Simple.Text
                  label="Battery Make"
                  name="make"
                  validations={[required()]}
                />
                <Simple.Text
                  label="Battery Model"
                  name="model"
                  validations={[required()]}
                />
                <Simple.Date
                  dateFormat="dd/MM/yyyy"
                  label="Last Charged"
                  name="lastCharged"
                />
              </Column>

              <Column>
                <Simple.Text
                  label="Capacity"
                  name="capacity"
                  validations={[required()]}
                />
                <Simple.Number
                  label="Battery Cycles"
                  name="cycles"
                  validations={[positive()]}
                />
                <Simple.Date
                  dateFormat="dd/MM/yyyy"
                  label="Waranty Valid UpTo"
                  name="warrantyUpto"
                />
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

            <Simple.FormButtons submit={edit ? 'Update' : 'Save'} />
          </Simple.Form>
        </Section>
      </>
    )
  },
)
