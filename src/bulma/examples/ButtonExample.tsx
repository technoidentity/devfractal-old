import * as React from 'react'

import { Button, Buttons } from '../Button'
import { logger } from './common'
import { Field } from '../Field'

export const ButtonExample: React.SFC = () => (
  <div>
    <Buttons alignment="centered">
      <Button
        className="is-info is-selected"
        buttonStyle="rounded"
        state="focused"
        onClick={() => logger('click')}
      >
        Primary
      </Button>
      <Button state="static">success</Button>
      <Button state="active">danger</Button>
      <Button state="focused">info</Button>
      <Button> dark</Button>
    </Buttons>

    <Field className="has-addons has-addons-centered">
      <div className="control">
        <Button className="is-primary" display="medium">
          Left
        </Button>
      </div>
      <div className="control">
        <Button disabled>Center</Button>
      </div>
      <div className="control">
        <Button onClick={() => logger('clicked')}>Right</Button>
      </div>
    </Field>
  </div>
)
