import React from 'react'
import {
  Column,
  Columns,
  CreateLink,
  links,
  listComponent,
  RoutedPager,
  Section,
  useHistory,
  useLocation,
} from 'technoidentity-devfractal'
import { Driver } from '../common'
import { HeadTitle } from '../components'
import { DiyaTable } from '../components/DiyaTable'
import { fetchSuggestions, Search } from '../components/Search'

const driverLinks = links('drivers')

export const DriverList = listComponent(Driver, ({ data: driverList }) => {
  const { push } = useHistory()
  const { pathname } = useLocation()
  return (
    <>
      <Section>
        <HeadTitle>Drivers</HeadTitle>
        <Columns>
          <Column>
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
            <CreateLink
              alignment="right"
              variant="primary"
              to={driverLinks.create}
            >
              Add Driver
            </CreateLink>
          </Column>
        </Columns>

        <DiyaTable
          data={driverList}
          headers={['name', 'lastActive', 'shift', 'status']}
          editTo={v => driverLinks.edit(v.id)}
          assignTo={v => `/assignDriver/${v.id}`}
          labels={['name', 'lastActive', 'shift', 'status']}
        />

        <RoutedPager />
      </Section>
    </>
  )
})
