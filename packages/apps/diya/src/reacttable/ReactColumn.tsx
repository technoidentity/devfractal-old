import React from 'react'
import { EnhancedColumn } from 'react-table'
export function ReactColumn<D>({ getHeaderProps, render }: EnhancedColumn<D>) {
  return <th {...getHeaderProps()}>{render('Header')}</th>
}
