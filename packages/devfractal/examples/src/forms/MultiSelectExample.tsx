import { CheckboxField, SelectField } from '@stp/forms'
import { Simple } from '@stp/simple'
import {
  Button,
  Column,
  Columns,
  Field,
  Label,
  Section,
  SubTitle,
  Title,
} from '@stp/ui'
import { Form, Formik } from 'formik'
import React from 'react'

type JobTypes = 'designer' | 'developer' | 'manager'

type Locations = 'NY' | 'SF' | 'CH' | 'OTHER'

type JobType = readonly JobTypes[]

type Location = readonly Locations[]

export interface FormValues {
  readonly isAwesome: false
  readonly terms: false
  readonly newsletter: false
  readonly jobType: JobType
  readonly location: Location
}

const initialValues: FormValues = {
  isAwesome: false,
  terms: false,
  newsletter: false,
  jobType: ['designer'],
  location: [],
}

export const MultiSelectExample: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormValues) => {
          setTimeout(() => {
            alert(JSON.stringify(values))
          }, 1000)
        }}
      >
        {({ values }) => {
          return (
            <Section>
              <Columns columnCentered>
                <Column size="three-fifths">
                  <Title>Checkboxes and MultiSelect Example</Title>
                  <SubTitle size="4">Basic Info</SubTitle>
                  <Form>
                    <CheckboxField name="isAwesome">
                      Are you awesome?
                    </CheckboxField>

                    <Label>What best describes you?</Label>
                    <CheckboxField name="jobType" value="developer">
                      Developer
                    </CheckboxField>
                    <CheckboxField name="jobType" value="designer">
                      Designer
                    </CheckboxField>
                    <CheckboxField name="jobType" value="manager">
                      Product Manager
                    </CheckboxField>
                    <Label>Where do you work?</Label>
                    <Field>
                      <SelectField name="location" multiple={true}>
                        <option value="NY">New York</option>
                        <option value="SF">San Francisco</option>
                        <option value="CH">Chicago</option>
                        <option value="OTHER">Other</option>
                      </SelectField>
                    </Field>
                    <div>
                      <CheckboxField name="terms">
                        I accept the terms and conditions
                      </CheckboxField>
                      {!!values.terms ? (
                        <>
                          <CheckboxField name="newsletter">
                            Send me newsletter
                          </CheckboxField>
                        </>
                      ) : // tslint:disable-next-line: no-null-keyword
                      null}
                    </div>

                    <Button type="submit" variant="info">
                      Submit
                    </Button>
                    <Simple.Debug />
                  </Form>
                </Column>
              </Columns>
            </Section>
          )
        }}
      </Formik>
    </>
  )
}
