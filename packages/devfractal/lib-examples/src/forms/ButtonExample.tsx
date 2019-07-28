import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faBold,
  faCheck,
  faItalic,
  faTimes,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Box,
  Button as ButtonComponent,
  ButtonsGroup,
  Field,
  Icon,
  Label,
  Section,
  Text,
  Title,
} from 'technoidentity-devfractal-ui-core'

const DynamicButtonExample: React.FC = () => {
  const [click, setClick] = React.useState(false)
  return (
    <Section>
      <Title size="4">Dynamic Button</Title>
      <ButtonComponent onClick={() => setClick(!click)}>
        {click ? 'Done' : 'Click Me!'}
      </ButtonComponent>
    </Section>
  )
}

const NormalButtonExample: React.FC = () => (
  <Section>
    <Title size="4">Normal button</Title>
    <ButtonComponent>Button</ButtonComponent>
  </Section>
)

const TypesOfButtonExample: React.FC = () => (
  <Section>
    <Title size="4">Types of button</Title>
    <Field grouped>
      <ButtonComponent>Anchor</ButtonComponent>
      <ButtonComponent>Button</ButtonComponent>
      <ButtonComponent>Submit input</ButtonComponent>
      <ButtonComponent>Reset input</ButtonComponent>
    </Field>
  </Section>
)

const ButtonColorsExample: React.FC = () => (
  <Section>
    <Title size="4">Colors</Title>
    <Field grouped>
      <ButtonComponent variant="white">White</ButtonComponent>
      <ButtonComponent variant="light">Light</ButtonComponent>
      <ButtonComponent variant="dark">Dark</ButtonComponent>
      <ButtonComponent variant="black">Black</ButtonComponent>
      <ButtonComponent variant="text">Text</ButtonComponent>
    </Field>
    <Field grouped>
      <ButtonComponent variant="primary">primary</ButtonComponent>
      <ButtonComponent variant="link">link</ButtonComponent>
      <ButtonComponent variant="info">info</ButtonComponent>
      <ButtonComponent variant="success">success</ButtonComponent>
      <ButtonComponent variant="warning">warning</ButtonComponent>
      <ButtonComponent variant="danger">Danger</ButtonComponent>
    </Field>
  </Section>
)

const ButtonSizesExample: React.FC = () => (
  <Section>
    <Title size="4">Sizes</Title>
    <Field grouped>
      <ButtonComponent size="small">Small</ButtonComponent>
      <ButtonComponent>Default</ButtonComponent>
      <ButtonComponent size="normal">Normal</ButtonComponent>
      <ButtonComponent size="medium">Medium</ButtonComponent>
      <ButtonComponent size="large">Large</ButtonComponent>
    </Field>
  </Section>
)

const ButtonStylesExample: React.FC = () => (
  <Section>
    <Title size="4">Styles</Title>
    <Label>Outlined</Label>
    <Field grouped>
      <ButtonComponent outlined>Outlined</ButtonComponent>
      <ButtonComponent variant="primary" outlined>
        Outlined
      </ButtonComponent>
      <ButtonComponent variant="link" outlined>
        Outlined
      </ButtonComponent>
      <ButtonComponent variant="info" outlined>
        Outlined
      </ButtonComponent>
      <ButtonComponent variant="success" outlined>
        Outlined
      </ButtonComponent>
      <ButtonComponent variant="danger" outlined>
        Outlined
      </ButtonComponent>
    </Field>

    <Label>Inverted</Label>
    <Field grouped>
      <ButtonComponent inverted>inverted</ButtonComponent>
      <ButtonComponent variant="primary" inverted>
        inverted
      </ButtonComponent>
      <ButtonComponent variant="link" inverted>
        inverted
      </ButtonComponent>
      <ButtonComponent variant="info" inverted>
        inverted
      </ButtonComponent>
      <ButtonComponent variant="success" inverted>
        inverted
      </ButtonComponent>
      <ButtonComponent variant="danger" inverted>
        inverted
      </ButtonComponent>
    </Field>

    <Label>Invert Outlined</Label>
    <Field grouped>
      <ButtonComponent inverted outlined>
        inverted outlined
      </ButtonComponent>
      <ButtonComponent variant="primary" inverted outlined>
        inverted outlined
      </ButtonComponent>
      <ButtonComponent variant="link" inverted outlined>
        inverted outlined
      </ButtonComponent>
      <ButtonComponent variant="info" inverted outlined>
        inverted outlined
      </ButtonComponent>
      <ButtonComponent variant="success" inverted outlined>
        inverted outlined
      </ButtonComponent>
      <ButtonComponent variant="danger" inverted outlined>
        inverted outlined
      </ButtonComponent>
    </Field>

    <Label>Rounded buttons</Label>
    <Field grouped>
      <ButtonComponent>Rounded</ButtonComponent>
      <ButtonComponent variant="primary" rounded>
        Rounded
      </ButtonComponent>
      <ButtonComponent variant="link" rounded>
        Rounded
      </ButtonComponent>
      <ButtonComponent variant="dark" rounded>
        Rounded
      </ButtonComponent>
      <ButtonComponent variant="success" rounded>
        Rounded
      </ButtonComponent>
      <ButtonComponent variant="danger" rounded>
        Rounded
      </ButtonComponent>
    </Field>
  </Section>
)

