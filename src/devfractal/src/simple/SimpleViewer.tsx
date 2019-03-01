import React from 'react'
import { Boolean, Function } from 'tcomb'
import {
  Async,
  Box,
  camelCaseToPhrase,
  CheckBox,
  Column,
  Columns,
  Section,
  Title,
} from '../lib'

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

export interface SimpleViewerViewProps<T extends object> {
  readonly data: T
}

export function SimpleViewerView<T extends object>({
  data,
}: SimpleViewerViewProps<T>): JSX.Element {
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

export interface SimpleViewerProps<T extends object> {
  readonly data: T | (() => Promise<T>)
}

export function SimpleViewer<T extends object = any>({
  data,
}: SimpleViewerProps<T>): JSX.Element {
  if (Function.is(data)) {
    return (
      <Async asyncFn={data}>
        {({ error, data }) => {
          if (error) {
            return <div>Error</div>
          } else if (data) {
            return <SimpleViewerView data={data} />
          } else {
            return <div>Loading...</div>
          }
        }}
      </Async>
    )
  } else {
    return <SimpleViewerView data={data} />
  }
}
