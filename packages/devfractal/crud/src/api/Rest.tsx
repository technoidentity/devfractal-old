import React from 'react'
import { API, SafeRoute, useParamsSafe } from 'technoidentity-core'
import { getProp, Mixed, type } from 'technoidentity-utils'
import { SubmitAction } from './common'
import { Get } from './Get'
import { Post } from './Post'
import { Put } from './Put'

// tslint:disable no-unbound-method

export interface RestContext {
  readonly redirectTo: string
  readonly api: API<any, any, any>
}

const RestContext: React.Context<RestContext | undefined> = React.createContext<
  RestContext | undefined
>(undefined)

export interface RestProps extends RestContext {
  readonly children: React.ReactNode
}

export function Rest({ redirectTo, api, children }: RestProps): JSX.Element {
  return (
    <RestContext.Provider value={{ redirectTo, api }}>
      {children}
    </RestContext.Provider>
  )
}

export function useRest(): RestContext {
  const result: RestContext | undefined = React.useContext(RestContext)
  if (result === undefined) {
    throw new Error(`no RestContext.Provider`)
  }
  return result
}

export interface RestGetComponentProps<T> {
  readonly data: readonly T[]
  // fetchAgain(): void
}

export interface RestGetProps<T> {
  readonly path: string
  readonly component: React.FC<RestGetComponentProps<T>>
}

export function RestGet<T>({
  path,
  component: Component,
}: RestGetProps<T>): JSX.Element {
  const { api } = useRest()

  return (
    <SafeRoute
      path={path}
      render={() => (
        <Get asyncFn={() => api.many()}>
          {data => <Component data={data} />}
        </Get>
      )}
    />
  )
}

export interface RestPostProps<T> {
  readonly path: string
  readonly component: React.FC<{ readonly onSubmit: SubmitAction<T> }>
}

export function RestPost<T>({
  path,
  component: Component,
}: RestPostProps<T>): JSX.Element {
  const { api, redirectTo } = useRest()

  return (
    <SafeRoute
      path={path}
      render={() => (
        <Post
          component={Component}
          onPost={api.create}
          redirectTo={redirectTo}
        />
      )}
    />
  )
}

export interface RestPutComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface RestPutProps<T> {
  readonly path?: string
  readonly component: React.FC<RestPutComponentProps<T>>
}

export function RestPut<T>({
  path,
  component: Component,
}: RestPutProps<T>): JSX.Element {
  const { api, redirectTo } = useRest()

  const idPropSpec: Mixed | undefined = getProp(api.spec, api.idKey)
  if (idPropSpec === undefined) {
    throw new Error(`${api.idKey} not defined`)
  }

  // tslint:disable-next-line: typedef
  const params = useParamsSafe(type({ [api.idKey]: idPropSpec }))

  return (
    <SafeRoute
      path={path}
      render={() => (
        <Put
          id={params[api.idKey]}
          doGet={api.get}
          onPut={api.replace}
          component={Component}
          redirectTo={redirectTo}
        />
      )}
    />
  )
}
