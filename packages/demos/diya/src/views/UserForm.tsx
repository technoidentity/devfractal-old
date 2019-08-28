import React from 'react'
import {
  Box,
  Button,
  Column,
  Columns,
  formComponent,
  Image,
  Media,
  MediaContent,
  Radio,
  required,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { User } from '../common'
import { HeadTitle } from '../components'

// const validationSchema = yup.object().shape({
//   name: yup.string().required(),
//   driverId: yup.string().required(),
//   phone: yup.string().required(),
//   driverLicence: yup.string().required(),
//   adharNumber: yup.string().required(),
// })

export const UserForm = formComponent(User, ({ initial, edit, onSubmit }) => (
  <>
    <Section>
      <HeadTitle>{edit ? 'Edit' : 'Create'} User</HeadTitle>
    </Section>
    <Section>
      <Simple.Form initialValues={initial} onSubmit={onSubmit}>
        <Columns>
          <Column>
            <Title size="5" textColor="info">
              Personal Details
            </Title>
            <Simple.Text name="name" validations={[required()]} />
            {/* <Simple.Text
                name="driverID"
                label="Driver ID"
                validations={[required()]}
              /> */}
            <Simple.Telephone name="phone" validations={[required()]} />
            <Simple.Text
              name="licenceNo"
              label="Licence No."
              validations={[required()]}
            />
            <Simple.Text name="adharNumber" validations={[required()]} />

            <Simple.Select name="role">
              <option value="Admin">Admin</option>
              <option value="Reporter">Reporter</option>
              <option value="Dispatcher">Dispatcher</option>
            </Simple.Select>
            <Simple.Text name="address1" />
            <Simple.Text name="address2" />
          </Column>

          <Column>
            <Title size="5" textColor="info">
              Bank Details
            </Title>
            <Simple.Text name="accountName" validations={[required()]} />
            <Simple.Text name="accountNumber" validations={[required()]} />

            <Simple.Text
              name="confirmAccountNumber"
              validations={[required()]}
            />
            <Simple.Text name="bankName" validations={[required()]} />
            <Simple.Text name="bankBranch" validations={[required()]} />
            <Simple.Text
              name="branchIFSCNumber"
              label="Branch IFSC Number"
              validations={[required()]}
            />
            <Simple.RadioGroup name="verified" defaultValue="pending">
              <Radio value="yes">yes</Radio>
              <Radio value="pending">In process</Radio>
            </Simple.RadioGroup>
          </Column>

          <Column>
            <Title size="6" textColor="info">
              Profile Photo
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
            <div style={{ paddingTop: '10px' }}>
              <Simple.Text name="emergencyContactPerson" />
              <Simple.Text name="emergencyContactNumber" />
              <Simple.Select name="relation">
                <option value="">select</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="spouse">Spouse</option>
              </Simple.Select>
            </div>
          </Column>
        </Columns>

        <Simple.FormButtons alignment="centered" size="medium" />
      </Simple.Form>
    </Section>
  </>
))
