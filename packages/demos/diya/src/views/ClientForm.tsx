import React from 'react'
import {
  Column,
  Columns,
  formComponent,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { Client } from '../common'

export const ClientForm = formComponent(
  Client,
  ({ initial, edit, onSubmit }) => (
    <>
      <Section>
        <Title size="4" textColor="info">
          {edit ? 'Update' : 'Add'} Client
        </Title>
      </Section>
      <Section>
        <Simple.Form initialValues={initial} onSubmit={onSubmit}>
          <Columns>
            <Column>
              <Simple.Text name="clientName" />

              <Simple.Select name="contractType">
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </Simple.Select>
              <Simple.Email name="email" />
            </Column>

            <Column>
              <Simple.Number name="numberOfEVS" label="No. of EVS/Drivers" />
              <Simple.Number name="rateOfEVS" label="Rate of EVS" />
              <Simple.Number
                name="assignedEVSHistory"
                label="History of EVS assigned"
              />
            </Column>
          </Columns>

          <Simple.FormButtons alignment="centered" size="medium" />
        </Simple.Form>
      </Section>
    </>
  ),
)
