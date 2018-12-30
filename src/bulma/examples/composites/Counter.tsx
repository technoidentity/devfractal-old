import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Column, Columns } from '../../columns'
import { Box, Icon } from '../../elements'
import { Button } from '../../form'
import { Section } from '../../layout'
import { Text } from '../../modifiers'

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
          <Button variant="primary" size="medium" onClick={onIncrement}>
            <Icon icon={faPlus} />
          </Button>

          <Text textAlignment="centered" textSize="2">
            {count}
          </Text>
          <Button variant="danger" size="medium" onClick={onDecrement}>
            <Icon icon={faMinus} />
          </Button>
        </Box>
      </Section>
    </Column>
  </Columns>
)

interface CounterProps {
  readonly count: number
}

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
