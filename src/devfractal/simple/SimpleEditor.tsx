import React from 'react'
import { Boolean, Number } from 'tcomb'
import { Box, camelCaseToPhrase, Label, Section } from '../lib'
import { Simple } from './internal'

export interface SimpleEditorProps {
  readonly data: { readonly [index: string]: any }
}

export const SimpleEditor: React.SFC<SimpleEditorProps> = ({ data }) => (
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
