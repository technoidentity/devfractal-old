import { type } from 'io-ts'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {
  API,
  Get,
  Post,
  Put,
  SafeRoute as Route,
  SubmitAction,
  useMatch,
} from 'technoidentity-devfractal'
import { getProp } from 'technoidentity-utils'

export interface RestContext {
  readonly redirectPath: string
  readonly api: API<any, any>
}

const RestContext = React.createContext<RestContext | undefined>(undefined)

export interface RestProps extends RestContext {
  readonly children: React.ReactNode
}

export function Rest({ redirectPath, api, children }: RestProps): JSX.Element {
  return (
    <RestContext.Provider value={{ redirectPath, api }}>
      {children}
    </RestContext.Provider>
  )
}

export function useRest(): RestContext {
  const result = React.useContext(RestContext)
  if (result === undefined) {
    throw new Error(`no RestContext.Provider`)
  }
  return result
}

export interface RestGetComponentProps<T> {
  readonly data: ReadonlyArray<T>
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
    <Route
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
  const { api, redirectPath } = useRest()

  return (
    <Route
      path={path}
      render={() => (
        <Post
          component={Component}
          onPost={api.create}
          redirectPath={redirectPath}
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
  const { api, redirectPath } = useRest()

  const idPropSpec = getProp(api.spec, api.idKey)
  if (idPropSpec === undefined) {
    throw new Error(`${api.idKey} not defined`)
  }

  const { params } = useMatch(type({ [api.idKey]: idPropSpec }))

  return (
    <Route
      path={path}
      render={() => (
        <Put
          id={params[api.idKey]}
          doGet={api.get}
          onPut={api.replace}
          component={Component}
          redirectPath={redirectPath}
        />
      )}
    />
  )
}
