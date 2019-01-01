import {
  faBook,
  faHome,
  faPuzzlePiece,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '../../components'
import { Icon, Title } from '../../elements'
import { Field } from '../../form'
import { Container, Section } from '../../layout'

export const BreadcrumbExample: React.SFC = () => (
  <div>
    <Section>
      <Container>
        <Title size="4">Breadcrumb</Title>
        <Breadcrumb>
          <BreadcrumbItem>Bulma</BreadcrumbItem>
          <BreadcrumbItem>Documentation</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
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
          <Breadcrumb separator="arrow-separator">
            <BreadcrumbItem>Bulma</BreadcrumbItem>
            <BreadcrumbItem>Documentation</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </Field>
        <Field>
          <Breadcrumb separator="bullet-separator">
            <BreadcrumbItem>Bulma</BreadcrumbItem>
            <BreadcrumbItem>Documentation</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </Field>
        <Field>
          <Breadcrumb separator="dot-separator">
            <BreadcrumbItem>Bulma</BreadcrumbItem>
            <BreadcrumbItem>Documentation</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </Field>
        <Field>
          <Breadcrumb separator="succeeds-separator">
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
