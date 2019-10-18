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
        tableData={state}
        sorting={true}
        pagination={true}
        headerNames={['name', 'lastActive', 'shift', 'status']}
      />
    </>
  )
}
