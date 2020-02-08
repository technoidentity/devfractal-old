import { Button, Delete, Field, Notification } from 'stp-ui'
import { FieldArray } from 'formik'
import React from 'react'

export interface SimpleArrayFieldComponentProps<T> {
  readonly name: string
  readonly data: T
  readonly index: number
}

export interface SimpleArrayFieldProps<T> {
  readonly name: string
  readonly data: readonly T[]
  readonly noRemove?: boolean
  readonly render: React.FC<SimpleArrayFieldComponentProps<T>>
  onAdd?(): T
}

export function SimpleArrayField<T>({
  name,
  data,
  noRemove,
  onAdd,
  render: Component,
}: SimpleArrayFieldProps<T>): JSX.Element {
  return (
    <FieldArray name={name}>
      {({ unshift, remove }) => (
        <>
          {onAdd && (
            <Field addonsModifier="addons-right">
              <Button variant="success" onClick={() => unshift(onAdd())}>
                Add
              </Button>
            </Field>
          )}
          {data.map((v, i) => (
            <Notification key={i}>
              {noRemove || <Delete onClick={() => remove(i)} />}
              <Component name={`${name}[${i}]`} index={i} data={v} />
            </Notification>
          ))}
        </>
      )}
    </FieldArray>
  )
}
