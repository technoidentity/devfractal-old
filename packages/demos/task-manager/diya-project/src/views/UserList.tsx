import { readonlyArray } from 'io-ts'
import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { links, User } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

const UserListProps = req({ data: readonlyArray(User) })

const userLinks = links('users')

export const UserList = component(UserListProps, ({ data: userList }) => (
  <Section>
    <HeadTitle>Users</HeadTitle>
    <CreateLink to={userLinks.create}>Add user</CreateLink>
    <CrudTable
      data={userList}
      headers={['userName', 'role']}
      editURL={v => userLinks.edit(v.id)}
    />
    <StaticPagination />
  </Section>
))
