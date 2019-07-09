import { FormikActions } from 'formik'
import React from 'react'
import { Boolean, Date, Function, Number } from 'tcomb'
import { camelCaseToPhrase } from 'technoidentity-utils'
import { Async, Label, Section, Simple } from '../lib'

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
            {Boolean.is(data[key]) ? (
              <>
                <Label>{camelCaseToPhrase(key)}</Label>
                <Simple.Checkbox
                  name={key}
                  checked={data[key]}
                  readOnly
                  noLabel
                />
              </>
            ) : Number.is(data[key]) ? (
              <Simple.Number
                label={camelCaseToPhrase(key)}
                name={key}
                readOnly={key === id}
              />
            ) : Date.is(data[key]) ? (
              <Simple.Date
                label={camelCaseToPhrase(key)}
                name={key}
                readOnly={key === id}
              />
            ) : (
              <Simple.Text
                label={camelCaseToPhrase(key)}
                name={key}
                readOnly={key === id}
              />
            )}
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
  if (Function.is(data)) {
    return (
      <Async asyncFn={data}>
        {({ error, data }) => {
          if (error) {
            return <div style={{ color: 'red' }}>{`${error.message}`}</div>
          } else if (data) {
            return <EditorView id={id} data={data} onSubmit={onSubmit} />
          } else {
            return <div>Loading...</div>
          }
        }}
      </Async>
    )
  }

  return <EditorView id={id} data={data} onSubmit={onSubmit} />
}
