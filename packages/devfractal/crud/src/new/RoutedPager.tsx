import { useHistory, useLocation } from '@stp/router'
import { IntFromString, opt } from '@stp/utils'
import { stringify } from 'query-string'
import React from 'react'
import { Pager } from './Pager'
import { useQuery } from './useQuery'

interface RoutedPagerProps {
  readonly count?: number
}

export const RoutedPager: React.FC<RoutedPagerProps> = ({ count }) => {
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
      maxPages={count}
    />
  )
}
