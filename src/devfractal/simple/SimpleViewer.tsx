import React from 'react'
import { Boolean } from 'tcomb'
import { Column, Columns } from '../columns'
import { Box, Title } from '../elements'
import { CheckBox } from '../form'
import { Section } from '../layout'
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

export interface SimpleViewerProps {
  readonly data: { readonly [index: string]: any }
}

export const SimpleViewer: React.SFC<SimpleViewerProps> = ({ data }) => {
  return (
    <Section>
      <Box>
        {Object.keys(data).map(key => (
          <Columns key={key}>
            <Column>
              <SimpleHeader objectKey={key} />
            </Column>
            <Column>
              <SimpleValue objectValue={data[key]} />
            </Column>
          </Columns>
        ))}
      </Box>
    </Section>
  )
}
