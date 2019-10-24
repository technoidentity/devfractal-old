import React from 'react'
import { TableInstance } from 'react-table'
import { FilterHead } from './FilterHead'

export function Filters<D>({ headerGroups }: TableInstance<D>): JSX.Element {
  return (
    <table>
      <FilterHead headerGroups={headerGroups} />
    </table>
  )
}
