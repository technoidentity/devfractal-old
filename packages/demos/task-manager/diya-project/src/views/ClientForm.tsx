import { FormikActions } from 'formik'
import { TypeOf } from 'io-ts'
import React from 'react'
import {
  Column,
  Columns,
  component,
  Label,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
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
      <Title size="4" textColor="info">
        Add Client
      </Title>
      <Section>
        <Simple.Form
          initialValues={initial || initialValues}
          onSubmit={onSubmit}
        >
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
