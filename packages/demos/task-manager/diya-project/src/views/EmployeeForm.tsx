import React from 'react'
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
import { Employee } from '../common'
import { formProps } from '../crud'

// const validationSchema = yup.object().shape({
//   name: yup.string().required(),
//   driverId: yup.string().required(),
//   phone: yup.string().required(),
//   driverLicence: yup.string().required(),
//   adharNuzmber: yup.string().required(),
// })

const EmployeeFormProps = formProps(Employee)

export const EmployeeForm = component(
  EmployeeFormProps,
  ({ initial = empty(Employee), onSubmit }) => (
    <>
      <Title size="4" textColor="info">
        Add Employee
      </Title>

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
              <Simple.Text name="adharNumber" validations={[required()]} />

              <Simple.Select name="Role">
                <option>Select</option>
                <option value="Reporter">Reporter</option>
                <option value="ClientDispatcher">ClientDispatcher</option>
              </Simple.Select>
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
            </Column>

            <Column narrow>
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
            </Column>
          </Columns>

          <Simple.FormButtons alignment="centered" size="medium" />
        </Simple.Form>
      </Section>
    </>
  ),
)
