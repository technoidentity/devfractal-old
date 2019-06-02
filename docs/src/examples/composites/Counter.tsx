import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import {
  Box,
  Button,
  Column,
  Columns,
  State,
  StateRenderProps,
  Text,
} from 'technoidentity-devfractal'

export const CounterInner: React.FC<StateRenderProps<number>> = ({
  value: count,
  eset,
  reset,
}) => (
  <Columns>
    <Column narrow>
      <Box textAlignment="centered">
        <Button
          variant="info"
          size="medium"
          onClick={eset(+count + 1)}
          noControl
        >
          <FaPlus />
        </Button>
        <Text as="h1" textSize="2">
          {count}
        </Text>
        <Button
          variant="success"
          size="medium"
          onClick={eset(+count - 1)}
          noControl
        >
          <FaMinus />
        </Button>
      </Box>
    </Column>
    <Column textAlignment="centered">
      <Button noControl variant="danger" size="medium" onClick={reset}>
        Reset
      </Button>
    </Column>
  </Columns>
)

export const Counter: React.FC = () => (
  <State initial={0} render={CounterInner} />
)
