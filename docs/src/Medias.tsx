import columnsIcon from 'images/columnsIcon.png'
import componentsIcon from 'images/componentsIcon.png'
import compositesIcon from 'images/compositesIcon.png'
import elementsIcon from 'images/elementsIcon.png'
import formIcon from 'images/formIcon.png'
import layoutIcon from 'images/layoutIcon.png'
import modifiersIcon from 'images/modifiersIcon.png'
import React from 'react'
import {
  Media,
  MediaContent,
  MediaLeft,
  SubTitle,
  Text,
} from 'technoidentity-devfractal'

export const FormMedia: React.FC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
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
      <SubTitle size="6" textColor="white">
        The indispensable form controls designed for clarity
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ColumnsMedia: React.FC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
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
      <SubTitle size="6" textColor="white">
        The power of the Flexbox in a very simple design interface
      </SubTitle>
    </MediaContent>
  </Media>
)

export const LayoutMedia: React.FC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
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
      <SubTitle size="6" textColor="white">
        Design the structure of your webpage with css classes
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ElementsMedia: React.FC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
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
      <SubTitle size="6" textColor="white">
        Essential interface elements that only require a single css class
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ComponentsMedia: React.FC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
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
      <SubTitle size="6" textColor="white">
        Advanced multi-part components with lots of responsibilities
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ModifiersMedia: React.FC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
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
      <SubTitle size="6" textColor="white">
        An easy-to-read naming system being designed for humans
      </SubTitle>
    </MediaContent>
  </Media>
)

export const CompositesMedia: React.FC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
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
      <SubTitle size="6" textColor="white">
        More examples using multiple components
      </SubTitle>
    </MediaContent>
  </Media>
)

export const CrudMedia: React.FC = () => (
  <Media className="box" shadowLess style={{ backgroundColor: '#004267' }}>
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
      <SubTitle size="6" textColor="white">
        Create Crud components, rails style!
      </SubTitle>
    </MediaContent>
  </Media>
)
