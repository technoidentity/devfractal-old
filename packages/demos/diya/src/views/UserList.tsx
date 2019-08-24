import React from 'react'
import { Section, v2 } from 'technoidentity-devfractal'
import { User } from '../common'
import { CreateLink, HeadTitle } from '../components'

const userLinks = v2.links('users')

export const UserList = v2.listComponent(User, ({ data: userList }) => (
  <Section>
    <HeadTitle>Users</HeadTitle>
    <CreateLink to={userLinks.create}>Add user</CreateLink>
    <v2.CrudTable
      data={userList}
      headers={['userName', 'role']}
      editLink={v => userLinks.edit(v.id)}
    />
    <v2.RoutedPager />
  </Section>
))
