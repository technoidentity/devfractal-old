import { FormikActions } from 'formik'
import { Mixed, TypeOf } from 'io-ts'
import React, { FC } from 'react'
import { RowClickEvent, SimpleTable } from 'technoidentity-devfractal-simple'
import { Button, Container, Field } from 'technoidentity-devfractal-ui-core'
import { empty } from 'technoidentity-utils'
import { Editor } from './Editor'
import { Viewer } from './Viewer'

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

export interface CrudViewsResult<T extends Mixed, ID extends keyof T> {
  readonly List: FC<ListProps<TypeOf<T>>>
  readonly Create: FC<CreateProps<Omit<TypeOf<T>, ID>>>
  readonly Edit: FC<EditProps<TypeOf<T>>>
  readonly View: FC<ViewProps<TypeOf<T>>>
}

export function Views<RT extends Mixed, ID extends keyof RT>(
  // cannot pass this to create, as getting type from typeValue is easy,
  // not the other way round
  typeValue: RT,
  id: keyof RT,
): CrudViewsResult<RT, ID> {
  return {
    Create: ({ onSubmit }) => (
      <Editor id={id} data={empty(typeValue)} onSubmit={onSubmit} />
    ),

    Edit: ({ data, onSubmit }) => (
      <Editor id={id} data={data} onSubmit={onSubmit} />
    ),

    View: ({ data }) => <Viewer data={data} />,

    List: ({ list, onCreate, onEdit }) => {
      return (
        <Container>
          <Field groupModifier="grouped-right">
            <Button variant="primary" onClick={onCreate}>
              New
            </Button>
          </Field>
          <SimpleTable data={list} onRowClicked={onEdit} />
        </Container>
      )
    },
  }
}
