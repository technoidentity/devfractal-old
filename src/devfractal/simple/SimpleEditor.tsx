import React from 'react'
import { Boolean, Function, Number } from 'tcomb'
import { Async, Box, camelCaseToPhrase, Label, Section } from '../lib'
import { Simple } from './internal'

export interface SimpleEditorViewProps<T extends object> {
  readonly data: T
}

export function SimpleEditorView<T extends object = any>({
  data,
}: SimpleEditorViewProps<T>): JSX.Element {
  return (
    <Section>
      <Box>
        <Simple.Form initialValues={data}>
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
}

export function SimpleEditor<T extends object>({
  data,
}: SimpleEditorProps<T>): JSX.Element {
  if (Function.is(data)) {
    return (
      <Async asyncFn={data}>
        {({ error, data }) => {
          if (error) {
            return <div>Error</div>
          } else if (data) {
            return <SimpleEditorView data={data} />
          } else {
            return <div>Loading...</div>
          }
        }}
      </Async>
    )
  } else {
    return <SimpleEditorView data={data} />
  }
}
