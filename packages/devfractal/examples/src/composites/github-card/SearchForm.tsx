import { InputField } from '@stp/ui'
import { Button, Field } from '@stp/ui'
import { Form, Formik } from 'formik'
import React from 'react'

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
