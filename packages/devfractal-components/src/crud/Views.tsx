import { FormikActions } from 'formik'
import { Mixed, Props, TypeOf } from 'io-ts'
import React, { FC } from 'react'
import {
  Button,
  Container,
  emptyFromType,
  Field,
  RowClickEvent,
  SimpleEditor,
  SimpleTable,
  SimpleViewer,
} from '../lib'

export interface EditProps<T extends Record<string, any>> {
  readonly data: T | (() => Promise<T>)
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export interface ViewProps<T extends Record<string, any>> {
  readonly data: T | (() => Promise<T>)
}

export interface CreateProps<T extends Record<string, any>> {
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export interface ListProps<T extends Record<string, any>> {
  list(): Promise<ReadonlyArray<T>>
  onCreate?(): void
  onEdit?(value: RowClickEvent<T>): void
  onDelete?(value: RowClickEvent<T>): void
}

export interface CrudViewsResult<T extends Mixed & Props, ID extends keyof T> {
  readonly List: FC<ListProps<TypeOf<T>>>
  readonly Create: FC<CreateProps<Omit<TypeOf<T>, ID>>>
  readonly Edit: FC<EditProps<TypeOf<T>>>
  readonly View: FC<ViewProps<TypeOf<T>>>
}

export function Views<RT extends Mixed & Props, ID extends keyof RT>(
  // cannot pass this to create, as getting type from typeValue is easy,
  // not the other way round
  typeValue: RT,
  id: keyof RT,
): CrudViewsResult<RT, ID> {
  return {
    Create: ({ onSubmit }) => (
      <SimpleEditor
        id={id}
        // @TODO: exclude id?
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
