import { FormikActions } from 'formik'
import React from 'react'
import { Boolean, Function, Number } from 'tcomb'
import { Async, camelCaseToPhrase, Label, Section } from '../index'
import { Simple } from '../index'

export interface SimpleEditorViewProps<T extends object> {
  readonly data: T
  readonly id?: keyof T
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export function SimpleEditorView<T extends object>({
  data,
  id,
  onSubmit,
}: SimpleEditorViewProps<T>): JSX.Element {
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

export interface SimpleEditorProps<T extends object> {
  readonly data: T | (() => Promise<T>)
  readonly id: keyof T
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export function SimpleEditor<T extends object>({
  data,
  onSubmit,
  id,
}: SimpleEditorProps<T>): JSX.Element {
  if (Function.is(data)) {
    return (
      <Async asyncFn={data}>
        {({ error, data }) => {
          if (error) {
            return <div style={{ color: 'red' }}>{`${error.message}`}</div>
          } else if (data) {
            return <SimpleEditorView id={id} data={data} onSubmit={onSubmit} />
          } else {
            return <div>Loading...</div>
          }
        }}
      </Async>
    )
  }

  return <SimpleEditorView id={id} data={data} onSubmit={onSubmit} />
}
