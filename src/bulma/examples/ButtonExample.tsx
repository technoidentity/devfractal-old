import * as React from 'react'

import { Button, Buttons } from '../form/Button'
import { Field } from '../form/Field'

export const ButtonExample: React.SFC = () => (
  <div>
    <Buttons alignment="centered" floating="pulled-left">
      <Button variant="info" buttonStyle="rounded" state="focused">
        Primary
      </Button>
      <Button state="static" invisible>
        success
      </Button>
      <Button state="active">danger</Button>
      <Button state="focused">info</Button>
      <Button> dark</Button>
    </Buttons>

    <Field addons addonsModifier="addons-centered">
      <Button className="is-primary" size="medium">
        Left
      </Button>
      <Button disabled>Center</Button>
      <Button>Right</Button>
    </Field>
  </div>
)
