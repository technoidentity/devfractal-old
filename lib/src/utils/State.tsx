import React from 'react'
import { Function } from 'tcomb'
import { freeze, Null } from '../index'

type SetArgs<T> = T | ((value: T) => T)

export interface StateRenderProps<T> {
  readonly value: T
  set(updater: SetArgs<T>): void
  eset<Event>(update: SetArgs<T>): (event?: Event) => void
  reset(): void
}

export interface StateProps<T> {
  readonly initial: T
  readonly render?: React.ComponentType<StateRenderProps<T>>
  children?(args: StateRenderProps<T>): JSX.Element | null
  onChange?(v: T): void
}

export class State<T> extends React.Component<
  StateProps<T>,
  { readonly value: T }
> {
  readonly initialValue: T

  constructor(props: StateProps<T>) {
    super(props)

    this.initialValue = freeze(props.initial)
    this.state = { value: this.initialValue }
  }

  readonly _set: (fv: SetArgs<T>) => void = fv => {
    const value: T = Function.is(fv) ? fv(this.state.value) : fv

    this.setState(
      { value },
      () => this.props.onChange && this.props.onChange(value),
    )
  }

  render(): JSX.Element | null {
    const { initial, render, children, onChange, ...rest } = this.props
    const { value } = this.state

    // tslint:disable-next-line: typedef
    const renderProps = {
      value,
      set: this._set,
      eset: (f: SetArgs<T>) => () => this._set(f),
      reset: () => this._set(this.initialValue),
    }

    if (children) {
      return children({ ...renderProps, ...rest })
    }
    if (render) {
      const Component: StateProps<T>['render'] = render

      return <Component {...renderProps} {...rest} />
    }
    return <Null />
  }
}
