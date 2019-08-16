import React from 'react'
import {
  Column,
  Columns,
  component,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
import { Client } from '../common'
import { formProps } from '../crud'

export const ClientFormProps = formProps(Client)

export const ClientForm = component(
  ClientFormProps,
  ({ initial = empty(Client), onSubmit }) => (
    <>
      <Title size="4" textColor="info">
        Add Client
      </Title>
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
