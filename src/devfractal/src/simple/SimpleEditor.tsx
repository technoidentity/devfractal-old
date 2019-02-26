import { FormikActions } from 'formik'
import React from 'react'
import { Boolean, Number } from 'tcomb'
import { Box, camelCaseToPhrase, Label, Section } from '../lib'
import { Simple } from './internal'

export interface SimpleEditorProps<T extends object> {
  readonly data: T
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export function SimpleEditor<T extends object>({
  data,
  onSubmit,
}: SimpleEditorProps<T>): JSX.Element {
  return (
    <Section>
      <Box>
        <Simple.Form<T> initialValues={data} onSubmit={onSubmit}>
          {Object.keys(data).map(key => (
            <React.Fragment key={key}>
              {Boolean.is(data[key]) ? (
                <>
                  <Simple.Checkbox name={key} checked={data[key]} readOnly>
                    {' '}
                    <Label>{camelCaseToPhrase(key)}</Label>
                  </Simple.Checkbox>
                </>
              ) : Number.is(data[key]) ? (
                <Simple.Number
                  label={camelCaseToPhrase(key)}
                  name={key}
                  readOnly={key === 'id'}
                />
              ) : (
                <Simple.Text
                  label={camelCaseToPhrase(key)}
                  name={key}
                  readOnly={key === 'id'}
                />
              )}
            </React.Fragment>
          ))}
          <Simple.FormButtons />
        </Simple.Form>
      </Box>
    </Section>
  )
}
