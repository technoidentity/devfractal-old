import { parse, stringify } from 'querystring'
import React from 'react'
import { useHistory, useLocation } from 'technoidentity-devfractal'
import { Pager } from './Pager'

export const StatePager: React.FC = () => {
  const { pathname, search } = useLocation()
  const { push } = useHistory()
  const query = parse(search)

  return (
    <Pager
      page={query.page ? +query.page : 1}
      onPageChange={page => {
        const q = { ...query, page }
        push(`${pathname}?${stringify(q)}`)
      }}
    />
  )
}
