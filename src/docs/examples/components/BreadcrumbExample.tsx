import {
  faBook,
  faHome,
  faPuzzlePiece,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Field,
  Icon,
  Section,
  Title,
} from '../devfractal'

export const BreadcrumbExample: React.SFC = () => (
  <div>
    <Section>
      <Container>
        <Title size="4">Breadcrumb</Title>
        <Breadcrumb baseURL="/components/breadcrumb">
          <BreadcrumbItem value="bulma">Bulma</BreadcrumbItem>
          <BreadcrumbItem value="documentation">Documentation</BreadcrumbItem>
          <BreadcrumbItem value="components">Components</BreadcrumbItem>
          <BreadcrumbItem value="breadcrumb">Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </Section>

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
    </Section>
    <Field>
      <Breadcrumb alignment="right">
        <BreadcrumbItem>Bulma</BreadcrumbItem>
        <BreadcrumbItem>Documentation</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </Field>

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
  </div>
)
