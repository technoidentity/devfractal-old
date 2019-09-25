import 'bulma/css/bulma.css'
import React from 'react'
import  Table  from './views/SimpleReactTable'
import { DefaultColumnFilter, SelectColumnFilter } from './views/SimpleReactTableFilters'

const TableData = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: () => 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
            Filter: DefaultColumnFilter,
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Information Table',
        accessor: () => '',
        columns: [
                    {
            Header: 'First Name',
            accessor: 'firstName',
            Filter: DefaultColumnFilter,
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
          {
            Header: 'Age',
            accessor: 'age',
            filter: 'equals',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            filter: 'between',
          },
          {
            Header: 'Status',
            accessor: 'status',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    [],
  )

  const data = React.useMemo(() => makeData(40), [])

  return <Table columns={columns} data={data} />
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: 'gopi',
    lastName: 'krishna',
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

const makeData = (...lens: ReadonlyArray<number>) => {
  const makeDataLevel = (depth = 0): any => {
    const len: number = lens[depth]
    return range(len).map(() => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

export const App = () => (
  <TableData/>
)
