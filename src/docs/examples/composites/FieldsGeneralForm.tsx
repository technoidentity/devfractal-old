import { Form, Formik, FormikProps } from 'formik'
import React from 'react'
import { boolean, object, ObjectSchema, string } from 'yup'
import { logger } from '../common'
import {
  Button,
  CheckboxField,
  Container,
  ErrorField,
  Field,
  InputField,
  Label,
  Radio,
  RadioGroupField,
  Section,
  SelectField,
  Simple,
  TextAreaField,
} from '../devfractal'

interface GeneralFormProps {
  readonly name: string
  readonly username: string
  readonly email: string
  readonly agree: boolean
  readonly select: string
  readonly message: string
  readonly radio: string
}

const InnerFieldsGeneralForm: React.FunctionComponent<
  FormikProps<GeneralFormProps>
> = () => {
  return (
    <Section>
      <Container>
        <Form>
          <Field>
            <Label>Name</Label>
            <InputField type="text" name="name" placeholder="Input Text" />
            <ErrorField name="name" />
          </Field>
          <Field>
            <Label>Username</Label>
            <InputField type="text" name="username" placeholder="Input Text" />
            <ErrorField name="username" />
          </Field>

          <Field>
            <Label>Email</Label>
            <InputField type="email" name="email" placeholder="Email Input" />
            <ErrorField name="email" />
          </Field>

          <Field>
            <Label>Subject</Label>
            <SelectField name="select">
              <option value="dropdown">Select dropdown</option>
              <option value="options">With options</option>
            </SelectField>
          </Field>

          <Field>
            <Label>Message</Label>
            <TextAreaField placeholder="Textarea" name="message" rows={4} />
            <ErrorField name="message" />
          </Field>

          <Field>
            <CheckboxField name="agree">
              {' '}
              I agree to the
              <a href="#"> terms and conditions</a>
            </CheckboxField>
            <ErrorField name="agree" />
          </Field>

          <Field grouped>
            <RadioGroupField name="radio" defaultValue="yes">
              <Radio value="yes"> Yes</Radio>
              <Radio value="no"> No </Radio>
            </RadioGroupField>
          </Field>

          <Field groupModifier="grouped-centered">
            <Button type="submit" variant="info">
              Submit
            </Button>

            <Button type="reset" variant="danger">
              Reset
            </Button>
          </Field>
          <Simple.Debug />
        </Form>
      </Container>
    </Section>
  )
}

export const initialValues: GeneralFormProps = {
  name: '',
  username: '',
  email: '',
  select: '',
  message: '',
  agree: false,
  radio: '',
}

const validationSchema: ObjectSchema<GeneralFormProps> = object({
  name: string().required('This field is required'),
  username: string().required('This field is required'),
  email: string()
    .email()
    .required('This field is required'),
  select: string().required('This field is required'),
  message: string().required('This field is required'),
  agree: boolean().required('This field is required'),
  radio: string().required('This field is required'),
})

export const FieldsGeneralForm: () => JSX.Element = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    render={InnerFieldsGeneralForm}
    onSubmit={values => {
      logger(values)
    }}
  />
)
