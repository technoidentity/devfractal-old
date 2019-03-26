import React from 'react'
import { render } from 'react-dom'
import { Button, Section } from './lib'

render(
  <Section>
    <Button variant="danger">Hello</Button>
  </Section>,
  document.getElementById('root'),
)
