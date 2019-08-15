import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, Section, Title } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Trip } from '../common'
import { CrudTable, HeadTitle } from '../components'

const TripListProps = req({ tripsList: readonlyArray(Trip) })

export const TripList = component(TripListProps, ({ tripsList }) => (
  <Section>
    <HeadTitle>View Trips</HeadTitle>

    <CrudTable
      data={tripsList}
      headers={['customerName', 'address', 'contactNumber', 'status']}
      editURL={value => `trips/${value.id}/edit`}
    />
  </Section>
))
