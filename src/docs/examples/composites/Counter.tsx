import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Value } from 'react-powerplug'
import { Icon } from '../../../devfractal/elements'
import { Button } from '../../../devfractal/form'
import { Section } from '../../../devfractal/layout'
import { Text } from '../../../devfractal/modifiers'

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
