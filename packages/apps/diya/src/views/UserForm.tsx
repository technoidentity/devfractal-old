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
  // Radio,
  Media,
  MediaContent,
  required,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import * as yup from 'yup'
import { UserData } from '../common'
import { HeadTitle } from '../components'
const userLinks = links('users')
const schema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\d+$/, 'must be valid mobile number')
    .length(10, 'must be 10 digit mobile number')
    .required('this is a required field'),
  email: yup
    .string()
    .email('must be valid email')
    .required('this is a required field'),
  aadhaar: yup
    .string()
    .matches(/^\d+$/, 'must be valid aadhaar number')
    .length(12, 'must be 12 digit aadhaar number')
    .required('this is a required field'),
  bankDetails: yup.object().shape({
    accountNumber: yup
      .string()
      .matches(/\d/, 'must be valid account number')
      .required('this is a required field'),
  }),
  emergencyContactNumber: yup
    .string()
    .matches(/\d/, 'must be valid mobile number')
    .length(10, 'must be 10 digit mobile number')
    .required('this is a required field'),
})

export const UserForm = formComponent(
  UserData,
  ({ initial, edit, onSubmit }) => (
    <>
      <Section>
        <HeadTitle>{edit ? 'Edit' : 'Create'} User</HeadTitle>
      </Section>
      <CreateLink alignment="right" variant="primary" to={userLinks.list}>
        Back
      </CreateLink>
      <Section>
        <Simple.Form
          initialValues={initial}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          <Columns>
            <Column>
              <Title size="5" textColor="info">
                Personal Details
              </Title>
              <Simple.Text name="name" validations={[required()]} />
              <Simple.Text name="phone" />
              <Simple.Text
                name="license"
                label="Licence No."
                validations={[required()]}
              />
              <Simple.Text name="email" />
              <Simple.Text name="aadhaar" />

              <Simple.Select name="role" fullWidth>
                <option value="">Select Role</option>
                <option value="dispatcher">Dispatcher</option>
                <option value="reporter">Reporter</option>
                <option value="associate">Associate</option>
              </Simple.Select>
              <Simple.Text name="address1" validations={[required()]} />
              <Simple.Text name="address2" label="Address2(Optional)" />
            </Column>

            <Column>
              <Title size="5" textColor="info">
                Bank Details
              </Title>
              <Simple.Text
                name="bankDetails.accountName"
                label="Account Name"
                validations={[required()]}
              />
              <Simple.Text
                name="bankDetails.accountNumber"
                label="Account Number"
              />

              {/* <Simple.Text
              name="confirmAccountNumber"
              validations={[required()]}
            /> */}
              <Simple.Text
                name="bankDetails.name"
                label="Bank Name"
                validations={[required()]}
              />
              <Simple.Text
                name="bankDetails.branch"
                label="Bank Branch"
                validations={[required()]}
              />
              <Simple.Text
                name="bankDetails.ifscNumber"
                label="Branch IFSC Number"
                validations={[required()]}
              />
              {/* <Simple.RadioGroup name="verified" defaultValue="pending">
              <Radio value={true}> yes</Radio>
              <Radio value="pending"> In process</Radio>
            </Simple.RadioGroup> */}
              <Simple.Checkbox name="verified" />
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
                <Simple.Text
                  name="emergencyContactPerson"
                  validations={[required()]}
                />
                <Simple.Text name="emergencyContactNumber" />
                <Simple.Select name="relation" fullWidth>
                  <option value="">Select Relation</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="brother">Brother</option>
                  <option value="sister">Sister</option>
                  <option value="wife">Wife</option>
                  <option value="husband">Husband</option>
                  <option value="others">Others</option>
                </Simple.Select>
              </div>
            </Column>
          </Columns>
          <Simple.FormButtons submit={edit ? 'Update' : 'Save'} />
        </Simple.Form>
      </Section>
    </>
  ),
)
