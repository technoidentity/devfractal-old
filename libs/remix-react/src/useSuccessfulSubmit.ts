import { useNavigation } from '@remix-run/react'
import { isNil } from '@df/spec'
import React from 'react'
import { useFormContext } from './FormContext'

export const useSuccessfulSubmit = () => {
  const { serverErrors } = useFormContext()
  const [success, set] = React.useState(false)
  const navigate = useNavigation()

  React.useEffect(() => {
    if (
      navigate.state === 'loading' &&
      Object.keys(serverErrors?.fieldErrors || {}).length === 0 &&
      isNil(serverErrors?.formError)
    ) {
      set(true)
    }
  }, [serverErrors, navigate.state])

  return success
}
