import React from 'react'
import {
  CreateLink,
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { User } from '../common'
import { HeadTitle } from '../components'

const userLinks = links('users')

export const UserList = listComponent(User, ({ data: userList }) => (
  <Section>
    <HeadTitle>Users</HeadTitle>
    <CreateLink alignment="right" variant="primary" to={userLinks.create}>
      Add user
    </CreateLink>
    <CrudTable
      data={userList}
      headers={['userName', 'role', 'address1', 'phone', 'email']}
      editTo={v => userLinks.edit(v.id)}
    />
    <RoutedPager />
  </Section>
))
