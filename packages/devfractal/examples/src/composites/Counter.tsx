import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Box, Button, Column, Columns, Icon, Text } from '@stp/ui'
import React from 'react'

interface CounterProps {
  readonly value: number
  handleIncrement(): void
  handleDecrement(): void
  handleReset(): void
}

export const CounterInner: React.FC<CounterProps> = ({
  value: count,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => (
  <Columns>
    <Column narrow>
      <Box textAlignment="centered">
        <Button
          variant="info"
          size="medium"
          onClick={handleIncrement}
          noControl
        >
          <Icon icon={faPlus} />
        </Button>
        <Text as="h1" textSize="2">
          {count}
        </Text>
        <Button
          variant="success"
          size="medium"
          onClick={handleDecrement}
          noControl
        >
          <Icon icon={faMinus} />
        </Button>
      </Box>
    </Column>
    <Column textAlignment="centered">
      <Button noControl variant="danger" size="medium" onClick={handleReset}>
        Reset
      </Button>
    </Column>
  </Columns>
)

export const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0)
  return (
    <CounterInner
      value={count}
      handleIncrement={() => setCount(count + 1)}
      handleDecrement={() => setCount(count - 1)}
      handleReset={() => setCount(0)}
    />
  )
}
