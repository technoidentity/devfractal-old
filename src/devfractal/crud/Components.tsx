import { Props } from 'io-ts'
import React, { FC } from 'react'
import { useAsync } from 'react-use'
import { Button, Field } from '../form'
import { Container } from '../layout'
import { Text } from '../modifiers'
import {
  RowClickEvent,
  SimpleEditor,
  SimpleTable,
  SimpleViewer,
} from '../simple'
import { emptyFromType } from './empty'
import { TVT, VT } from './utils'

interface ItemProps<T> {
  asyncFn(): Promise<T>
}

export interface ListProps<T> {
  list(): Promise<ReadonlyArray<T>>
  onCreate?(): void
  onEdit?(value: RowClickEvent<T>): void
  onDelete?(value: RowClickEvent<T>): void
}

export type CrudComponentsResult<T extends Props, V = TVT<T>> = Readonly<{
  readonly List: FC<ListProps<V>>
  readonly Create: FC
  readonly Edit: FC<ItemProps<V>>
  readonly View: FC<ItemProps<V>>
}>

export const CrudComponents: <T extends Props>(
  typeValue: VT<T>, // or pass to Create?
) => CrudComponentsResult<T> = typeValue => ({
  Create: () => <SimpleEditor object={emptyFromType(typeValue)} />,

  Edit: ({ asyncFn }) => {
    const { value, loading, error } = useAsync(asyncFn)
    return value ? (
      // @TODO: typed SimpleEditor/Viewer/Table would be awesome!
      <SimpleEditor object={value} />
    ) : loading ? (
      <h1>Loading...</h1>
    ) : (
      <Text textSize="4" textColor="danger">
        >{error ? error.message : 'Unknown Error'}
      </Text>
    )
  },

  View: ({ asyncFn }) => {
    const { value, loading, error } = useAsync(asyncFn)
    return value ? (
      <SimpleViewer object={value} />
    ) : loading ? (
      <h1>Loading...</h1>
    ) : (
      <h1>${error ? error.message : 'Unknown Error'}</h1>
    )
  },

  List: ({ list, onCreate, onEdit }) => (
    <Container>
      <Field groupModifier="grouped-right">
        <Button variant="primary" onClick={onCreate}>
          New
        </Button>
      </Field>
      <SimpleTable values={list} onRowClicked={onEdit} />
    </Container>
  ),
  // @TODO: remove
})
