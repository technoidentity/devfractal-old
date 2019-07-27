import Cleave from 'cleave.js/react'
import React from 'react'
import { Section } from 'technoidentity-devfractal-ui-core'

export const CleaveComponent: React.FC = () => (
  <Section>
    <Cleave
      className="input"
      placeholder="Enter your credit card number"
      options={{ creditCard: true }}
    />
    <br />
    <Cleave
      className="input"
      placeholder="datepattern y/m/d"
      options={{ date: true, datePattern: ['y', 'm', 'd'] }}
    />
    <br />
    <Cleave
      className="input"
      placeholder="datepattern m/y"
      options={{ date: true, datePattern: ['m', 'y'] }}
    />
    <br />
    <Cleave
      className="input"
      placeholder="time h:m:s"
      options={{ time: true, datePattern: ['h', 'm', 's'] }}
    />
    <br />
    <Cleave
      className="input"
      placeholder="time h:m"
      options={{ time: true, datePattern: ['h', 'm'] }}
    />
    <br />
    <Cleave
      className="input"
      placeholder="uppercase blocks"
      options={{ blocks: [4, 3, 3, 4], uppercase: true }}
    />
    <br />
    <Cleave
      className="input"
      placeholder="uppercase delimiter"
      options={{ delimiter: '.', blocks: [3, 3, 3], uppercase: true }}
    />
    <br />
    <Cleave
      className="input"
      placeholder="uppercase delimiters"
      options={{
        delimiters: ['.', '.', '-'],
        blocks: [3, 3, 3, 2],
        uppercase: true,
      }}
    />
    <br />
    <Cleave
      className="input"
      options={{
        prefix: 'PREFIX',
        delimiter: '-',
        blocks: [6, 4, 4, 4],
        uppercase: true,
      }}
    />
    <br />
    <Cleave
      className="input"
      placeholder="numeral thousand"
      options={{ numeral: true, numeralThousandsGroupStyle: 'thousand' }}
    />
  </Section>
)
