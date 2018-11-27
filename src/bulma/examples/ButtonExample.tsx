import * as React from 'react'

import { Button, Buttons } from '../Button'

export const ButtonExample: React.SFC = () => (
  <Buttons alignment="centered">
    <Button color="primary">Primary</Button>
    <Button color="success">success</Button>
    <Button>danger</Button>
    <Button color="info">info</Button>
    <Button color="dark"> dark</Button>
  </Buttons>
)
