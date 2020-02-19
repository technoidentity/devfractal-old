import { FormikHelpers } from 'formik'
import React from 'react'
import { Get } from 'technoidentity-crud'
import { Section } from 'technoidentity-ui'
import * as t from 'technoidentity-utils'
import { date } from 'technoidentity-utils'
import { ObjectSchema } from 'yup'
import { Simple } from './SimpleForm'

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
        {/* @TODO: use Grid */}
        {Object.keys(data).map(key => (
          <React.Fragment key={key}>
            {key !== id &&
              (t.boolean.is(data[key]) ? (
                <Simple.Checkbox name={key} />
              ) : t.number.is(data[key]) ? (
                <Simple.Number name={key} />
              ) : date.is(data[key]) ? (
                <Simple.Date name={key} />
              ) : (
                <Simple.Text name={key} />
              ))}
            <br />
          </React.Fragment>
        ))}
        <Simple.FormButtons />
      </Simple.Form>
    </Section>
  )
}

export interface EditorProps<T extends {}> {
  readonly data: T | (() => Promise<T>)
  readonly id: keyof T
  onSubmit?(values: T, actions: FormikHelpers<T>): void
}

export function isFunction(x: unknown): x is Function {
  return typeof x === 'function'
}

export function Editor<T extends {}>({
  data,
  onSubmit,
  id,
}: EditorProps<T>): JSX.Element {
  if (isFunction(data)) {
    return (
      <Get asyncFn={data}>
        {data => <EditorView id={id} data={data} onSubmit={onSubmit} />}
      </Get>
    )
  }

  return <EditorView id={id} data={data} onSubmit={onSubmit} />
}
