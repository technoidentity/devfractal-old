import React from 'react'
import { component, Section, Simple, v2 } from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
import { GeoFence } from '../common'
import { HeadTitle } from '../components'

const GeoFenceFormProps = v2.formProps(GeoFence)

export const GeoFenceForm = component(
  GeoFenceFormProps,
  ({ initial = empty(GeoFence), onSubmit }) => (
    <>
      <HeadTitle>Create GeoFence</HeadTitle>

      <Section>
        <Simple.Form initialValues={initial} onSubmit={onSubmit}>
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
