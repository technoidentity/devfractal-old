import { API, SubmitAction } from 'devfractal-api'
import { SafeRoute as Route } from 'devfractal-router'
import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { HasProps } from 'technoidentity-utils'
import { Post } from './Post'

// tslint:disable no-unbound-method

export interface SimplePostProps<
  Spec extends Mixed & HasProps,
  ID extends keyof TypeOf<Spec>
> {
  readonly path: string
  readonly redirectPath?: string
  readonly component: React.FC<{
    readonly onSubmit: SubmitAction<TypeOf<Spec>>
  }>
  readonly api: API<Spec & HasProps, ID>
}

function SimplePostChildren<
  Spec extends Mixed & HasProps,
  ID extends keyof TypeOf<Spec>
>({
  api,
  redirectPath,
  component: Component,
}: Omit<SimplePostProps<Spec, ID>, 'path'>): JSX.Element {
  return (
    <Post
      component={Component}
      onPost={api.create}
      redirectPath={redirectPath}
    />
  )
}

export function SimplePost<
  Spec extends Mixed & HasProps,
  ID extends keyof TypeOf<Spec>
>({ path, ...props }: SimplePostProps<Spec, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <SimplePostChildren {...props} />} />
  ) : (
    <SimplePostChildren {...props} />
  )
}
