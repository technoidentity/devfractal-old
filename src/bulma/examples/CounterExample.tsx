import * as React from 'react'

import { Button } from '../Button'
import { Text } from '../Text'
import { Section } from '../Section'
import { Columns } from '../Columns'
import { Column } from '../Column'
import { Box } from '../Box'

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
          <Button
            color="primary"
            size="large"
            buttonStyle="rounded"
            onClick={onIncrement}
          >
            +
          </Button>
          <Text size="1">{count}</Text>
          <Button
            color="danger"
            size="large"
            buttonStyle="rounded"
            onClick={onDecrement}
          >
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
