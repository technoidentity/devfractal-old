import { stringify } from 'query-string'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { useCrudComponents } from 'srtp-core'
import { IntFromString, opt } from 'srtp-utils'
import { useQuery } from './useQuery'

interface RoutedPagerProps {
  readonly count?: number
}

export const RoutedPager: React.FC<RoutedPagerProps> = ({ count }) => {
  const { pathname } = useLocation()
  const { push } = useHistory()

  const { Pager } = useCrudComponents()
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
