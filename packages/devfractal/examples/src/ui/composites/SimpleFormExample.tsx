// import { maxLength, min, required } from 'srtp-ui'

import { addDays } from 'date-fns'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {
  after,
  before,
  email,
  integer,
  lowercase,
  max,
  maxLength,
  min,
  minLength,
  positive,
  required,
  uppercase,
} from 'srtp-core'
import { Radio, Section, typedForm } from 'srtp-ui'
import { ISODate, keyof, TypeOf } from 'srtp-utils'

// tslint:disable-next-line: typedef
const Position = keyof({
  associate: true,
  assistant: true,
})

type Position = TypeOf<typeof Position>

// tslint:disable-next-line: typedef
const Gender = keyof({
  female: true,
  male: true,
})

type Gender = TypeOf<typeof Gender>

interface SimpleValues {
  readonly username: string
  readonly password: string
  readonly email: string
  readonly tel: number
  readonly date: ISODate | undefined
  readonly remember: boolean
  readonly gender: Gender
  readonly select: Position
  readonly multiSelect: readonly string[]
  readonly multiCheck: readonly string[]
  readonly message: string
  readonly age: number
}

const initialValues: SimpleValues = {
  username: '',
  password: '',
  email: '',
  date: undefined,
  tel: 0,
  remember: false,
  gender: 'male',
  select: 'assistant',
  multiSelect: [],
  multiCheck: ['foo'],
  message: '',
  age: 0,
}

// const simpleSchema: ObjectSchema<Partial<SimpleValues>> = object({
//   username: string()
//     .required()
//     .min(6),
//   password: string()
//     .required()
//     .min(6),
//   email: string()
//     .email()
//     .required(),
//   tel: number().required(),
//   message: string().required(),
//   age: number().required(),
// })

export const SimpleFormExample: React.FC = () => {
  // tslint:disable-next-line: typedef
  const Simple = typedForm<typeof initialValues>()

  return (
    <Section>
      <Simple.Form initialValues={initialValues}>
        <Simple.Text
          label="Username"
          name="username"
          validations={[required(), minLength(6), maxLength(15), lowercase()]}
        />
        <Simple.Password
          label="Password"
          name="password"
          validations={[required(), minLength(6), uppercase()]}
        />
        <Simple.Email
          label="Email"
          name="email"
          validations={[required(), email()]}
        />
        <Simple.Telephone
          label="Telephone"
          name="tel"
          validations={[required(), positive()]}
        />
        <Simple.Date
          name="date"
          validations={[
            required(),
            after(new Date()),
            before(addDays(new Date(), 10)),
          ]}
        />
        <Simple.Checkbox name="remember"> Remember Me</Simple.Checkbox>
        <Simple.RadioGroup name="gender" defaultValue="female">
          <Radio value="female"> Female</Radio>
          <Radio value="male"> Male</Radio>
        </Simple.RadioGroup>

        <Simple.MultiCheckbox name="multiCheck">
          <Simple.CheckboxItem value="foo"> Foo</Simple.CheckboxItem>
          <Simple.CheckboxItem value="bar"> Bar</Simple.CheckboxItem>
        </Simple.MultiCheckbox>

        <Simple.Select name="select">
          <option value="associate">associate</option>
          <option value="assistant">assistant</option>
        </Simple.Select>

        <Simple.MultiSelect name="multiSelect">
          <option value="associate">associate</option>
          <option value="assistant">assistant</option>
          <option value="manager">manager</option>
          <option value="hr">human resources</option>
        </Simple.MultiSelect>

        <Simple.Number
          label="Age"
          name="age"
          validations={[required(), min(15), max(58), integer()]}
        />

        <Simple.TextArea
          label="TextArea"
          name="message"
          validations={[required()]}
        />
        <Simple.FormButtons />
        <Simple.Debug />
      </Simple.Form>
    </Section>
  )
}
