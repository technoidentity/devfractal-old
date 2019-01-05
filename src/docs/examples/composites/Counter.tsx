import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { MouseEvent } from 'react'
import { Value } from '../../../utils/Value'
import { Box, Button, Column, Columns, Icon, Text } from '../devfractal'

interface CounterViewProps {
  readonly count: number
  onIncrement(event: unknown): void
  onDecrement(event: unknown): void
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
    {({ value, set, reset }) => (
      <CounterView
        count={value}
        // tslint bug with no-unused-variable
        // tslint:disable restrict-plus-operands
        onIncrement={set<MouseEvent>((value, event) => {
          // tslint:disable-next-line: no-console
          console.log(event.nativeEvent)
          return value + 1
        })}
        onDecrement={set(value - 1)}
        onReset={reset}
      />
    )}
  </Value>
)
