import Cleave from 'cleave.js/react'
import React from 'react'

export const CleaveComponent: React.SFC = () => (
  <>
    <Cleave
      placeholder="Enter your credit card number"
      options={{ creditCard: true }}
    />
    <br />
    <Cleave
      placeholder="datepattern y/m/d"
      options={{ date: true, datePattern: ['y', 'm', 'd'] }}
    />
    <br />
    <Cleave
      placeholder="datepattern m/y"
      options={{ date: true, datePattern: ['m', 'y'] }}
    />
    <br />
    <Cleave
      placeholder="time h:m:s"
      options={{ time: true, datePattern: ['h', 'm', 's'] }}
    />
    <br />
    <Cleave
      placeholder="time h:m"
      options={{ time: true, datePattern: ['h', 'm'] }}
    />
    <br />
    <Cleave
      placeholder="uppercase blocks"
      options={{ blocks: [4, 3, 3, 4], uppercase: true }}
    />
    <br />
    <Cleave
      placeholder="uppercase delimiter"
      options={{ delimiter: '.', blocks: [3, 3, 3], uppercase: true }}
    />
    <br />
    <Cleave
      placeholder="uppercase delimiters"
      options={{
        delimiters: ['.', '.', '-'],
        blocks: [3, 3, 3, 2],
        uppercase: true,
      }}
    />
    <br />
    <Cleave
      options={{
        prefix: 'PREFIX',
        delimiter: '-',
        blocks: [6, 4, 4, 4],
        uppercase: true,
      }}
    />
    <br />
    <Cleave
      placeholder="numeral thousand"
      options={{ numeral: true, numeralThousandsGroupStyle: 'thousand' }}
    />
  </>
)
