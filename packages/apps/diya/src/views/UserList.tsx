import React from 'react'
import { CreateLink, links, Section } from 'technoidentity-devfractal'
import { HeadTitle } from '../components'
import { Table } from '../reacttable/Table'

const userLinks = links('users')

// export const UserList = listComponent(User, ({ data: userList }) => {
export const UserList = ({ data }: { readonly data: any }) => {
  const tableData = data.map((data: any) => ({ ...data, actions: 'actions' }))
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
            Omit<any, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={['name', 'role', 'address1', 'address2', 'phone', 'email']}
        filterOption={[{ columnName: 'userName', filterType: 'search' }]}
        actions={{
          editTo: id => userLinks.edit(id),
        }}
      />
    </Section>
  )
}
// )
