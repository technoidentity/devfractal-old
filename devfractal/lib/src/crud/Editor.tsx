import { FormikActions } from 'formik'
import React from 'react'
import { Boolean, Date, Function, Number } from 'tcomb'
import { Get, Section, Simple } from '../lib'

export interface EditorViewProps<T extends {}> {
  readonly data: T
  readonly id?: keyof T
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export function EditorView<T extends {}>({
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
              (Boolean.is(data[key]) ? (
                <Simple.Checkbox name={key} />
              ) : Number.is(data[key]) ? (
                <Simple.Number name={key} />
              ) : Date.is(data[key]) ? (
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

export interface EditorProps<T extends {}> {
  readonly data: T | (() => Promise<T>)
  readonly id: keyof T
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export function Editor<T extends {}>({
  data,
  onSubmit,
  id,
}: EditorProps<T>): JSX.Element {
  if (Function.is(data)) {
    return (
      <Get asyncFn={data}>
        {data => <EditorView id={id} data={data} onSubmit={onSubmit} />}
      </Get>
    )
  }

  return <EditorView id={id} data={data} onSubmit={onSubmit} />
}
