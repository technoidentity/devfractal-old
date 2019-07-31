import { FormikActions } from 'formik'
import { intersection, keyof, number, string, TypeOf } from 'io-ts'
import React from 'react'
import {
  Column,
  Columns,
  component,
  Label,
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

export const DriverPersonalForm = component(
  DriverPersonalFormProps,
  ({ onSubmit }) => (
    <Simple.Form initialValues={empty(DriverDetails)} onSubmit={onSubmit}>
      <Columns>
        <Column>
          <Title>Personal Details</Title>
          <Simple.Text name="name" />
          <Simple.Text name="driverId" />
          <Simple.Text name="phone" />
          <Simple.Text name="driverLicence" />
          <Simple.Text name="adharNumber" />
          <Label>Shift</Label>
          <Simple.Select name="shift">
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </Simple.Select>
        </Column>
        <Column>
          <Title>Bank Details</Title>
          <Simple.Text name="accountName" />
          <Simple.Text name="accountNumber" />
          <Simple.Text name="reEnterAccountNumber" />
          <Simple.Text name="bankName" />
          <Simple.Text name="bankBranch" />
          <Simple.Text name="branchIfscNumber" label="Branch IFSC Number" />
        </Column>
      </Columns>
      <Simple.FormButtons />
    </Simple.Form>
  ),
)
