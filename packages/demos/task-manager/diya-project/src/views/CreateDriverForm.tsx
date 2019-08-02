import { FormikActions } from 'formik'
import { intersection, keyof, number, string, TypeOf } from 'io-ts'
import React from 'react'
import {
  Box,
  Button,
  Column,
  Columns,
  component,
  Image,
  Label,
  Media,
  MediaContent,
  required,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { empty, fn, req } from 'technoidentity-utils'

const shift = keyof({
  morning: true,
  evening: true,
})

const DriverPersonalDetails = req({
  name: string,
  driverId: string,
  phone: string,
  driverLicence: string,
  adharNumber: string,
  shift,
})

// @Todo: Remove re-enter account number

const DriverBankDetails = req({
  accountName: string,
  accountNumber: number,
  reEnterAccountNumber: number,
  bankName: string,
  bankBranch: string,
  branchIfscNumber: string,
})

type DriverPersonalDetails = TypeOf<typeof DriverPersonalDetails>

type DriverBankDetails = TypeOf<typeof DriverBankDetails>

const DriverDetails = intersection([DriverPersonalDetails, DriverBankDetails])

// const validationSchema = yup.object().shape({
//   name: yup.string().required(),
//   driverId: yup.string().required(),
//   phone: yup.string().required(),
//   driverLicence: yup.string().required(),
//   adharNumber: yup.string().required(),
// })

const DriverPersonalFormProps = req({
  onSubmit: fn<
    (
      values: DriverPersonalDetails,
      actions: FormikActions<DriverPersonalDetails>,
    ) => void
  >(),
})

export const CreateDriverForm = component(
  DriverPersonalFormProps,
  ({ onSubmit }) => (
    <Section>
      <Simple.Form initialValues={empty(DriverDetails)} onSubmit={onSubmit}>
        <Columns>
          <Column>
            <Title>Personal Details</Title>
            <Simple.Text name="name" validations={[required()]} />
            <Simple.Text name="driverId" validations={[required()]} />
            <Simple.Telephone name="phone" validations={[required()]} />
            <Simple.Text name="driverLicence" validations={[required()]} />
            <Simple.Text name="adharNumber" validations={[required()]} />
            <Label>Shift</Label>
            <Simple.Select name="shift">
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
            </Simple.Select>
          </Column>
          <Column>
            <Title>Bank Details</Title>
            <Simple.Text name="accountName" validations={[required()]} />
            <Simple.Text name="accountNumber" validations={[required()]} />
            <Simple.Text
              name="reEnterAccountNumber"
              validations={[required()]}
            />
            <Simple.Text name="bankName" validations={[required()]} />
            <Simple.Text name="bankBranch" validations={[required()]} />
            <Simple.Text
              name="branchIfscNumber"
              label="Branch IFSC Number"
              validations={[required()]}
            />
          </Column>
          <Column>
            <Title size="6">Profile Photo</Title>
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
