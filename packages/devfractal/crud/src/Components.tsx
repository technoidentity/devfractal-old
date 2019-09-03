import { formikSubmit } from 'devfractal-forms'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Mixed, TypeOf } from 'technoidentity-spec'
import { APIRepository } from './api'
import { links as links_, paths as paths_ } from './new'
import { CrudViewsResult, Views } from './Views'

interface ComponentsArgs<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: APIRepository<Spec, ID>
  readonly basePath: string
  readonly Views?: CrudViewsResult<Spec, ID>
}

export interface ComponentsResult {
  readonly List: React.FC<RouteComponentProps>
  readonly Create: React.FC<RouteComponentProps>
  readonly Edit: React.FC<RouteComponentProps<{ readonly id: string }>>
  readonly View: React.FC<RouteComponentProps<{ readonly id: string }>>
}

export function components<RT extends Mixed, ID extends keyof TypeOf<RT>>(
  args: ComponentsArgs<RT, ID>,
): ComponentsResult {
  // tslint:disable typedef
  const { all, one, create, edit, spec, resource, id } = args.api
  const CV = args.Views || Views(spec, id)
  const basePath = args.basePath
  const links = links_(resource, basePath)
  const paths = paths_(resource, basePath)

  // tslint:enable typedef

  return {
    List: ({ history }) => (
      <CV.List
        list={all}
        onEdit={({ value }) => history.push(links.edit(value.id))}
        onCreate={() => history.push(paths.create)}
      />
    ),
    Create: ({ history }) => (
      <CV.Create
        onSubmit={async (values, actions) => {
          await formikSubmit(create)(values, actions)
          history.push(paths.list)
          // @TODO: handle error?
        }}
      />
    ),

    Edit: ({ history, match }) => (
      <CV.Edit
        data={async () => one(match.params.id as any)}
        onSubmit={async (values, actions) => {
          await formikSubmit(edit)(values, actions)
          history.push(paths.list)
          // @TODO: handle error?
        }}
      />
    ),

    View: ({ match }) => (
      <CV.View data={async () => one(match.params.id as any)} />
    ),
  }
}
