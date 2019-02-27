import { FormikActions } from 'formik'
import { Props } from 'io-ts'
import React, { FC } from 'react'
import { useAsync } from 'react-use'
import {
  Button,
  Container,
  Field,
  Omit,
  RowClickEvent,
  SimpleEditor,
  SimpleTable,
  SimpleViewer,
  Text,
} from '../lib'
import { emptyFromType, TVT, VT } from './internal'

interface ItemProps<T> {
  asyncFn(): Promise<T>
}

export interface EditProps<T> extends ItemProps<T> {
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export interface ViewProps<T> extends ItemProps<T> {}

export interface CreateProps<T> {
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export interface ListProps<T> {
  list(): Promise<ReadonlyArray<T>>
  onCreate?(): void
  onEdit?(value: RowClickEvent<T>): void
  onDelete?(value: RowClickEvent<T>): void
}

export type CrudComponentsResult<T extends Props, V = TVT<T>> = Readonly<{
  readonly List: FC<ListProps<V>>
  readonly Create: FC<CreateProps<Omit<V, 'id'>>>
  readonly Edit: FC<EditProps<V>>
  readonly View: FC<ItemProps<V>>
}>

export const CrudComponents: <T extends Props & { readonly id: unknown }>(
  typeValue: VT<T>, // or pass to Create?
) => CrudComponentsResult<T> = typeValue => ({
  Create: ({ onSubmit }) => (
    <SimpleEditor data={emptyFromType(typeValue)} onSubmit={onSubmit} />
  ),

  Edit: ({ asyncFn, onSubmit }) => {
    const { value, loading, error } = useAsync(asyncFn)
    return value ? (
      // @TODO: typed SimpleEditor/Viewer/Table would be awesome!
      <SimpleEditor data={value} onSubmit={onSubmit} />
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
      <SimpleViewer data={value} />
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
      <SimpleTable data={list} onRowClicked={onEdit} />
    </Container>
  ),
  // @TODO: remove
})
