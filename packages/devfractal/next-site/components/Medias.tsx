import React from 'react'
import {
  Container,
  Media,
  MediaContent,
  MediaLeft,
  Text,
} from 'devfractal-ui-core'

export const FormMedia: React.FC = () => (
  <Container style={{ margin: '25px' }}>
    <Media style={{ borderTop: 'none', backgroundColor: '#5A77D6' }}>
      <MediaLeft style={{ marginTop: '1rem' }}>
        <img src="/static/form.png" alt="form icon" />
      </MediaLeft>
      <MediaContent>
        <Text
          textWeight="bold"
          textColor="white"
          className="is-size-4-desktop is-size-5-mobile"
        >
          Form
        </Text>
        <Text textSize="6" textColor="white">
          The indispensable form controls designed for clarity
        </Text>
      </MediaContent>
    </Media>
  </Container>
)

export const ColumnsMedia: React.FC = () => (
  <Container style={{ margin: '25px' }}>
    <Media style={{ borderTop: 'none', backgroundColor: '#5A77D6' }}>
      <MediaLeft style={{ marginTop: '1rem' }}>
        <img src="/static/column.png" alt="columns icon" />
      </MediaLeft>
      <MediaContent>
        <Text
          textWeight="bold"
          textColor="white"
          className="is-size-4-desktop is-size-5-mobile"
        >
          Columns
        </Text>
        <Text textSize="6" textColor="white">
          The power of the Flexbox in a very simple design interface
        </Text>
      </MediaContent>
    </Media>
  </Container>
)

export const LayoutMedia: React.FC = () => (
  <Container style={{ margin: '25px' }}>
    <Media style={{ borderTop: 'none', backgroundColor: '#5A77D6' }}>
      <MediaLeft style={{ marginTop: '1rem' }}>
        <img src="/static/layout.png" alt="layout icon" />
      </MediaLeft>
      <MediaContent>
        <Text
          textWeight="bold"
          textColor="white"
          className="is-size-4-desktop is-size-5-mobile"
        >
          Layout
        </Text>
        <Text textSize="6" textColor="white">
          Design the structure of your webpage with css classes
        </Text>
      </MediaContent>
    </Media>
  </Container>
)

export const ElementsMedia: React.FC = () => (
  <Container style={{ margin: '25px' }}>
    <Media style={{ borderTop: 'none', backgroundColor: '#5A77D6' }}>
      <MediaLeft style={{ marginTop: '1rem' }}>
        <img src="/static/elements.png" alt="elements icon" />
      </MediaLeft>
      <MediaContent>
        <Text
          textWeight="bold"
          textColor="white"
          className="is-size-4-desktop is-size-5-mobile"
        >
          Elements
        </Text>
        <Text textSize="6" textColor="white">
          Essential interface elements that only require a single css class
        </Text>
      </MediaContent>
    </Media>
  </Container>
)

export const ComponentsMedia: React.FC = () => (
  <Container style={{ margin: '25px' }}>
    <Media style={{ borderTop: 'none', backgroundColor: '#5A77D6' }}>
      <MediaLeft style={{ marginTop: '1rem' }}>
        <img src="/static/components.png" alt="components icon" />
      </MediaLeft>
      <MediaContent>
        <Text
          textWeight="bold"
          textColor="white"
          className="is-size-4-desktop is-size-5-mobile"
        >
          Components
        </Text>
        <Text textSize="6" textColor="white">
          Advanced multi-part components with lots of responsibilities
        </Text>
      </MediaContent>
    </Media>
  </Container>
)

export const ModifiersMedia: React.FC = () => (
  <Container style={{ margin: '25px' }}>
    <Media style={{ borderTop: 'none', backgroundColor: '#5A77D6' }}>
      <MediaLeft style={{ marginTop: '1rem' }}>
        <img src="/static/modifiers.png" alt="modifiers icon" />
      </MediaLeft>
      <MediaContent>
        <Text
          textWeight="bold"
          textColor="white"
          className="is-size-4-desktop is-size-5-mobile"
        >
          Modifiers
        </Text>
        <Text textSize="6" textColor="white">
          An easy-to-read naming system being designed for humans
        </Text>
      </MediaContent>
    </Media>
  </Container>
)

export const CompositesMedia: React.FC = () => (
  <Container style={{ margin: '25px' }}>
    <Media style={{ borderTop: 'none', backgroundColor: '#5A77D6' }}>
      <MediaLeft style={{ marginTop: '1rem' }}>
        <img src="/static/composites.png" alt="composites icon" />
      </MediaLeft>
      <MediaContent>
        <Text
          textWeight="bold"
          textColor="white"
          className="is-size-4-desktop is-size-5-mobile"
        >
          Composites
        </Text>
        <Text textSize="6" textColor="white">
          More examples using multiple components
        </Text>
      </MediaContent>
    </Media>
  </Container>
)

export const CrudMedia: React.FC = () => (
  <Container style={{ margin: '25px' }}>
    <Media style={{ borderTop: 'none', backgroundColor: '#5A77D6' }}>
      <MediaLeft style={{ marginTop: '1rem' }}>
        <img src="/static/composites.png" alt="crud icon" />
      </MediaLeft>
      <MediaContent>
        <Text
          textWeight="bold"
          textColor="white"
          className="is-size-4-desktop is-size-5-mobile"
        >
          Crud
        </Text>
        <Text textSize="6" textColor="white">
          Create Crud components, rails style!
        </Text>
      </MediaContent>
    </Media>
  </Container>
)
