import React from 'react'
import {
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { User } from '../common'
import { CreateLink, HeadTitle } from '../components'

const userLinks = links('users')

export const UserList = listComponent(User, ({ data: userList }) => (
  <Section>
    <HeadTitle>Users</HeadTitle>
    <CreateLink to={userLinks.create}>Add user</CreateLink>
    <CrudTable
      data={userList}
      headers={['userName', 'role']}
      editTo={v => userLinks.edit(v.id)}
    />
    <RoutedPager />
  </Section>
))
