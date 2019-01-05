import React from 'react'
import { Function } from 'tcomb'

type SetArgs<T> = T | ((value: T) => T)

interface ChildrenArgs<T> {
  readonly value: T
  set(updater: SetArgs<T>): void
  eset<Event>(update: SetArgs<T>): (event?: Event) => void
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

      set: arg => {
        const value: T = Function.is(arg) ? arg(this.state.value) : arg
        this.setState({ value })
      },
      eset: arg => () => {
        const value: T = Function.is(arg) ? arg(this.state.value) : arg
        this.setState({ value })
      },
      reset: () => this.setState({ value: this.initialValue }),
    })
  }
}

/*
Patterns used
onEvent={eset(value + value)}
onEvent={event => set(value + event.value)}
onEvent={event => set(value => value + event.value)}
*/
