// import { maxLength, min, required } from 'devfractal-forms'
import { before, email, minLength, required } from 'devfractal-forms'
import { Simple } from 'devfractal-simple'
import { Radio, Section } from 'devfractal-ui-core'
import { keyof, TypeOf } from 'io-ts'
import React from 'react'
import { ISODate } from 'technoidentity-utils'

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
  readonly message: string
  readonly age: number
  readonly time: string
}

const initialValues: SimpleValues = {
  username: '',
  password: '',
  email: '',
  time: '',
  date: undefined,
  tel: 0,
  remember: false,
  gender: 'male',
  select: 'assistant',
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

export const SimpleFormExample: React.FC = () => (
  <Section>
    <Simple.Form initialValues={initialValues}>
      <Simple.Text
        label="Username"
        name="username"
        validations={[required(), minLength(6)]}
      />
      <Simple.Password
        label="Password"
        name="password"
        validations={[required(), minLength(6)]}
      />
      <Simple.Email
        label="Email"
        name="email"
        validations={[required(), email()]}
      />
      <Simple.Telephone
        label="Telephone"
        name="tel"
        validations={[required()]}
      />
      <Simple.Date
        name="dateOfBirth"
        validations={[required(), before(new Date())]}
      />
      <Simple.Checkbox name="remember"> Remember Me</Simple.Checkbox>
      <Simple.RadioGroup name="gender" defaultValue="female">
        <Radio value="female"> Female</Radio>
        <Radio value="male"> Male</Radio>
      </Simple.RadioGroup>
      <Simple.Select name="position">
        <option value="associate">associate</option>
        <option value="assistant">assistant</option>
      </Simple.Select>
      <Simple.Cleave
        options={{ time: true, timePattern: ['h', 'm'] }}
        name="time"
      />
      <Simple.Number label="Age" name="age" validations={[required()]} />
      <Simple.TextArea label="TextArea" name="message" />

      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
