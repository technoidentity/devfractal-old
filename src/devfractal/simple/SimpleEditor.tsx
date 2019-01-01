import React from 'react'
import { Boolean, Number } from 'tcomb'
import { camelCaseToPhrase } from '../../utils'
import { Column, Columns } from '../columns'
import { Box, Title } from '../elements'
import { Simple } from '../formik'
import { Section } from '../layout'

const SimpleHeader: React.SFC<{ readonly objectKey: string }> = ({
  objectKey,
}) => <Title size="4">{camelCaseToPhrase(objectKey)}</Title>

export interface SimpleViewerProps extends React.HTMLAttributes<HTMLElement> {
  readonly object: { readonly [index: string]: any }
}

export const SimpleEditor: React.SFC<SimpleViewerProps> = ({ object }) => {
  return (
    <Section>
      <Box>
        {Object.keys(object).map(key => (
          <Columns>
            <Column>
              <SimpleHeader objectKey={key} />
            </Column>
            <Column>
              {Boolean.is(object[key]) ? (
                <Simple.Checkbox name={key} checked={object[key]} readOnly />
              ) : Number.is(object[key]) ? (
                <Simple.Input
                  label={camelCaseToPhrase(key)}
                  type="number"
                  name={key}
                />
              ) : (
                <Simple.Input
                  label={camelCaseToPhrase(key)}
                  type="text"
                  name={key}
                />
              )}
            </Column>
          </Columns>
        ))}
      </Box>
    </Section>
  )
}
