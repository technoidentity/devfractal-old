import { readonlyArray } from 'io-ts'
import React from 'react'
import { component, Section, v2 } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { User } from '../common'
import { CreateLink, HeadTitle } from '../components'

const UserListProps = req({ data: readonlyArray(User) })

const userLinks = v2.links('users')

export const UserList = component(UserListProps, ({ data: userList }) => (
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
