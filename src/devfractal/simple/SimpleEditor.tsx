import { FormikActions } from 'formik'
import React from 'react'
import { Boolean, Function, Number } from 'tcomb'
import { Async, Box, camelCaseToPhrase, Label, Section } from '../lib'
import { Simple } from './internal'

export interface SimpleEditorViewProps<T extends object> {
  readonly data: T
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export function SimpleEditorView<T extends object = any>({
  data,
  onSubmit,
}: SimpleEditorViewProps<T>): JSX.Element {
  return (
    <Section>
      <Box>
        <Simple.Form initialValues={data} onSubmit={onSubmit}>
          {Object.keys(data).map(key => (
            <React.Fragment key={key}>
              {Boolean.is(data[key]) ? (
                <>
                  <Label>{camelCaseToPhrase(key)}</Label>
                  <Simple.Checkbox name={key} checked={data[key]} readOnly />
                </>
              ) : Number.is(data[key]) ? (
                <Simple.Number label={camelCaseToPhrase(key)} name={key} />
              ) : (
                <Simple.Text label={camelCaseToPhrase(key)} name={key} />
              )}
            </React.Fragment>
          ))}
          <Simple.FormButtons />
        </Simple.Form>
      </Box>
    </Section>
  )
}

export interface SimpleEditorProps<T extends object = any> {
  readonly data: T | (() => Promise<T>)
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export function SimpleEditor<T extends object>({
  data,
  onSubmit,
}: SimpleEditorProps<T>): JSX.Element {
  if (Function.is(data)) {
    return (
      <Async asyncFn={data}>
        {({ error, data }) => {
          if (error) {
            return <div>Error</div>
          } else if (data) {
            return <SimpleEditorView data={data} onSubmit={onSubmit} />
          } else {
            return <div>Loading...</div>
          }
        }}
      </Async>
    )
  } else {
    return <SimpleEditorView data={data} onSubmit={onSubmit} />
  }
}
