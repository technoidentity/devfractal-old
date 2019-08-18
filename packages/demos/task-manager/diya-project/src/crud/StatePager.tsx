import { IntFromString } from 'io-ts-types/lib/IntFromString'
import { stringify } from 'query-string'
import React from 'react'
import { useHistory, useLocation } from 'technoidentity-devfractal'
import { opt } from 'technoidentity-utils'
import { Pager } from './Pager'
import { useQuery } from './useQuery'

export const StatePager: React.FC = () => {
  const { pathname } = useLocation()
  const { push } = useHistory()

  const query = useQuery(opt({ page: IntFromString }))

  return (
    <Pager
      page={query.page ? query.page : 1}
      onPageChange={page => {
        const q = { ...query, page }
        push(`${pathname}?${stringify(q)}`)
      }}
    />
  )
}
