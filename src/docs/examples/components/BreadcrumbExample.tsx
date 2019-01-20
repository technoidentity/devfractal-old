import {
  faBook,
  faHome,
  faPuzzlePiece,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Route } from 'react-router'
import { SimpleRedirect } from '../../../utils'
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Icon,
  Section,
} from '../devfractal'

export const BreadcrumbAlignments: React.SFC = () => (
  <>
    <Container>
      <Breadcrumb alignment="centered">
        <BreadcrumbItem>Bulma</BreadcrumbItem>
        <BreadcrumbItem>Documentation</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </Container>
    <Container>
      <Breadcrumb alignment="right">
        <BreadcrumbItem>Bulma</BreadcrumbItem>
        <BreadcrumbItem>Documentation</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </Container>
  </>
)

export const BreadcrumbIcons: React.SFC = () => (
  <Container>
    <Breadcrumb>
      <BreadcrumbItem>
        <Icon icon={faHome} />
        Bulma
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon icon={faBook} />
        Documentation
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Icon icon={faPuzzlePiece} />
        Components
      </BreadcrumbItem>

      <BreadcrumbItem active>
        <Icon icon={faThumbsUp} />
        Breadcrumb
      </BreadcrumbItem>
    </Breadcrumb>
  </Container>
)

export const BreadcrumbSizes: React.SFC = () => (
  <Container>
    <Breadcrumb size="small">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb size="medium">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb size="large">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  </Container>
)

export const BreadcrumbSeparators: React.SFC = () => (
  <Container>
    <Breadcrumb separator="arrow">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator="bullet">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator="dot">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator="succeeds">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  </Container>
)

export const BreadcrumbExample: React.SFC = () => (
  <>
    <Section>
      <Breadcrumb baseURL="/components/breadcrumb">
        <BreadcrumbItem value="alignments">Alignment</BreadcrumbItem>
        <BreadcrumbItem value="icons">Icons</BreadcrumbItem>
        <BreadcrumbItem value="separators">Separators</BreadcrumbItem>
        <BreadcrumbItem value="sizes">Sizes</BreadcrumbItem>
      </Breadcrumb>
    </Section>

    <Container>
      <SimpleRedirect
        exact
        from="/components/breadcrumb"
        to="/components/breadcrumb/alignments"
      />
      <Route
        path="/components/breadcrumb/alignments"
        exact
        component={BreadcrumbAlignments}
      />
      <Route
        path="/components/breadcrumb/icons"
        exact
        component={BreadcrumbIcons}
      />
      <Route
        path="/components/breadcrumb/separators"
        component={BreadcrumbSeparators}
        exact
      />
      <Route
        path="/components/breadcrumb/sizes"
        component={BreadcrumbSizes}
        exact
      />
    </Container>
  </>
)
