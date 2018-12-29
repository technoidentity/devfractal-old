import { faAccusoft, faWpforms } from '@fortawesome/free-brands-svg-icons'
import {
  faCogs,
  faColumns,
  faCube,
  faCubes,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Icon, SubTitle, Title } from '../bulma/elements'
import { Media, MediaContent, MediaLeft } from '../bulma/layout'

export const FormMedia: React.SFC = () => (
  <Media className="notification is-light">
    <MediaLeft>
      <Icon icon={faWpforms} size="2x" textColor="link" />
    </MediaLeft>
    <MediaContent>
      <Title>Form</Title>
      <SubTitle size="6">
        The indispensable form controls designed for maximum clarity
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ColumnsMedia: React.SFC = () => (
  <Media className="notification is-light">
    <MediaLeft>
      <Icon icon={faColumns} size="2x" textColor="warning" />
    </MediaLeft>
    <MediaContent>
      <Title>Columns</Title>
      <SubTitle size="6">The power of Flexbox in a simple interface</SubTitle>
    </MediaContent>
  </Media>
)

export const LayoutMedia: React.SFC = () => (
  <Media className="notification is-light">
    <MediaLeft>
      <Icon icon={faWarehouse} size="2x" textColor="success" />
    </MediaLeft>
    <MediaContent>
      <Title>Layout</Title>
      <SubTitle size="6">
        Design the structure of your webpage with these css classes
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ElementsMedia: React.SFC = () => (
  <Media className="notification is-light">
    <MediaLeft>
      <Icon icon={faCube} size="2x" textColor="danger" />
    </MediaLeft>
    <MediaContent>
      <Title>Elements</Title>
      <SubTitle size="6">
        Essential interface elements that only require a single css class
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ComponentsMedia: React.SFC = () => (
  <Media className="notification is-light">
    <MediaLeft>
      <Icon icon={faCubes} size="2x" textColor="danger" />
    </MediaLeft>
    <MediaContent>
      <Title>Components</Title>
      <SubTitle size="6">
        Advanced multi-part components with lots of responsibilities
      </SubTitle>
    </MediaContent>
  </Media>
)

export const ModifiersMedia: React.SFC = () => (
  <Media className="notification is-light">
    <MediaLeft>
      <Icon icon={faCogs} size="2x" textColor="grey" />
    </MediaLeft>
    <MediaContent>
      <Title>Modifiers</Title>
      <SubTitle size="6">
        An easy-to-read naming system designed for humans
      </SubTitle>
    </MediaContent>
  </Media>
)

export const CompositesMedia: React.SFC = () => (
  <Media className="notification is-light">
    <MediaLeft>
      <Icon icon={faAccusoft} size="2x" textColor="black-bis" />
    </MediaLeft>
    <MediaContent>
      <Title>Composites</Title>
      <SubTitle size="6">
        More complex examples using multiple components
      </SubTitle>
    </MediaContent>
  </Media>
)
