import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Button, Field } from '../bulma/form'

storiesOf('Button ', module)
  .add('with variant', () => (
    <Field grouped>
      <Button variant="primary" onClick={action('onClick')}>
        primary
      </Button>
      <Button variant="link">link</Button>
      <Button variant="white">white</Button>
      <Button variant="dark">dark</Button>
      <Button variant="success">success</Button>
      <Button variant="warning">warning</Button>
      <Button variant="danger">danger</Button>
      <Button variant="light">light</Button>
      <Button variant="text">text</Button>
      <Button variant="black">black</Button>
      <Button variant="info">info</Button>
    </Field>
  ))
  .add('with size', () => (
    <Field grouped>
      <Button size="large">large</Button>
      <Button size="small">small</Button>
      <Button size="normal">normal</Button>
      <Button size="medium">medium</Button>
    </Field>
  ))
  .add('with state', () => (
    <Field grouped>
      <Button state="active">active</Button>
      <Button state="focused">focus</Button>
      <Button state="hovered">hover</Button>
      <Button state="loading">loading</Button>
      <Button state="static">static</Button>
    </Field>
  ))
  .add('disabled button', () => <Button disabled>disabled</Button>)
  .add('fullWidth button', () => <Button fullWidth>fullwidth</Button>)
  .add('rounded button', () => <Button rounded>rounded</Button>)
  .add('inverted button', () => (
    <Button variant="primary" inverted>
      inverted
    </Button>
  ))
  .add('outlined button', () => (
    <Button variant="primary" outlined>
      outlined
    </Button>
  ))
  .add('button addons', () => (
    <Field addons>
      <Button>1</Button>
      <Button>2</Button>
    </Field>
  ))
  .add('button addons alignment centered', () => (
    <Field addons addonsModifier="addons-centered">
      <Button>1</Button>
      <Button>2</Button>
    </Field>
  ))
  .add('button addons alignment right', () => (
    <Field addons addonsModifier="addons-right">
      <Button>1</Button>
      <Button>2</Button>
    </Field>
  ))

  .add('with paddingLess', () => (
    <Field grouped>
      <Button paddingLess>paddingLess</Button>
      <Button>padding</Button>
    </Field>
  ))

  .add('invisible', () => (
    <div>
      <Button invisible>invisible</Button>
      <Button>visible</Button>
    </div>
  ))
  .add('shadowless', () => (
    <Field grouped>
      <Button shadowLess>shadowless</Button>
      <Button>shadow</Button>
    </Field>
  ))
  .add('radiusless', () => (
    <Field grouped>
      <Button radiusLess>radiusLess</Button>
      <Button>with radius</Button>
    </Field>
  ))
  .add('floating pulled-left', () => (
    <div>
      <Button noControl>Button1</Button>
      <Button noControl floating="pulled-left">
        pulled left button 2
      </Button>
      <Button noControl>Button3</Button>
    </div>
  ))
  .add('floating pulled-right', () => (
    <div>
      <Button noControl>Button 1</Button>
      <Button noControl floating="pulled-right">
        pulled right button 2
      </Button>
      <Button noControl>Button 3</Button>
    </div>
  ))
