import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Value } from 'react-powerplug'
import { Column, Columns } from '../devfractal'
import { Box, Button, Icon, Text } from '../devfractal'

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
  <Columns>
    <Column narrow>
      <Box textAlignment="centered">
        <Button variant="primary" size="medium" onClick={onIncrement} noControl>
          <Icon icon={faPlus} />
        </Button>

        <Text as="h1" textSize="2">
          {count}
        </Text>
        <Button variant="danger" size="medium" onClick={onDecrement} noControl>
          <Icon icon={faMinus} />
        </Button>
      </Box>
    </Column>
  </Columns>
)

export const Counter: React.SFC = () => (
  <Value initial={{ count: 0 }}>
    {({ value, set }) => (
      <CounterView
        count={value.count}
        // tslint bug with no-unused-variable
        // tslint:disable restrict-plus-operands
        onIncrement={() => set({ count: value.count + 1 })}
        onDecrement={() => set({ count: value.count - 1 })}
      />
    )}
  </Value>
)
