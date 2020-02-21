import React from 'react'
import { ViewerViewProps } from 'technoidentity-core'
import {
  boolean,
  camelCaseToPhrase,
  date,
  formatDate,
} from 'technoidentity-utils'
import { CheckBox, Column, Columns, Section, Text, Title } from './core'

const Header: React.FC<{ readonly objectKey: string }> = ({ objectKey }) => (
  <Title size="6">{camelCaseToPhrase(objectKey)}</Title>
)

const Value: React.FC<{
  readonly objectValue: string
}> = ({ objectValue }) =>
  boolean.is(objectValue) ? (
    <CheckBox checked={objectValue} readOnly />
  ) : date.is(objectValue) ? (
    <Text>{formatDate(objectValue)}</Text>
  ) : (
    <>{objectValue}</>
  )

export function ViewerView<T extends {}>({
  data,
}: ViewerViewProps<T>): JSX.Element {
  return (
    <Section>
      {Object.keys(data).map(key => (
        <Columns key={key}>
          <Column>
            <Header objectKey={key} />
          </Column>
          <Column>
            <Value objectValue={data[key]} />
          </Column>
        </Columns>
      ))}
    </Section>
  )
}
