import type { z } from 'zod'

// @TODO: `keyof T` means only works with shallow objects.
export type FieldErrors<T extends object> = Record<keyof T, string>

export type FormErrors<T extends object> = Readonly<{
  fieldErrors?: FieldErrors<T>
  formError?: string
}>

export const formErrors = <T extends object>(
  error: z.ZodError<T>,
): FieldErrors<T> => {
  const results: any = {}
  for (const e of error.errors) {
    results[e.path.join('.')] = e.message
  }
  return results
}
