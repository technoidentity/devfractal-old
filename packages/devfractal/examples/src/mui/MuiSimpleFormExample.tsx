import { MenuItem } from '@material-ui/core'
import { addDays } from 'date-fns'
import React from 'react'
import {
  after,
  before,
  email,
  lowercase,
  maxLength,
  minLength,
  positive,
  required,
  uppercase,
} from 'technoidentity-core'
import { RadioItem, typedForm } from 'technoidentity-mui'
import { ISODate } from 'technoidentity-utils'

interface SimpleValues {
  readonly username: string
  readonly password: string
  readonly email: string
  readonly age: number
  readonly phone: number
  readonly privileges: boolean
  readonly gender: string
  readonly job: string
  readonly date: ISODate | undefined
}

const initialValues: SimpleValues = {
  username: '',
  password: '',
  email: '',
  age: 0,
  phone: 0,
  privileges: false,
  gender: '',
  date: new Date(),
  job: '',
}

export const MuiSimpleFormExample: React.FC = () => {
  // tslint:disable-next-line:typedef
  const Simple = typedForm<typeof initialValues>()

  return (
    <Simple.Form initialValues={initialValues}>
      <Simple.Text
        name="username"
        required
        validations={[minLength(6), maxLength(15), lowercase()]}
      />
      <br />
      <Simple.Password
        label="Password"
        name="password"
        required
        validations={[minLength(6), uppercase()]}
      />
      <br />
      <Simple.Email
        label="Email"
        name="email"
        required
        validations={[email()]}
      />
      <br />
      <Simple.Telephone
        label="Telephone"
        name="phone"
        required
        validations={[positive()]}
      />
      <br />
      <Simple.Date
        name="date"
        validations={[
          required(),
          after(new Date()),
          before(addDays(new Date(), 10)),
        ]}
      />
      <br />
      <Simple.Checkbox name="privileges">
        Access to all privileges
      </Simple.Checkbox>

      <br />
      <Simple.Select name="job" style={{ minWidth: 120 }}>
        <MenuItem value="associate">Associate</MenuItem>
        <MenuItem value="assistant">Assistant</MenuItem>
      </Simple.Select>
      <br />
      <Simple.RadioGroup name="gender" defaultValue="female">
        <RadioItem value="female" label="Female" />
        <RadioItem value="male" label="Male" />
      </Simple.RadioGroup>
      <br />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  )
}
