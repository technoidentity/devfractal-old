import { FormikConsumer } from 'formik'
import React from 'react'
import { jsonStringify } from 'technoidentity-utils'

export interface DebugFieldProps {
  readonly includeTouched?: boolean
  readonly includeErrors?: boolean
}
export const DebugField: React.FC<DebugFieldProps> = ({
  includeErrors,
  includeTouched,
}) => (
  <FormikConsumer>
    {({ values, touched, errors }) => (
      <>
        {(includeErrors || includeTouched) && <strong>Values</strong>}
        <pre>{jsonStringify(values)}</pre>
        {includeErrors && (
          <>
            <strong>Errors</strong>
            <pre>{jsonStringify(errors)}</pre>
          </>
        )}
        {includeTouched && (
          <>
            <strong>Touched</strong>
            <pre>{jsonStringify(touched)}</pre>
          </>
        )}
      </>
    )}
  </FormikConsumer>
)
