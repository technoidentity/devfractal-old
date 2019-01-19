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
  Field,
  Icon,
  Section,
  Title,
} from '../devfractal'

export const BreadcrumbAlignments: React.SFC = () => (
  <Section>
    <Container>
      <Title size="4">Alignment</Title>
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
  </Section>
)

export const BreadcrumbIcons: React.SFC = () => (
  <Section>
    <Container>
      <Title size="4">Icons</Title>
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
  </Section>
)

export const BreadcrumbSizes: React.SFC = () => (
  <Section>
    <Container>
      <Title size="4">Sizes</Title>
      <Field>
        <Breadcrumb size="small">
          <BreadcrumbItem>Bulma</BreadcrumbItem>
          <BreadcrumbItem>Documentation</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Field>
      <Field>
        <Breadcrumb size="medium">
          <BreadcrumbItem>Bulma</BreadcrumbItem>
          <BreadcrumbItem>Documentation</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Field>
      <Field>
        <Breadcrumb size="large">
          <BreadcrumbItem>Bulma</BreadcrumbItem>
          <BreadcrumbItem>Documentation</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Field>
    </Container>
  </Section>
)
export const BreadcrumbSeparators: React.SFC = () => (
  <Section>
    <Container>
      <Title size="4">Alternative separators</Title>
      <Field>
        <Breadcrumb separator="arrow">
          <BreadcrumbItem>Bulma</BreadcrumbItem>
          <BreadcrumbItem>Documentation</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Field>
      <Field>
        <Breadcrumb separator="bullet">
          <BreadcrumbItem>Bulma</BreadcrumbItem>
          <BreadcrumbItem>Documentation</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Field>
      <Field>
        <Breadcrumb separator="dot">
          <BreadcrumbItem>Bulma</BreadcrumbItem>
          <BreadcrumbItem>Documentation</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Field>
      <Field>
        <Breadcrumb separator="succeeds">
          <BreadcrumbItem>Bulma</BreadcrumbItem>
          <BreadcrumbItem>Documentation</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Field>
    </Container>
  </Section>
)
export const BreadcrumbExample: React.SFC = () => (
  <>
    <Section>
      <Container>
        <Title size="4">Breadcrumb</Title>
        <Breadcrumb baseURL="/components/breadcrumb">
          <BreadcrumbItem value="alignments">Alignment</BreadcrumbItem>
          <BreadcrumbItem value="icons">Icons</BreadcrumbItem>
          <BreadcrumbItem value="separators">Separators</BreadcrumbItem>
          <BreadcrumbItem value="sizes">Sizes</BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </Section>
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
  </>
)
