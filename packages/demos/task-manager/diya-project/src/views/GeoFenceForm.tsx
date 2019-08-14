import { FormikActions } from 'formik'
import { TypeOf } from 'io-ts'
import React from 'react'
import { component, Section, Simple, Title } from 'technoidentity-devfractal'
import { empty, fn, props } from 'technoidentity-utils'
import { GeoFence } from '../common'

const GeoFenceFormProps = props(
  { initial: GeoFence },
  {
    onSubmit: fn<
      (values: GeoFence, actions: FormikActions<GeoFence>) => Promise<void>
    >(),
  },
)

type GeoFenceFormProps = TypeOf<typeof GeoFenceFormProps>

const initialValues = empty(GeoFence)

export const GeoFenceForm = component(
  GeoFenceFormProps,
  ({ initial, onSubmit }) => (
    <>
      <Title size="4" textColor="info">
        Create GeoFence
      </Title>
      <Section>
        <Simple.Form
          initialValues={initial || initialValues}
          onSubmit={onSubmit}
        >
          <Simple.Text name="areaName" />
          <Simple.Text name="assignVehicle" />
          <Simple.Text name="assignClient" />
          <Simple.TextArea name="comments" />
          <Simple.FormButtons alignment="centered" size="medium" />
        </Simple.Form>
      </Section>
    </>
  ),
)
