/* eslint-disable @typescript-eslint/naming-convention */
import { createFormContext, useForm, zodResolver } from '@mantine/form'
import type { UseFormInput } from '@mantine/form/lib/types'
import { getRawShape } from '@df/spec'
import type { FormSpec } from '@df/validator'
import React from 'react'
import type { z } from 'zod'
import { FormContext } from './FormContext'
import type { InputsType } from './Inputs'
import { Inputs } from './Inputs'

type MyInputsGroupProps<Spec extends FormSpec> = Readonly<{
  onChange?: (values: z.infer<Spec>) => void
  children: React.ReactNode
}>

type InputsGroupProps<Spec extends FormSpec> = MyInputsGroupProps<Spec> &
  Omit<UseFormInput<z.infer<Spec>>, 'validate'>

export function createInputsGroup<Spec extends FormSpec>(spec: Spec) {
  type T = z.infer<Spec>
  const [MantineProvider, useMantineFormContext] = createFormContext<T>()

  const InputsGroup = ({
    children,
    onChange,
    ...props
  }: InputsGroupProps<Spec>) => {
    const form = useForm({
      validateInputOnBlur: true,
      ...props,
      validate: zodResolver(spec),
    })

    React.useEffect(() => {
      onChange?.(form.values)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form.values])

    const value = React.useMemo(
      () =>
        ({
          form,
          useContext: useMantineFormContext,
          spec: getRawShape(spec),
        } as const),
      [form],
    )

    return (
      <MantineProvider form={form}>
        <FormContext.Provider value={value}>
          <form>{children}</form>
        </FormContext.Provider>
      </MantineProvider>
    )
  }

  return {
    InputsGroup,
    useInputsGroup: useForm,
    Inputs: Inputs as InputsType<Spec>,
  }
}
