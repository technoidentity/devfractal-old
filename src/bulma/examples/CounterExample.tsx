import * as React from 'react'

import { Button } from '../form/Button'
import { Columns } from '../columns/Columns'
import { Column } from '../columns/Column'
import { Box } from '../elements/Box'
import { Section } from '../layout'

interface CounterViewProps {
  readonly count: number
  onIncrement(): void
  onDecrement(): void
}

export const CounterView: React.SFC<CounterViewProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => (
  <Columns columnCentered>
    <Column narrow>
      <Section>
        <Box>
          <Button variant="primary" size="large" rounded onClick={onIncrement}>
            +
          </Button>
          <h1>{count}</h1>
          <Button variant="danger" size="large" rounded onClick={onDecrement}>
            -
          </Button>
        </Box>
      </Section>
    </Column>
  </Columns>
)

type CounterProps = { readonly count: number }

export class Counter extends React.Component {
  readonly state: CounterProps = { count: 0 }

  readonly handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  readonly handleDecrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render(): JSX.Element {
    return (
      <CounterView
        count={this.state.count}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    )
  }
}
