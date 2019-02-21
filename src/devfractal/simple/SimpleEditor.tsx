import React from 'react'
import { Boolean, Number } from 'tcomb'
import { Box } from '../elements'
import { Label } from '../form'
import { Section } from '../layout'
import { camelCaseToPhrase } from '../utils'
import { Simple } from './SimpleForm'

export interface SimpleEditorProps extends React.HTMLAttributes<HTMLElement> {
  readonly object: { readonly [index: string]: any }
}

export const SimpleEditor: React.SFC<SimpleEditorProps> = ({ object }) => {
  return (
    <Section>
      <Box>
        <Simple.Form initialValues={object}>
          {Object.keys(object).map(key => (
            <React.Fragment key={key}>
              {Boolean.is(object[key]) ? (
                <>
                  <Label>{camelCaseToPhrase(key)}</Label>
                  <Simple.Checkbox name={key} checked={object[key]} readOnly />
                </>
              ) : Number.is(object[key]) ? (
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
