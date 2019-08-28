import React from 'react'
import { formComponent, Section, Simple } from 'technoidentity-devfractal'
import { GeoFence } from '../common'
import { HeadTitle } from '../components'

export const GeoFenceForm = formComponent(
  GeoFence,
  ({ initial, onSubmit, edit }) => (
    <>
      <Section>
        <HeadTitle>{edit ? 'Update' : 'Add'} GeoFence</HeadTitle>
      </Section>
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
