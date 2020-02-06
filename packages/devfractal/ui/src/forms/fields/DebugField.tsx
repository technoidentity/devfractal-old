import { jsonStringify } from '@stp/utils'
import { FormikConsumer } from 'formik'
import React from 'react'

export const DebugField: React.FC = () => (
  <FormikConsumer>
    {({ values }) => <pre>{jsonStringify(values)}</pre>}
  </FormikConsumer>
)
