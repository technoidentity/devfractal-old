import React from 'react'
import { Boolean, Date, Function } from 'tcomb'
import { camelCaseToPhrase } from 'technoidentity-utils'
import {
  Async,
  CheckBox,
  Column,
  Columns,
  formatDate,
  Section,
  Text,
  Title,
} from '../lib'

const Header: React.FC<{ readonly objectKey: string }> = ({ objectKey }) => (
  <Title size="6">{camelCaseToPhrase(objectKey)}</Title>
)

const Value: React.FC<{
  readonly objectValue: string
}> = ({ objectValue }) =>
  Boolean.is(objectValue) ? (
    <CheckBox checked={objectValue} readOnly />
  ) : Date.is(objectValue) ? (
    <Text>{formatDate(objectValue)}</Text>
  ) : (
    <>{objectValue}</>
  )

export interface ViewerViewProps<T extends object> {
  readonly data: T
}

export function ViewerView<T extends object>({
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

export interface ViewerProps<T extends object> {
  readonly data: T | (() => Promise<T>)
}

export function Viewer<T extends object>({
  data,
}: ViewerProps<T>): JSX.Element {
  if (Function.is(data)) {
    return (
      <Async asyncFn={data}>
        {({ error, data }) => {
          if (error) {
            return <div style={{ color: 'red' }}>{`${error.message}`}</div>
          } else if (data) {
            return <ViewerView data={data} />
          } else {
            return <div>Loading...</div>
          }
        }}
      </Async>
    )
  }
  return <ViewerView data={data} />
}
