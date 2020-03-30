import React from 'react'
import { CrudTable, links, listComponent, RoutedPager } from 'srtp-crud'
import { Section } from 'srtp-ui'
import { User } from '../common'
import { HeadTitle } from '../components'
import { CreateLink } from './CreateLink'

const userLinks = links('users')

export const UserList = listComponent(User, ({ data: userList }) => (
  <Section>
    <HeadTitle>Users</HeadTitle>
    <CreateLink to={userLinks.create}>Add user</CreateLink>
    <CrudTable
      data={userList}
      select={['userName', 'role', 'address1', 'phone', 'email']}
      override={{ address1: 'Address' }}
      editTo={v => userLinks.edit(v.id)}
    />
    <RoutedPager />
  </Section>
))
