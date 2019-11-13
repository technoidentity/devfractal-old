import React from 'react'
import { http as httpAPI } from 'technoidentity-devfractal'
import { readonlyArray } from 'technoidentity-utils'
import { VehicleLocation } from '../common'
import { fakeBaseURL } from '../config'
import { FilterData } from '../reacttable/FilterData'
import { MapView } from './VehicleLocation'

const http = httpAPI({ baseURL: fakeBaseURL })

export const FilterDataEVs = () => {
  const [evs, setEVs] = React.useState<VehicleLocation[]>([])
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await http.get(
        { resource: 'vehicles_location' },
        readonlyArray(VehicleLocation),
      )
      setEVs([...data])
    }
    // tslint:disable-next-line: no-floating-promises
    fetchData()
  }, [])

  return evs.length !== 0 ? (
    <FilterData
      tableData={evs}
      filterOption={[
        { columnName: 'description', filterType: 'search' },
        { columnName: 'client', filterType: 'select' },
      ]}
      component={({ data }) => <MapView data={data} />}
    />
  ) : (
    <p>No Data</p>
  )
}
