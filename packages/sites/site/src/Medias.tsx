import {
  Container,
  Media,
  MediaContent,
  MediaLeft,
  Text,
} from 'devfractal-ui-core'
import React from 'react'
import columnsIcon from '../src/images/column.png'
import componentsIcon from '../src/images/components.png'
import compositesIcon from '../src/images/composites.png'
import elementsIcon from '../src/images/elements.png'
import formIcon from '../src/images/form.png'
import layoutIcon from '../src/images/layout.png'
import modifiersIcon from '../src/images/modifiers.png'

export const FormMedia: React.FC = () => (
  <Container style={{ margin: '25px' }}>
    <Media style={{ borderTop: 'none', backgroundColor: '#5A77D6' }}>
      <MediaLeft style={{ marginTop: '1rem' }}>
        <img src={formIcon} alt="form icon" />
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
        <img src={columnsIcon} alt="columns icon" />
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
        <img src={layoutIcon} alt="layout icon" />
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
        <img src={elementsIcon} alt="elements icon" />
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
        <img src={componentsIcon} alt="components icon" />
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
        <img src={modifiersIcon} alt="modifiers icon" />
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
        <img src={compositesIcon} alt="composites icon" />
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
        <img src={compositesIcon} alt="composites icon" />
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
