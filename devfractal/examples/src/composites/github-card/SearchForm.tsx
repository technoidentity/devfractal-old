import { Form, Formik } from 'formik'
import React from 'react'
import { InputField } from 'technoidentity-devfractal-forms'
import { Button, Field } from 'technoidentity-devfractal-ui-core'

export interface SearchFormProps {
  onSearch(name: string): void
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={values => {
        onSearch(values.name)
      }}
    >
      {() => (
        <Form>
          <Field groupModifier="grouped-right">
            <InputField name="name" type="text" />
            <Button type="submit" variant="info">
              Search
            </Button>
          </Field>
        </Form>
      )}
    </Formik>
  )
}
