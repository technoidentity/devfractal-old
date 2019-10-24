import { readonlyArray } from 'io-ts'
import React, { useEffect, useState } from 'react'
import { http as httpAPI } from 'technoidentity-devfractal'
import { Driver } from '../common'
import { fakeBaseURL } from '../config'
import { Table } from '../reacttable/Table'

const http = httpAPI({ baseURL: fakeBaseURL })

export const DriversTable = () => {
  const [state, setState] = useState<Driver[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await http.get(
        { resource: 'drivers' },
        readonlyArray(Driver),
      )
      setState([...data])
    }

    // tslint:disable-next-line: no-floating-promises
    fetchData()
  }, [])

  return (
    <>
      <Table
        // @TODO: Fix 'id' required/partial later
        tableData={state as Array<Omit<Driver, 'id'> & { readonly id: string }>}
        sorting={true}
        pagination={true}
        headerNames={['name', 'lastActive', 'shift', 'status']}
        filterOption={[
          { columnName: 'name', filterType: 'search' },
          { columnName: 'shift', filterType: 'select' },
          { columnName: 'status', filterType: 'select' },
        ]}
      />
    </>
  )
}
