import React from 'react'
import {
  CreateLink,
  CrudTable,
  links,
  // listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { UserListResponse } from '../common'
import { HeadTitle } from '../components'

const userLinks = links('users')

export const UserList = ({
  data,
}: {
  readonly data: UserListResponse['data']['rows']
}) => (
  <Section>
    <HeadTitle>Users</HeadTitle>
    <CreateLink alignment="right" variant="primary" to={userLinks.create}>
      Add user
    </CreateLink>
    <CrudTable data={data} editTo={v => userLinks.edit(v.name)} />
    <RoutedPager />
  </Section>
)
// export const UserList = listComponent(User, ({ data: userList }) => (
//   <Section>
//     <HeadTitle>Users</HeadTitle>
//     <CreateLink alignment="right" variant="primary" to={userLinks.create}>
//       Add user
//     </CreateLink>
//     <CrudTable
//       data={userList}
//       select={['userName', 'role', 'address1', 'phone', 'email']}
//       override={{ address1: 'Address' }}
//       editTo={v => userLinks.edit(v.id)}
//     />
//     <RoutedPager />
//   </Section>
// ))
