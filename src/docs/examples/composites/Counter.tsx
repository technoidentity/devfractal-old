import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Value } from '../../../utils/Value'
import { Box, Button, Column, Columns, Icon, Text } from '../devfractal'

interface CounterViewProps {
  readonly count: number
  onIncrement(): void
  onDecrement(): void
  onReset(): void
}

export const CounterView: React.SFC<CounterViewProps> = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
}) => (
  <Columns>
    <Column narrow>
      <Box textAlignment="centered">
        <Button variant="info" size="medium" onClick={onIncrement} noControl>
          <Icon icon={faPlus} />
        </Button>
        <Text as="h1" textSize="2">
          {count}
        </Text>
        <Button variant="success" size="medium" onClick={onDecrement} noControl>
          <Icon icon={faMinus} />
        </Button>
      </Box>
    </Column>
    <Column textAlignment="centered">
      <Button noControl variant="danger" size="medium" onClick={onReset}>
        Reset
      </Button>
    </Column>
  </Columns>
)

export const Counter: React.SFC = () => (
  <Value initial={0}>
    {({ value, eset, reset }) => (
      <CounterView
        count={value}
        // tslint bug with no-unused-variable
        // tslint:disable restrict-plus-operands
        onIncrement={eset(value + 1)}
        onDecrement={eset(value - 1)}
        onReset={reset}
      />
    )}
  </Value>
)
