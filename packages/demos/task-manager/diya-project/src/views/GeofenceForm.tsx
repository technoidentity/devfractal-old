import { FormikActions } from 'formik'
import { TypeOf } from 'io-ts'
import React from 'react'
import { component, Section, Simple, Title } from 'technoidentity-devfractal'
import { empty, fn, props } from 'technoidentity-utils'
import { Geofence } from '../common'

const GeofenceFormProps = props(
  { initial: Geofence },
  {
    onSubmit: fn<
      (values: Geofence, actions: FormikActions<Geofence>) => Promise<void>
    >(),
  },
)

type GeofenceFormProps = TypeOf<typeof GeofenceFormProps>

const initialValues = empty(Geofence)

export const GeofenceForm = component(
  GeofenceFormProps,
  ({ initial, onSubmit }) => (
    <>
      <Title size="4">Create Geofence</Title>
      <Section>
        <Simple.Form
          initialValues={initial || initialValues}
          onSubmit={onSubmit}
        >
          <Simple.Text name="areaName" />
          <Simple.Text name="assignVehicle" />
          <Simple.Text name="assignClient" />
          <Simple.TextArea name="comments" />
          <Simple.FormButtons alignment="centered" />
        </Simple.Form>
      </Section>
    </>
  ),
)
