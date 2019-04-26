import { FormikConsumer } from 'formik'
import React from 'react'
import { jsonStringify } from '../../lib'

export const DebugField: React.FC = () => (
  <FormikConsumer>
    {({ values }) => <pre>{jsonStringify(values)}</pre>}
  </FormikConsumer>
)
