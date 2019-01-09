import React from 'react'
import { Boolean } from 'tcomb'
import { Box, CheckBox, Column, Columns, Section, Title } from '../devfractal'
import { camelCaseToPhrase } from '../utils'

const SimpleHeader: React.SFC<{ readonly objectKey: string }> = ({
  objectKey,
}) => <Title size="4">{camelCaseToPhrase(objectKey)}</Title>

const SimpleValue: React.SFC<{ readonly objectValue: string }> = ({
  objectValue,
}) =>
  Boolean.is(objectValue) ? (
    <CheckBox checked={objectValue} readOnly />
  ) : (
    <>{objectValue}</>
  )

export interface SimpleViewerProps extends React.HTMLAttributes<HTMLElement> {
  readonly object: { readonly [index: string]: any }
}

export const SimpleViewer: React.SFC<SimpleViewerProps> = ({ object }) => {
  return (
    <Section>
      <Box>
        {Object.keys(object).map(key => (
          <Columns key={key}>
            <Column>
              <SimpleHeader objectKey={key} />
            </Column>
            <Column>
              <SimpleValue objectValue={object[key]} />
            </Column>
          </Columns>
        ))}
      </Box>
    </Section>
  )
}
