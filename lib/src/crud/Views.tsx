import { FormikActions } from 'formik'
import { Props } from 'io-ts'
import React, { FC } from 'react'
import {
  Button,
  Container,
  emptyFromType,
  Field,
  Omit,
  RowClickEvent,
  RTType,
  SimpleEditor,
  SimpleTable,
  SimpleViewer,
  TypeOfRT,
} from '../lib'

export interface EditProps<T> {
  readonly data: T | (() => Promise<T>)
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export interface ViewProps<T> {
  readonly data: T | (() => Promise<T>)
}

export interface CreateProps<T> {
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export interface ListProps<T> {
  list(): Promise<ReadonlyArray<T>>
  onCreate?(): void
  onEdit?(value: RowClickEvent<T>): void
  onDelete?(value: RowClickEvent<T>): void
}

export interface CrudViewsResult<T extends Props, ID extends keyof T> {
  readonly List: FC<ListProps<TypeOfRT<T>>>
  readonly Create: FC<CreateProps<Omit<TypeOfRT<T>, ID>>>
  readonly Edit: FC<EditProps<TypeOfRT<T>>>
  readonly View: FC<ViewProps<TypeOfRT<T>>>
}

export function Views<T extends Props, ID extends keyof T>(
  // cannot pass this to create, as getting type from typeValue is easy,
  // not the other way round
  typeValue: RTType<T>,
  id: keyof T,
): CrudViewsResult<T, ID> {
  return {
    Create: ({ onSubmit }) => (
      <SimpleEditor
        id={id}
        data={emptyFromType(typeValue)}
        onSubmit={onSubmit}
      />
    ),

    Edit: ({ data, onSubmit }) => (
      <SimpleEditor id={id} data={data} onSubmit={onSubmit} />
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
  }
}
