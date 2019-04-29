import { FormikConsumer } from 'formik'
import React from 'react'
import { jsonStringify } from 'utils'

export const DebugField: React.FC = () => (
  <FormikConsumer>
    {({ values }) => <pre>{jsonStringify(values)}</pre>}
  </FormikConsumer>
)
