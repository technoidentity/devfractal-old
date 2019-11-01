import React from 'react'
import {
  CreateLink,
  links,
  listComponent,
  Section,
} from 'technoidentity-devfractal'
import { User } from '../common'
import { HeadTitle } from '../components'
import { Table } from '../reacttable/Table'

const userLinks = links('users')

export const UserList = listComponent(User, ({ data: userList }) => {
  const tableData = userList.map(data => ({ ...data, actions: 'actions' }))
  return (
    <Section>
      <HeadTitle>Users</HeadTitle>
      <CreateLink alignment="right" variant="primary" to={userLinks.create}>
        Add user
      </CreateLink>
      <Table
        tableData={[
          // @TODO: Fix 'id' required/partial later
          ...((tableData as unknown) as ReadonlyArray<
            Omit<User, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={['userName', 'role', 'address1', 'phone', 'email']}
        filterOption={[{ columnName: 'userName', filterType: 'search' }]}
        actions={{
          editTo: id => userLinks.edit(id),
        }}
      />
    </Section>
  )
})
