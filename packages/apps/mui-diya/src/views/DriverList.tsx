import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { links, listComponent, RoutedPager } from 'technoidentity-crud'
import { Column, Columns, Section } from 'technoidentity-ui'
import { Driver } from '../common'
import { HeadTitle } from '../components'
import { DiyaTable } from '../components/DiyaTable'
import { fetchSuggestions, Search } from '../components/Search'
import { CreateLink } from './CreateLink'

const driverLinks = links('drivers')

export const DriverList = listComponent(Driver, ({ data: driverList }) => {
  const { push } = useHistory()
  const { pathname } = useLocation()

  return (
    <>
      <Section>
        <HeadTitle>Drivers</HeadTitle>
        <Columns>
          <Column narrow>
            <Search
              searchBy="name"
              onSearch={value => {
                push(`${pathname}?name_like=^${value}`)
              }}
              fetchSuggestions={(value, searchBy) =>
                fetchSuggestions(value, searchBy, 'drivers', Driver)
              }
            />
          </Column>
          <Column>
            <CreateLink to={driverLinks.create}>Add Driver</CreateLink>
          </Column>
        </Columns>

        <DiyaTable
          data={driverList}
          select={['name', 'lastActive', 'shift', 'status']}
          editTo={v => driverLinks.edit(v.id)}
          assignTo={v => `/assignDriver/${v.id}`}
        />

        <RoutedPager />
      </Section>
    </>
  )
})
