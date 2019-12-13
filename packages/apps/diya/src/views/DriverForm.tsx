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
  matches,
  Media,
  MediaContent,
  required,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import * as yup from 'yup'
import { useAuth } from '../auth/AuthContext'
import { DriverData } from '../common'
const driverLinks = links('drivers')

const schema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\d+$/, 'must be valid mobile number')
    .length(10, 'must be 10 digit mobile number')
    .required('this is a required field'),
  name: yup.string().required('this is a required field'),
  email: yup
    .string()
    .email('must be valid email')
    .required('this is a required field'),
  shift: yup.string().required(),
  relation: yup.string().required(),
  aadhaar: yup
    .string()
    .matches(/^\d+$/, 'must be valid aadhaar number')
    .length(12, 'must be 12 digit aadhaar number'),
  bankDetails: yup.object().shape({
    accountNumber: yup
      .string()
      .matches(/^\d+$/, 'must be valid account number')
      .required('this is a required field'),
  }),
  emergencyContactNumber: yup
    .string()
    .matches(/^\d+$/, 'must be valid mobile number')
    .length(10, 'must be 10 digit mobile number')
    .required('this is a required field'),
})

export const DriverForm = formComponent(
  DriverData,
  ({ initial, edit, onSubmit }) => {
    const { setHeaderText } = useAuth()
    if (edit) {
      setHeaderText('Update Driver')
    } else {
      setHeaderText('Create Driver')
    }
    return (
      <>
        <CreateLink alignment="right" variant="primary" to={driverLinks.list}>
          Back
        </CreateLink>
        <Section>
          <Simple.Form
            initialValues={{ ...initial, role: 'driver' }}
            onSubmit={onSubmit}
            validationSchema={schema}
          >
            <Columns>
              <Column>
                <Title size="5" textColor="info">
                  Personal Details
                </Title>
                <Simple.Text
                  name="name"
                  validations={[
                    matches(/^[a-zA-Z ]*$/, 'must take only alphabets'),
                  ]}
                />
                <Simple.Text name="phone" />
                <Simple.Text
                  name="license"
                  label="Licence No."
                  validations={[required()]}
                />
                <Simple.Text name="email" validations={[required()]} />
                <Simple.Text name="aadhaar" validations={[required()]} />
                <Simple.Select name="shift" fullWidth>
                  <option value="">Select Shift</option>
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
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
                  validations={[
                    matches(/^[a-zA-Z ]*$/, 'must take only alphabets'),
                    required(),
                  ]}
                />
                <Simple.Text
                  name="bankDetails.accountNumber"
                  label="Account Number"
                />

                <Simple.Text
                  name="bankDetails.name"
                  label="Bank Name"
                  validations={[
                    matches(/^[a-zA-Z ]*$/, 'must take only alphabets'),
                    required(),
                  ]}
                />
                <Simple.Text
                  name="bankDetails.branch"
                  label="Bank Branch"
                  validations={[
                    matches(/^[a-zA-Z ]*$/, 'must take only alphabets'),
                    required(),
                  ]}
                />
                <Simple.Text
                  name="bankDetails.ifscNumber"
                  label="Branch IFSC Number"
                  validations={[
                    matches(
                      /^[A-Za-z]{4}[0][\d]{6}$/,
                      'must be an 11-character code with the first four alphabetic characters representing the bank name, and the last six characters representing the branch. The fifth character is 0 (zero) and reserved for future use.',
                    ),
                  ]}
                />
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
                    validations={[
                      matches(/^[a-zA-Z ]*$/, 'must take only alphabets'),
                      required(),
                    ]}
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
    )
  },
)
