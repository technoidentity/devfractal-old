import { FormikHelpers } from 'formik'
import React from 'react'
import { boolean, date, number } from 'technoidentity-utils'
import { ObjectSchema } from 'yup'
import { Section } from './core'
import { Simple } from './simple'

export interface EditorViewProps<T extends {}> {
  readonly data: T
  readonly id?: keyof T
  readonly schema?: ObjectSchema<T>
  onSubmit?(values: T, actions: FormikHelpers<T>): void
}

export function EditorView<T extends {}>({
  data,
  id,
  schema,
  onSubmit,
}: EditorViewProps<T>): JSX.Element {
  return (
    <Section>
      <Simple.Form
        validationSchema={schema}
        initialValues={data}
        onSubmit={onSubmit}
      >
        {Object.keys(data).map(key => (
          <React.Fragment key={key}>
            {key !== id &&
              (boolean.is(data[key]) ? (
                <Simple.Checkbox name={key} />
              ) : number.is(data[key]) ? (
                <Simple.Number name={key} />
              ) : date.is(data[key]) ? (
                <Simple.Date name={key} />
              ) : (
                <Simple.Text name={key} />
              ))}
          </React.Fragment>
        ))}
        <Simple.FormButtons />
      </Simple.Form>
    </Section>
  )
}
