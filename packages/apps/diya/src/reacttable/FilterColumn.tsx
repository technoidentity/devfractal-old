import React from 'react'
import { EnhancedColumn } from 'react-table'
export function FilterColumn<D>({ render }: EnhancedColumn<D>) {
  return <>{render('Filter')}</>
}