const ButtonStatesExample: React.FC = () => (
  <Section>
    <Title size="4">States</Title>
    <Label>Normal</Label>
    <Field grouped>
      <ButtonComponent>Normal</ButtonComponent>
      <ButtonComponent variant="success">Normal</ButtonComponent>
      <ButtonComponent variant="primary">Normal</ButtonComponent>
      <ButtonComponent variant="success">Normal</ButtonComponent>
      <ButtonComponent variant="warning">Normal</ButtonComponent>
    </Field>

    <Label>Hover</Label>
    <Field grouped>
      <ButtonComponent state="hovered">Hover</ButtonComponent>
      <ButtonComponent variant="success" state="hovered">
        Hover
      </ButtonComponent>
      <ButtonComponent variant="primary" state="hovered">
        Hover
      </ButtonComponent>
      <ButtonComponent variant="success" state="hovered">
        Hover
      </ButtonComponent>
      <ButtonComponent variant="warning" state="hovered">
        Hover
      </ButtonComponent>
    </Field>

    <Label>Focus</Label>

    <Field grouped>
      <ButtonComponent state="focused">Focus</ButtonComponent>
      <ButtonComponent variant="success" state="focused">
        Focus
      </ButtonComponent>
      <ButtonComponent variant="primary" state="focused">
        Focus
      </ButtonComponent>
      <ButtonComponent variant="success" state="focused">
        Focus
      </ButtonComponent>
      <ButtonComponent variant="warning" state="focused">
        Focus
      </ButtonComponent>
    </Field>

    <Label>Active</Label>
    <Field grouped>
      <ButtonComponent variant="primary" state="active">
        active
      </ButtonComponent>
      <ButtonComponent variant="success" state="active">
        active
      </ButtonComponent>
      <ButtonComponent variant="link" state="active">
        active
      </ButtonComponent>
      <ButtonComponent variant="info" state="active">
        active
      </ButtonComponent>
      <ButtonComponent variant="warning" state="active">
        active
      </ButtonComponent>
      <ButtonComponent variant="danger" state="active">
        active
      </ButtonComponent>
    </Field>

    <Label>Loading</Label>
    <Field grouped>
      <ButtonComponent variant="primary" state="loading">
        loading
      </ButtonComponent>
      <ButtonComponent variant="success" state="loading">
        loading
      </ButtonComponent>
      <ButtonComponent variant="link" state="loading">
        loading
      </ButtonComponent>
      <ButtonComponent variant="info" state="loading">
        loading
      </ButtonComponent>
      <ButtonComponent variant="warning" state="loading">
        loading
      </ButtonComponent>
      <ButtonComponent variant="danger" state="loading">
        loading
      </ButtonComponent>
    </Field>
  </Section>
)

const StaticButtonExample: React.FC = () => (
  <Section>
    <Label>Static</Label>
    <ButtonComponent state="static">Static</ButtonComponent>
  </Section>
)

