import { formikSubmit } from 'form'
import { Props, ReadonlyC, TypeC } from 'io-ts'
import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { TypeOfRT } from 'utils'
import { APIRepository, Repository } from './api'
import { CrudViewsResult, Views } from './Views'

const base: (resource: string, basePath: string) => string = (
  resource,
  basePath,
) => (basePath ? `${basePath}/${resource}` : `/${resource}`)

export interface Paths {
  readonly list: string
  readonly create: string
  readonly view: string
  readonly edit: string
}

export const paths: (resource: string, basePath: string) => Paths = (
  resource,
  basePath,
) => {
  const path: string = base(resource, basePath)

  return {
    list: path,
    create: `${path}/create`,
    view: `${path}/:id`,
    edit: `${path}/:id/edit`,
  }
}

export interface PathFns {
  view(id: unknown): string
  edit(id: unknown): string
  list(): string
  create(): string
}

export const pathFns: (resource: string, basePath: string) => PathFns = (
  resource,
  basePath,
) => {
  const path: string = base(resource, basePath)

  return {
    list: () => path,
    create: () => `${path}/create`,
    view: (id: unknown) => `${path}/${id}`,
    edit: (id: unknown) => `${path}/${id}/edit`,
  }
}

interface ComponentsArgsBase<
  T extends Props,
  ID extends keyof T,
  R extends Repository<TypeOfRT<T>, ID> = Repository<TypeOfRT<T>, ID>
> {
  readonly api: R
  readonly basePath: string
  readonly Views?: CrudViewsResult<T, ID>
}
interface ComponentsArgs<T extends Props, ID extends keyof T>
  extends ComponentsArgsBase<T, ID> {
  readonly value: ReadonlyC<TypeC<T>>
  readonly id: ID
  readonly resource: string
}

interface APIComponentsArgs<T extends Props, ID extends keyof T>
  extends ComponentsArgsBase<T, ID, APIRepository<T, ID>> {}

export interface ComponentsResult {
  readonly List: FC<RouteComponentProps>
  readonly Create: FC<RouteComponentProps>
  readonly Edit: FC<RouteComponentProps<{ readonly id: string }>>
  readonly View: FC<RouteComponentProps<{ readonly id: string }>>
}

export function components<T extends Props, ID extends keyof T>(
  args: ComponentsArgs<T, ID> | APIComponentsArgs<T, ID>,
): ComponentsResult {
  // tslint:disable typedef
  const { all, one, create, edit } = args.api

  const value = 'value' in args ? args.value : args.api.value

  const resource = 'value' in args ? args.resource : args.api.resource

  const id = 'value' in args ? args.id : args.api.id

  const CV = args.Views || Views(value, id)
  // @TODO: only if 'name' is alphanumeric

  const basePath = args.basePath

  const paths = pathFns(resource, basePath)
  // tslint:enable typedef

  return {
    List: ({ history }) => (
      <CV.List
        list={all}
        onEdit={({ value }) =>
          history.push(pathFns(resource, basePath).edit(value.id))
        }
        onCreate={() => history.push(paths.create())}
      />
    ),
    Create: ({ history }) => (
      <CV.Create
        onSubmit={async (values, actions) => {
          await formikSubmit(create)(values, actions)
          history.push(paths.list())
          // @TODO: handle error?
        }}
      />
    ),

    Edit: ({ history, match }) => (
      <CV.Edit
        data={async () => one(match.params.id)}
        onSubmit={async (values, actions) => {
          await formikSubmit(edit)(values, actions)
          history.push(paths.list())
          // @TODO: handle error?
        }}
      />
    ),

    View: ({ match }) => <CV.View data={async () => one(match.params.id)} />,
  }
}
