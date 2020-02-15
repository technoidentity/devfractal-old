import React from 'react'
import {
  Column,
  Columns,
  formComponent,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { GeoFence } from '../common'
import { HeadTitle } from '../components'
import { GeoFence as GeoFenceMap } from '../maps'

export const GeoFenceForm = formComponent(
  GeoFence,
  ({ initial, onSubmit, edit }) => (
    <>
      <Section>
        <HeadTitle>{edit ? 'Update' : 'Add'} GeoFence</HeadTitle>
      </Section>
      <Section>
        <Columns>
          <Column>
            <GeoFenceMap />
          </Column>
          <Column>
            <Simple.Form initialValues={initial} onSubmit={onSubmit}>
              <Simple.Text name="areaName" />
              <Simple.Text name="assignVehicle" />
              <Simple.Text name="assignClient" />
              <Simple.TextArea name="comments" />

              <Simple.FormButtons />
            </Simple.Form>
          </Column>
        </Columns>
      </Section>
    </>
  ),
)