const DisabledButtonExample: React.FC = () => (
  <Section>
    <Label>Disabled</Label>
    <Field grouped>
      <ButtonComponent variant="primary" disabled>
        Disabled
      </ButtonComponent>
      <ButtonComponent variant="info" disabled>
        Disabled
      </ButtonComponent>
      <ButtonComponent variant="success" disabled>
        Disabled
      </ButtonComponent>
      <ButtonComponent variant="link" disabled>
        Disabled
      </ButtonComponent>
      <ButtonComponent variant="black" disabled>
        Disabled
      </ButtonComponent>
      <ButtonComponent variant="dark" disabled>
        Disabled
      </ButtonComponent>
    </Field>
  </Section>
)

const ButtonWithFontAwesomeIconsExample: React.FC = () => (
  <Section>
    <Title size="4">With Font Awesome icons</Title>
    <Field grouped>
      <ButtonComponent>
        <Icon icon={faBold} />
      </ButtonComponent>
      <ButtonComponent>
        <Icon icon={faItalic} />
      </ButtonComponent>
      <ButtonComponent>
        <Icon icon={faUnderline} />
      </ButtonComponent>
    </Field>

    <Field grouped>
      <ButtonComponent>
        <Icon icon={faGithub} /> <Text>GitHub</Text>
      </ButtonComponent>
      <ButtonComponent variant="primary">
        <Icon icon={faTwitter} />
        <Text>Twitter</Text>
      </ButtonComponent>
      <ButtonComponent variant="success">
        <Icon icon={faCheck} />
        <Text>Save</Text>
      </ButtonComponent>
      <ButtonComponent outlined variant="danger">
        <Icon icon={faTimes} />
        <Text>Delete</Text>
      </ButtonComponent>
    </Field>

    <Field grouped>
      <ButtonComponent size="small">
        <Icon icon={faGithub} />
        <Text> GitHub</Text>
      </ButtonComponent>
      <ButtonComponent size="normal">
        <Icon icon={faGithub} /> <Text>GitHub</Text>
      </ButtonComponent>
      <ButtonComponent size="medium">
        <Icon icon={faGithub} /> <Text>GitHub</Text>
      </ButtonComponent>
      <ButtonComponent size="large">
        <Icon icon={faGithub} /> <Text>GitHub</Text>
      </ButtonComponent>
    </Field>
  </Section>
)

const ButtonGroupExample: React.FC = () => (
  <Section>
    <Title size="4">Button group</Title>
    <Field grouped>
      <ButtonComponent variant="link">save changes</ButtonComponent>
      <ButtonComponent>Cancel</ButtonComponent>
      <ButtonComponent variant="danger">Delete Post</ButtonComponent>
    </Field>
  </Section>
)

const ButtonAddonsExample: React.FC = () => (
  <Section>
    <Title size="4">Button addons</Title>
    <Field addons>
      <ButtonComponent>
        <Icon icon={faAlignLeft} />
        <Text> Left</Text>
      </ButtonComponent>
      <ButtonComponent>
        <Icon icon={faAlignCenter} />
        <Text>Center</Text>
      </ButtonComponent>
      <ButtonComponent>
        <Icon icon={faAlignRight} />
        <Text>Right</Text>
      </ButtonComponent>
    </Field>
  </Section>
)

const ButtonGroupWithAddonsExample: React.FC = () => (
  <Section>
    <Title size="4">Button group with addons</Title>
    <Field addons>
      <ButtonComponent>
        <Icon icon={faBold} />
        <Text>Bold</Text>
      </ButtonComponent>
      <ButtonComponent>
        <Icon icon={faItalic} />
        <Text>Italic</Text>
      </ButtonComponent>
      <ButtonComponent>
        <Icon icon={faUnderline} />
        <Text>Underline</Text>
      </ButtonComponent>
    </Field>
    <Field addons>
      <ButtonComponent>
        <Icon icon={faAlignLeft} /> <Text>Left</Text>
      </ButtonComponent>
      <ButtonComponent>
        <Icon icon={faAlignCenter} />
        <Text>Center</Text>
      </ButtonComponent>
      <ButtonComponent>
        <Icon icon={faAlignRight} />
        <Text>Right</Text>
      </ButtonComponent>
    </Field>
  </Section>
)

