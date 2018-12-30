import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Icon } from '../../elements'
import { Button } from '../../form'
import { Section } from '../../layout'
import { Text } from '../../modifiers'
import { logger } from '../common'

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
  <Section>
    <Button variant="primary" size="medium" onClick={onIncrement}>
      <Icon icon={faPlus} />
    </Button>

    <Text as="h1" textSize="2">
      {count}
    </Text>
    <Button variant="danger" size="medium" onClick={onDecrement}>
      <Icon icon={faMinus} />
    </Button>
  </Section>
)

export const Counter: React.SFC = () => (
  <CounterView
    count={0}
    onIncrement={() => logger('increment')}
    onDecrement={() => logger('decrement')}
  />
)
