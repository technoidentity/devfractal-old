import { FormikActions } from 'formik'
import React from 'react'
import { Boolean, Date, Number } from 'tcomb'
import { buildObject } from 'technoidentity-utils'
import { Section, Simple } from '../lib'

export interface SimpleCreator<T extends object> {
  readonly initialValues: T
  readonly id?: keyof T
  onSubmit?(values: T, actions: FormikActions<T>): void
}

function dropID<T extends Object>(data: T, id: keyof T): T {
  return buildObject(data, (v, k) => (k === id ? undefined : v)) as T
}

export function SimpleCreator<T extends object>({
  initialValues,
  id,
  onSubmit,
}: SimpleCreator<T>): JSX.Element {
  return (
    <Section>
      <Simple.Form initialValues={initialValues} onSubmit={onSubmit}>
        {Object.keys(dropID(initialValues, (id || 'id') as any)).map(key => (
          <React.Fragment key={key}>
            {Boolean.is(initialValues[key]) ? (
              <Simple.Checkbox name={key} />
            ) : Number.is(initialValues[key]) ? (
              <Simple.Number name={key} />
            ) : Date.is(initialValues[key]) ? (
              <Simple.Date name={key} />
            ) : (
              <Simple.Text name={key} />
            )}
          </React.Fragment>
        ))}
        <Simple.FormButtons />
      </Simple.Form>
    </Section>
  )
}
