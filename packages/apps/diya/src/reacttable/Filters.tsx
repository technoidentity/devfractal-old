import React from 'react'
import { TableInstance } from 'react-table'
import { FilterHead } from './FilterHead'
export const Filters = ({ headerGroups }: TableInstance) => {
  return (
    <table>
      <FilterHead headerGroups={headerGroups} />
    </table>
  )
}
