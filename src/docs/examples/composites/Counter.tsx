import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Box,
  Button,
  Column,
  Columns,
  Icon,
  State,
  StateRenderProps,
  Text,
} from '../devfractal'

export const CounterInner: React.SFC<StateRenderProps<number>> = ({
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
          onClick={eset(count + 1)}
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
          onClick={eset(count - 1)}
          noControl
        >
          <Icon icon={faMinus} />
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

export const Counter: React.SFC = () => (
  <State initial={0} render={CounterInner} />
)
