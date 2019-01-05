import React from 'react'
import { Function } from 'tcomb'
import { Mutable, mutative } from './mutative'

type SetArgs<T> = T | ((value: Mutable<T>) => void)

interface ChildrenArgs<T> {
  readonly value: T
  set(updater: SetArgs<T>): void
  reset(): void
}

export interface ValueProps<T> {
  readonly initial: T
  children(args: ChildrenArgs<T>): JSX.Element
  // @TODO: onChange?(v: T): void
}

export interface ValueState<T> {
  readonly value: T
}

function freeze<T>(v: T): Readonly<T> {
  return Object.freeze(v) // @TODO: only in development
}

export class Value<T> extends React.Component<ValueProps<T>, ValueState<T>> {
  readonly initialValue: T
  readonly state: ValueState<T>

  constructor(props: ValueProps<T>, context: any) {
    super(props, context)

    this.initialValue = freeze(props.initial)
    this.state = { value: this.initialValue }
  }

  readonly set = (fv: SetArgs<T>): void => {
    // https://github.com/Microsoft/TypeScript/issues/21592
    this.setState(state => (Function.is(fv) ? mutative(state.value, fv) : fv))
  }

  render(): JSX.Element {
    return this.props.children({
      value: this.state.value,
      set: this.set,
      reset: () => this.set(this.initialValue),
    })
  }
}
