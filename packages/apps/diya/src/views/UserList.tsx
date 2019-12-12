import React, { useState } from 'react'
import { CreateLink, links, Section } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { UserData, UserListResponse } from '../common'
import { DeleteConfirmation } from '../components/DeleteConfirmation'
import { deleteList, getUserList } from '../pages'
import { Table } from '../reacttable/Table'

const userLinks = links('users')

export const UserList = ({
  data,
}: {
  readonly data: UserListResponse['data']['rows']
}) => {
  const { logout, setUser, setHeaderText } = useAuth()
  const [state, setState] = useState({ isOpen: false, id: '' })
  const [resultData, setResultData] = useState<
    UserListResponse['data']['rows']
  >([])
  const [useResultData, setUseResultData] = useState(false)

  const handleToggleModel = (id: string) => {
    setState({ isOpen: !state.isOpen, id })
  }
  const handleUserList = async () => {
    const resultData = await getUserList({ setUser, logout, setHeaderText })
    setUseResultData(true)
    setResultData(resultData)
    setState({ isOpen: false, id: state.id })
  }

  const tableData = useResultData
    ? resultData.length > 0
      ? resultData.map((userList: UserData) => ({
          ...userList,
          actions: 'actions',
        }))
      : []
    : data.length > 0
    ? data.map((userList: UserData) => ({ ...userList, actions: 'actions' }))
    : []

  return (
    <Section>
      <DeleteConfirmation
        setState={setState}
        state={state}
        deleteAsyncFun={(url, message) =>
          deleteList(url, message, { setUser, logout })
        }
        handleGetList={handleUserList}
        url={`users/${state.id}`}
        message="User Deleted"
      />
      <CreateLink alignment="right" variant="primary" to={userLinks.create}>
        Add user
      </CreateLink>
      <Table
        tableData={[
          // @TODO: Fix 'id' required/partial later
          ...((tableData as unknown) as ReadonlyArray<
            Omit<UserData, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={['name', 'role', 'address1', 'phone', 'email']}
        filterOption={[{ columnName: 'userName', filterType: 'search' }]}
        actions={{
          editTo: id => userLinks.edit(id),
          onDelete: handleToggleModel,
        }}
      />
    </Section>
  )
}
// )
