import { FormikActions } from 'formik'
import { Props } from 'io-ts'
import React, { FC } from 'react'
import {
  Button,
  Container,
  Field,
  Omit,
  RowClickEvent,
  SimpleEditor,
  SimpleTable,
  SimpleViewer,
} from '../lib'
import { emptyFromType, TVT, VT } from './internal'

interface ItemProps<T> {
  readonly data: T | (() => Promise<T>)
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

export type CrudComponentsResult<
  T extends Props,
  V = TVT<T>,
  ID extends keyof T = 'id'
> = Readonly<{
  readonly List: FC<ListProps<V>>
  readonly Create: FC<CreateProps<Omit<V, ID>>>
  readonly Edit: FC<EditProps<V>>
  readonly View: FC<ItemProps<V>>
}>

export const CrudComponents: <T extends Props, ID extends keyof T = 'id'>(
  // cannot pass this to create, as getting type from typeValue is easy,
  // not the other way round
  typeValue: VT<T>,
) => CrudComponentsResult<T, TVT<T>, ID> = typeValue => ({
  Create: ({ onSubmit }) => (
    <SimpleEditor data={emptyFromType(typeValue)} onSubmit={onSubmit} />
  ),

  Edit: ({ data, onSubmit }) => (
    <SimpleEditor data={data} onSubmit={onSubmit} />
  ),

  View: ({ data }) => <SimpleViewer data={data} />,

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
})
