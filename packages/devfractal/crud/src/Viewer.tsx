import { Get } from 'devfractal-ui-api'
import {
  CheckBox,
  Column,
  Columns,
  Section,
  Text,
  Title,
} from 'devfractal-ui-core'
import React from 'react'
import * as t from 'technoidentity-spec'
import { date } from 'technoidentity-spec'
import { camelCaseToPhrase } from 'technoidentity-utils'
import { formatDate, isFunction } from './utils'

const Header: React.FC<{ readonly objectKey: string }> = ({ objectKey }) => (
  <Title size="6">{camelCaseToPhrase(objectKey)}</Title>
)

const Value: React.FC<{
  readonly objectValue: string
}> = ({ objectValue }) =>
  t.boolean.is(objectValue) ? (
    <CheckBox checked={objectValue} readOnly />
  ) : date.is(objectValue) ? (
    <Text>{formatDate(objectValue)}</Text>
  ) : (
    <>{objectValue}</>
  )

export interface ViewerViewProps<T extends {}> {
  readonly data: T
}

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

export interface ViewerProps<T extends {}> {
  readonly data: T | (() => Promise<T>)
}

export function Viewer<T extends {}>({ data }: ViewerProps<T>): JSX.Element {
  if (isFunction(data)) {
    return <Get asyncFn={data}>{data => <ViewerView data={data} />}</Get>
  }
  return <ViewerView data={data} />
}
