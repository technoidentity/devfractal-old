import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonsGroup,
  component,
  Get,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Actions, StaticPagination, User, userAPI } from '../common'

export const UserFormProps = req({
  userList: readonlyArray(User),
})

type UserFormProps = TypeOf<typeof UserFormProps>

export const UserListForm = component(UserFormProps, ({ userList }) => {
  return (
    <>
      <ButtonsGroup alignment="right">
        <Link to="/users/add" className="button is-primary">
          Add user
        </Link>
      </ButtonsGroup>
      <SimpleTable
        data={userList}
        headers={['userName', 'role', 'Actions']}
        striped
      >
        {(key, value) =>
          key === 'Actions' ? (
            <Actions editURL={`users/${value.id}/edit`} />
          ) : // tslint:disable-next-line: no-null-keyword
          null
        }
      </SimpleTable>
    </>
  )
})
export const UserListTable = component(UserFormProps, ({ userList }) => (
  <Section>
    <Title size="4" textColor="info">
      Users
    </Title>
    <UserListForm userList={userList} />
    <StaticPagination />
  </Section>
))

export const UserList: React.FC = () => (
  <Get asyncFn={() => userAPI.many()}>
    {data => <UserListTable userList={data} />}
  </Get>
)
