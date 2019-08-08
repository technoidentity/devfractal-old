import { Simple } from 'devfractal-simple'
import {
  Column,
  Columns,
  component,
  Label,
  Section,
  Title,
} from 'devfractal-ui-core'
import { FormikActions } from 'formik'
import { TypeOf } from 'io-ts'
import React from 'react'
import { empty, fn, props } from 'technoidentity-utils'
import { Client } from '../common'

export const ClientFormProps = props(
  {
    initial: Client,
  },
  {
    onSubmit: fn<
      (values: Client, actions: FormikActions<Client>) => Promise<void>
    >(),
  },
)
const initialValues = empty(Client)

export type ClientFormProps = TypeOf<typeof ClientFormProps>

export const ClientForm = component(
  ClientFormProps,
  ({ initial, onSubmit }) => (
    <>
      <Title size="4">Add Client</Title>
      <Section>
        <Simple.Form
          initialValues={initial || initialValues}
          onSubmit={onSubmit}
        >
          <Columns>
            <Column>
              <Simple.Text name="clientName" />
              <Label>Contract Type</Label>
              <Simple.Select name="Weekly">
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
          <Simple.FormButtons />
        </Simple.Form>
      </Section>
    </>
  ),
)
