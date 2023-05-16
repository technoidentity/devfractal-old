import type { UseFormReturnType } from '@mantine/form'
import type { FormErrors } from '@df/remix-core'

// @TODO: to .client.ts?
export function getFieldError<T extends object>(
  errors: FormErrors<T> | undefined,
  form: UseFormReturnType<T, (values: T) => T>,
) {
  return (key: keyof T): string | undefined => {
    return errors?.fieldErrors?.[key] || form.getInputProps(key).error
  }
}
