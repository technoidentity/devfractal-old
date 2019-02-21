import React from 'react'
import { Media, MediaContent, MediaLeft, SubTitle, Text } from '../devfractal'
import columnsicon from './images/columnsicon.png'
import componentsicon from './images/componentsicon.png'
import compositesicon from './images/compositesicon.png'
import elementsicon from './images/elementsicon.png'
import formicon from './images/formicon.png'
import layouticon from './images/layouticon.png'
import modifiersicon from './images/modifiersicon.png'

export const FormMedia: React.SFC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
    <MediaLeft style={{ marginTop: '1rem' }}>
      <img src={formicon} />
    </MediaLeft>
    <MediaContent>
      <Text
        textWeight="bold"
        textColor="white"
        className="is-size-4-desktop is-size-5-mobile"
      >
        Form
      </Text>
      <SubTitle size="6" textColor="white">
        The indispensable form controls designed for clarity
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ColumnsMedia: React.SFC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
    <MediaLeft style={{ marginTop: '1rem' }}>
      <img src={columnsicon} />
    </MediaLeft>
    <MediaContent>
      <Text
        textWeight="bold"
        textColor="white"
        className="is-size-4-desktop is-size-5-mobile"
      >
        Columns
      </Text>
      <SubTitle size="6" textColor="white">
        The power of the Flexbox in a very simple design interface
      </SubTitle>
    </MediaContent>
  </Media>
)

export const LayoutMedia: React.SFC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
    <MediaLeft style={{ marginTop: '1rem' }}>
      <img src={layouticon} />
    </MediaLeft>
    <MediaContent>
      <Text
        textWeight="bold"
        textColor="white"
        className="is-size-4-desktop is-size-5-mobile"
      >
        Layout
      </Text>
      <SubTitle size="6" textColor="white">
        Design the structure of your webpage with css classes
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ElementsMedia: React.SFC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
    <MediaLeft style={{ marginTop: '1rem' }}>
      <img src={elementsicon} />
    </MediaLeft>
    <MediaContent>
      <Text
        textWeight="bold"
        textColor="white"
        className="is-size-4-desktop is-size-5-mobile"
      >
        Elements
      </Text>
      <SubTitle size="6" textColor="white">
        Essential interface elements that only require a single css class
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ComponentsMedia: React.SFC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
    <MediaLeft style={{ marginTop: '1rem' }}>
      <img src={componentsicon} />
    </MediaLeft>
    <MediaContent>
      <Text
        textWeight="bold"
        textColor="white"
        className="is-size-4-desktop is-size-5-mobile"
      >
        Components
      </Text>
      <SubTitle size="6" textColor="white">
        Advanced multi-part components with lots of responsibilities
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ModifiersMedia: React.SFC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
    <MediaLeft style={{ marginTop: '1rem' }}>
      <img src={modifiersicon} />
    </MediaLeft>
    <MediaContent>
      <Text
        textWeight="bold"
        textColor="white"
        className="is-size-4-desktop is-size-5-mobile"
      >
        Modifiers
      </Text>
      <SubTitle size="6" textColor="white">
        An easy-to-read naming system being designed for humans
      </SubTitle>
    </MediaContent>
  </Media>
)

export const CompositesMedia: React.SFC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
    <MediaLeft style={{ marginTop: '1rem' }}>
      <img src={compositesicon} />
    </MediaLeft>
    <MediaContent>
      <Text
        textWeight="bold"
        textColor="white"
        className="is-size-4-desktop is-size-5-mobile"
      >
        Composites
      </Text>
      <SubTitle size="6" textColor="white">
        More examples using multiple components
      </SubTitle>
    </MediaContent>
  </Media>
)
