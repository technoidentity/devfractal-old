import React from 'react'
import { useRouteMatch } from 'react-router'
import {
  Column,
  Columns,
  formComponent,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { EVsTripData } from '../common'

export const AddTripForm = formComponent(
  EVsTripData,
  ({ initial, edit, onSubmit }) => {
    const { setHeaderText } = useAuth()
    const { params }: any = useRouteMatch()
    if (edit) {
      setHeaderText('Update Trip')
    } else {
      setHeaderText('Add Trip')
    }

    const vehicleId: string = params.id

    return (
      <>
        <Section>
          <Simple.Form
            initialValues={{ ...initial, vehicleId }}
            onSubmit={onSubmit}
          >
            <Columns>
              <Column>
                <Simple.Date name="startDate" dateFormat="dd/MM/yyyy" />
                <Simple.Date name="startTime" dateFormat="hh:mm a" />
              </Column>
            </Columns>
            <Simple.FormButtons submit={'Continue'} />
          </Simple.Form>
        </Section>
      </>
    )
  },
)
