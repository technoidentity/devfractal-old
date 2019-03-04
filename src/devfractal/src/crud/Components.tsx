import { Props } from 'io-ts'
import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { formikSubmit } from '../lib'
import {
  APIRepository,
  CrudViewsResult,
  Repository,
  TVT,
  Views,
} from './internal'

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

interface APIComponentsArgs<T extends Props, ID extends keyof T> {
  readonly api: APIRepository<T, ID>
  readonly Views?: CrudViewsResult<T, ID>
  readonly basePath: string
  readonly id: ID
}

interface ComponentsArgs<T extends Props, ID extends keyof T> {
  readonly api: Repository<TVT<T>, ID>
  readonly Views?: CrudViewsResult<T, ID>
  readonly basePath: string
  readonly id: ID
  readonly value: APIRepository<T, ID>['value']
  readonly resource: string
}

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
  const resource = 'resource' in args ? args.resource : args.api.resource
  const CV = args.Views || Views(value, args.id)
  const paths = pathFns(resource, args.basePath)
  // tslint:enable typedef

  return {
    List: ({ history }) => (
      <CV.List
        list={all}
        onEdit={({ value }) =>
          history.push(pathFns(resource, args.basePath).edit(+value.id))
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
      // @TODO: handle id type in one?
      <CV.Edit
        data={async () => one(match.params.id as any)}
        onSubmit={async (values, actions) => {
          await formikSubmit(edit)(values, actions)
          history.push(paths.list())
          // @TODO: handle error?
        }}
      />
    ),

    View: ({ match }) => (
      <CV.View data={async () => one(match.params.id as any)} />
    ),
  }
}
