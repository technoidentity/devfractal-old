import {
  CreateLink,
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
} from '@stp/devfractal'
import React from 'react'
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
      select={['userName', 'role', 'address1', 'phone', 'email']}
      override={{ address1: 'Address' }}
      editTo={v => userLinks.edit(v.id)}
    />
    <RoutedPager />
  </Section>
))
