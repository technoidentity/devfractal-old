import React from 'react'
import { Button, Field } from '../../form'
import { Buttons } from '../../form/Button'

export const ButtonExample: React.SFC = () => (
  <>
    <Buttons alignment="centered">
      <Button variant="info" rounded state="focused">
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
    <Field grouped>
      <Button>Anchor</Button>
      <Button>Button</Button>
    </Field>
    <Field grouped>
      <Button variant="white">White</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="black">Black</Button>
      <Button variant="text">Text</Button>
    </Field>
    <Field grouped>
      <Button variant="primary">primary</Button>
      <Button variant="link">link</Button>
      <Button variant="info">info</Button>
      <Button variant="success">success</Button>
      <Button variant="warning">warning</Button>
      <Button variant="danger">Danger</Button>
    </Field>
    <Field grouped>
      <Button size="small">Small</Button>
      <Button>Default</Button>
      <Button size="normal">Normal</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Field>
    <Field grouped>
      <Button outlined>Outlined</Button>
      <Button variant="primary" outlined>
        Outlined
      </Button>
      <Button variant="link" outlined>
        Outlined
      </Button>
      <Button variant="info" outlined>
        Outlined
      </Button>
      <Button variant="success" outlined>
        Outlined
      </Button>
      <Button variant="danger" outlined>
        Outlined
      </Button>
    </Field>
    <Field grouped>
      <Button inverted>inverted</Button>
      <Button variant="primary" inverted>
        inverted
      </Button>
      <Button variant="link" inverted>
        inverted
      </Button>
      <Button variant="info" inverted>
        inverted
      </Button>
      <Button variant="success" inverted>
        inverted
      </Button>
      <Button variant="danger" inverted>
        inverted
      </Button>
    </Field>
    <Field grouped>
      <Button inverted outlined>
        inverted outlined
      </Button>
      <Button variant="primary" inverted outlined>
        inverted outlined
      </Button>
      <Button variant="link" inverted outlined>
        inverted outlined
      </Button>
      <Button variant="info" inverted outlined>
        inverted outlined
      </Button>
      <Button variant="success" inverted outlined>
        inverted outlined
      </Button>
      <Button variant="danger" inverted outlined>
        inverted outlined
      </Button>
    </Field>
    <Field grouped>
      <Button>Rounded</Button>
      <Button variant="primary" rounded>
        Rounded
      </Button>
      <Button variant="link" rounded>
        Rounded
      </Button>
      <Button variant="dark" rounded>
        Rounded
      </Button>
      <Button variant="success" rounded>
        Rounded
      </Button>
      <Button variant="black" rounded>
        Rounded
      </Button>
    </Field>
    <Field grouped>
      <Button>Normal</Button>
      <Button variant="success">Normal</Button>
      <Button variant="primary">Normal</Button>
      <Button variant="success">Normal</Button>
      <Button variant="warning">Normal</Button>
    </Field>
    <Field grouped>
      <Button state="hovered">Hover</Button>
      <Button variant="success" state="hovered">
        Hover
      </Button>
      <Button variant="primary" state="hovered">
        Hover
      </Button>
      <Button variant="success" state="hovered">
        Hover
      </Button>
      <Button variant="warning" state="hovered">
        Hover
      </Button>
    </Field>
    <Field grouped>
      <Button state="focused">Focus</Button>
      <Button variant="success" state="focused">
        Focus
      </Button>
      <Button variant="primary" state="focused">
        Focus
      </Button>
      <Button variant="success" state="focused">
        Focus
      </Button>
      <Button variant="warning" state="focused">
        Focus
      </Button>
    </Field>
    <Field grouped>
      <Button variant="primary" state="active">
        active
      </Button>
      <Button variant="success" state="active">
        active
      </Button>
      <Button variant="link" state="active">
        active
      </Button>
      <Button variant="info" state="active">
        active
      </Button>
      <Button variant="warning" state="active">
        active
      </Button>
      <Button variant="danger" state="active">
        active
      </Button>
    </Field>
    <Field grouped>
      <Button variant="primary" state="loading">
        loading
      </Button>
      <Button variant="success" state="loading">
        loading
      </Button>
      <Button variant="link" state="loading">
        loading
      </Button>
      <Button variant="info" state="loading">
        loading
      </Button>
      <Button variant="warning" state="loading">
        loading
      </Button>
      <Button variant="danger" state="loading">
        loading
      </Button>
    </Field>
    <Field grouped>
      <Button variant="primary" disabled>
        Disabled
      </Button>
      <Button variant="info" disabled>
        Disabled
      </Button>
      <Button variant="success" disabled>
        Disabled
      </Button>
      <Button variant="link" disabled>
        Disabled
      </Button>
      <Button variant="black" disabled>
        Disabled
      </Button>
      <Button variant="dark" disabled>
        Disabled
      </Button>
    </Field>
    <Field grouped>
      <Button variant="link">save changes</Button>
      <Button>Cancel</Button>
      <Button variant="danger">Delete Post</Button>
    </Field>
    <Field addons>
      <Button>
        <span className="icon is-small">
          <i className="fas fa-bold" />
        </span>
        <span>Bold</span>
      </Button>
      <Button>
        <span className="icon is-small">
          <i className="fas fa-italic" />
        </span>
        <span>Italic</span>
      </Button>
      <Button>
        <span className="icon is-small">
          <i className="fas fa-underline" />
        </span>
        <span>Underline</span>
      </Button>
    </Field>
    <Field addons>
      <Button>
        <span className="icon is-small">
          <i className="fas fa-align-left" />
        </span>
        <span>Left</span>
      </Button>
      <Button>
        <span className="icon is-small">
          <i className="fas fa-align-center" />
        </span>
        <span>Center</span>
      </Button>
      <Button>
        <span className="icon is-small">
          <i className="fas fa-align-right" />
        </span>
        <span>Right</span>
      </Button>
    </Field>
    <Buttons addons alignment="centered">
      <Button>Yes</Button>
      <Button>Maybe</Button>
      <Button>No</Button>
    </Buttons>
    <Buttons addons alignment="right">
      <Button>Yes</Button>
      <Button>Maybe</Button>
      <Button>No</Button>
    </Buttons>
    <Buttons addons>
      <Button variant="success" state="selected">
        Yes
      </Button>
      <Button>Maybe</Button>
      <Button>No</Button>
    </Buttons>

    <Buttons addons>
      <Button>Yes</Button>
      <Button variant="info" state="selected">
        Maybe
      </Button>
      <Button>No</Button>
    </Buttons>

    <Buttons addons>
      <Button>Yes</Button>
      <Button>Maybe</Button>
      <Button variant="danger" state="selected">
        No
      </Button>
    </Buttons>
  </>
)
