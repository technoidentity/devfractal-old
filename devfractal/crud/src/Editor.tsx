import { FormikActions } from 'formik'
import * as t from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import React from 'react'
import { Get, Section, Simple } from 'technoidentity-devfractal'
import { isFunction } from './utils'

export interface EditorViewProps<T extends object> {
  readonly data: T
  readonly id?: keyof T
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export function EditorView<T extends object>({
  data,
  id,
  onSubmit,
}: EditorViewProps<T>): JSX.Element {
  return (
    <Section>
      <Simple.Form initialValues={data} onSubmit={onSubmit}>
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
          </React.Fragment>
        ))}
        <Simple.FormButtons />
      </Simple.Form>
    </Section>
  )
}

export interface EditorProps<T extends object> {
  readonly data: T | (() => Promise<T>)
  readonly id: keyof T
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export function Editor<T extends object>({
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
