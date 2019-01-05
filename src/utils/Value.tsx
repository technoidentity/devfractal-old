import React from 'react'
import { Function } from 'tcomb'

type SetArgs<T, Event = unknown> = T | ((value: T, event: Event) => T)

interface ChildrenArgs<T> {
  readonly value: T
  set<Event = unknown>(updater: SetArgs<T, Event>): (event: Event) => void
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

  constructor(props: ValueProps<T>) {
    super(props)

    this.initialValue = freeze(props.initial)
    this.state = { value: this.initialValue }
  }

  render(): JSX.Element {
    return this.props.children({
      value: this.state.value,

      set: arg => event => {
        const value: T = Function.is(arg) ? arg(this.state.value, event) : arg
        this.setState({ value })
      },
      reset: () => this.setState({ value: this.initialValue }),
    })
  }
}