const ListOfButtonsExample: React.FC = () => (
  <Section>
    <Title size="4">List of buttons</Title>
    <ButtonsGroup>
      <ButtonComponent variant="success">Save changes</ButtonComponent>
      <ButtonComponent variant="info">Save and continue</ButtonComponent>
      <ButtonComponent variant="danger">Cancel</ButtonComponent>
    </ButtonsGroup>

    <ButtonsGroup size="large">
      <ButtonComponent>All</ButtonComponent>
      <ButtonComponent>Medium</ButtonComponent>
      <ButtonComponent>Size</ButtonComponent>
    </ButtonsGroup>

    <ButtonsGroup>
      <ButtonComponent>One</ButtonComponent>
      <ButtonComponent>Two</ButtonComponent>
      <ButtonComponent>Three</ButtonComponent>
      <ButtonComponent>Four</ButtonComponent>
      <ButtonComponent>Five</ButtonComponent>
      <ButtonComponent>Six</ButtonComponent>
      <ButtonComponent>Seven</ButtonComponent>
      <ButtonComponent>Eight</ButtonComponent>
      <ButtonComponent>Nine</ButtonComponent>
      <ButtonComponent>Ten</ButtonComponent>
      <ButtonComponent>Eleven</ButtonComponent>
      <ButtonComponent>Twelve</ButtonComponent>
      <ButtonComponent>Thirteen</ButtonComponent>
      <ButtonComponent>Fourteen</ButtonComponent>
      <ButtonComponent>Fifteen</ButtonComponent>
      <ButtonComponent>Sixteen</ButtonComponent>
      <ButtonComponent>Seventeen</ButtonComponent>
      <ButtonComponent>Eighteen</ButtonComponent>
      <ButtonComponent>Nineteen</ButtonComponent>
      <ButtonComponent>Twenty</ButtonComponent>
    </ButtonsGroup>
    <Box>
      <Label>Addons</Label>
      <ButtonsGroup addons>
        <ButtonComponent>Yes</ButtonComponent>
        <ButtonComponent>Maybe</ButtonComponent>
        <ButtonComponent>No</ButtonComponent>
      </ButtonsGroup>
      <Label>Addons centered</Label>
      <ButtonsGroup addons alignment="centered">
        <ButtonComponent>Yes</ButtonComponent>
        <ButtonComponent>Maybe</ButtonComponent>
        <ButtonComponent>No</ButtonComponent>
      </ButtonsGroup>
      <Label>Addons right</Label>
      <ButtonsGroup addons alignment="right">
        <ButtonComponent>Yes</ButtonComponent>
        <ButtonComponent>Maybe</ButtonComponent>
        <ButtonComponent>No</ButtonComponent>
      </ButtonsGroup>
    </Box>
    <Box>
      <ButtonsGroup addons>
        <ButtonComponent variant="success" state="selected">
          Yes
        </ButtonComponent>
        <ButtonComponent>Maybe</ButtonComponent>
        <ButtonComponent>No</ButtonComponent>
      </ButtonsGroup>

      <ButtonsGroup addons>
        <ButtonComponent>Yes</ButtonComponent>
        <ButtonComponent variant="info" state="selected">
          Maybe
        </ButtonComponent>
        <ButtonComponent>No</ButtonComponent>
      </ButtonsGroup>

      <ButtonsGroup addons>
        <ButtonComponent>Yes</ButtonComponent>
        <ButtonComponent>Maybe</ButtonComponent>
        <ButtonComponent variant="danger" state="selected">
          No
        </ButtonComponent>
      </ButtonsGroup>
    </Box>
  </Section>
)

export const Button: React.FC = () => (
  <>
    <DynamicButtonExample />
    <NormalButtonExample />
    <TypesOfButtonExample />
    <ButtonColorsExample />
    <ButtonSizesExample />
    <ButtonStylesExample />
    <ButtonStatesExample />
    <StaticButtonExample />
    <DisabledButtonExample />
    <ButtonWithFontAwesomeIconsExample />
    <ButtonGroupExample />
    <ButtonAddonsExample />
    <ButtonGroupWithAddonsExample />
    <ListOfButtonsExample />
  </>
)
