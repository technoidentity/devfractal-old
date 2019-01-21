import React from 'react'
import { Function } from 'tcomb'
import { freeze, Mutable, mutative } from './common'
import { Null } from './Null'

type SetArgs<T> = T | ((value: Mutable<T>) => void)

interface StateRenderProps<T> {
  readonly value: T
  set(updater: SetArgs<T>): void
  eset<Event>(update: SetArgs<T>): (event?: Event) => void
  reset(): void
}

export interface ImmerStateProps<T> {
  readonly initial: T
  readonly render?: React.ComponentType<StateRenderProps<T>>
  children?(args: StateRenderProps<T>): JSX.Element | null
  onChange?(v: T): void
}

export class ImmerState<T> extends React.Component<
  ImmerStateProps<T>,
  {
    readonly value: T
  }
> {
  readonly initialValue: T

  constructor(props: ImmerStateProps<T>, context: any) {
    super(props, context)

    this.initialValue = freeze(props.initial)
    this.state = { value: this.initialValue }
  }

  readonly _set: (ƒv: SetArgs<T>) => void = fv => {
    const value: T = Function.is(fv) ? mutative(this.state.value, fv) : fv

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
      return children({ ...renderProps })
    }
    if (render) {
      const Component: ImmerStateProps<T>['render'] = render

      return <Component {...renderProps} {...rest} />
    }

    return <Null />
  }
}
