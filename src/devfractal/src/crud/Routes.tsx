import { Props } from 'io-ts'
import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import {
  ApiRepository,
  CrudComponents,
  CrudComponentsResult,
  Repository,
  TVT,
} from './internal'

const base: (resource: string, basePath?: string) => string = (
  resource,
  basePath,
) => (basePath ? `${basePath}/${resource}` : `/${resource}`)

export interface Paths {
  readonly list: string
  readonly create: string
  readonly view: string
  readonly edit: string
}

export const paths: (resource: string, basePath?: string) => Paths = (
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

export type PathFns = Readonly<{
  view(id: unknown): string
  edit(id: unknown): string
  list(): string
  create(): string
}>

export const pathFns: (resource: string, basePath?: string) => PathFns = (
  resource,
  basePath,
) => {
  const path: string = base(resource, basePath)
  return {
    list: () => `${path}`,
    create: () => `${path}/create`,
    view: (id: unknown) => `${path}/${id}`,
    edit: (id: unknown) => `${path}/${id}/edit`,
  }
}

interface APIRouteComponentsArgs<T extends Props & { readonly id: unknown }> {
  readonly api: ApiRepository<T>
  readonly Crud?: CrudComponentsResult<T>
}

interface RouteComponentsArgs<T extends Props & { readonly id: unknown }> {
  readonly api: Repository<TVT<T>>
  readonly value: ApiRepository<T>['value']
  readonly resource: string
  readonly Crud?: CrudComponentsResult<T>
}

export interface RouteComponentsResult {
  readonly List: FC<RouteComponentProps>
  readonly Create: FC
  readonly Edit: FC<RouteComponentProps<{ readonly id?: string }>>
  readonly View: FC<RouteComponentProps<{ readonly id?: string }>>
}

export const RouteComponents: <T extends Props & { readonly id: unknown }>(
  args: RouteComponentsArgs<T> | APIRouteComponentsArgs<T>,
  basePath: string,
) => RouteComponentsResult = (args, basePath) => {
  // tslint:disable typedef
  const { all, one } = args.api
  const value = 'value' in args ? args.value : args.api.value
  const resource = 'resource' in args ? args.resource : args.api.resource
  const Crud = args.Crud || CrudComponents(value, args.api)

  // tslint:enable typedef

  return {
    List: ({ history }) => (
      <Crud.List
        list={all}
        onEdit={({ value }) =>
          history.push(pathFns(resource, basePath).edit(+value.id))
        }
        onCreate={() => history.push(pathFns(resource, basePath).create())}
      />
    ),
    Create: () => <Crud.Create />,

    Edit: ({ match }) => (
      // @TODO: handle id type in one?
      <Crud.Edit asyncFn={async () => one(match.params.id as any)} />
    ),
    View: ({ match }) => (
      <Crud.View asyncFn={async () => one(match.params.id as any)} />
    ),
  }
}
