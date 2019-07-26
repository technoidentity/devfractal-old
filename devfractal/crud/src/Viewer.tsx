import React from 'react'
import { Boolean, Date, Function } from 'tcomb'
import { Get } from 'technoidentity-devfractal-api'
import {
  CheckBox,
  Column,
  Columns,
  formatDate,
  Section,
  Text,
  Title,
} from 'technoidentity-devfractal-ui'
import { camelCaseToPhrase } from 'technoidentity-utils'

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
    return <Get asyncFn={data}>{data => <ViewerView data={data} />}</Get>
  }
  return <ViewerView data={data} />
}
