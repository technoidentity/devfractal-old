import { formikSubmit } from 'devfractal-forms'
import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { APIRepository, Repository } from './api'
import { CrudViewsResult, Views } from './Views'

export function base(resource: string, basePath: string): string {
  return basePath ? `${basePath}/${resource}` : `/${resource}`
}

export interface Paths {
  readonly list: string
  readonly create: string
  readonly view: string
  readonly edit: string
}

export function paths(resource: string, basePath: string): Paths {
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

export function pathFns(resource: string, basePath: string): PathFns {
  const path: string = base(resource, basePath)
  return {
    list: () => path,
    create: () => `${path}/create`,
    view: (id: unknown) => `${path}/${id}`,
    edit: (id: unknown) => `${path}/${id}/edit`,
  }
}

interface ComponentsArgsBase<
  RT extends Mixed,
  ID extends keyof TypeOf<RT>,
  R extends Repository<TypeOf<RT>, ID> = Repository<TypeOf<RT>, ID>
> {
  readonly api: R
  readonly basePath: string
  readonly Views?: CrudViewsResult<RT, ID>
}
interface ComponentsArgs<RT extends Mixed, ID extends keyof TypeOf<RT>>
  extends ComponentsArgsBase<RT, ID> {
  readonly value: RT
  readonly id: ID
  readonly resource: string
}

interface APIComponentsArgs<RT extends Mixed, ID extends keyof TypeOf<RT>>
  extends ComponentsArgsBase<RT, ID, APIRepository<RT, ID>> {}

export interface ComponentsResult {
  readonly List: React.FC<RouteComponentProps>
  readonly Create: React.FC<RouteComponentProps>
  readonly Edit: React.FC<RouteComponentProps<{ readonly id: string }>>
  readonly View: React.FC<RouteComponentProps<{ readonly id: string }>>
}

export function components<RT extends Mixed, ID extends keyof TypeOf<RT>>(
  args: ComponentsArgs<RT, ID> | APIComponentsArgs<RT, ID>,
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
