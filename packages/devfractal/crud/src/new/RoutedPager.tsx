import { useHistory, useLocation } from 'devfractal-router'
import { stringify } from 'query-string'
import React from 'react'
import { IntFromString } from 'technoidentity-spec'
import { opt } from 'technoidentity-utils'
import { Pager } from './Pager'
import { useQuery } from './useQuery'

export const RoutedPager: React.FC = () => {
  const { pathname } = useLocation()
  const { push } = useHistory()

  // tslint:disable-next-line: typedef
  const query = useQuery(opt({ page: IntFromString }))

  const page: number = query.page ? query.page : 1

  return (
    <Pager
      page={page}
      onPageChange={page => {
        push(`${pathname}?${stringify({ ...query, page })}`)
      }}
    />
  )
}
