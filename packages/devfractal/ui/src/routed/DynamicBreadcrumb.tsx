import { Null } from '@stp/core'
import { useLocation } from '@stp/router'
import { capitalizeAll, chop } from '@stp/utils'
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb'

export const DynamicBreadcrumb: React.FC = () => {
  const { pathname } = useLocation()
  const segments: string[] = chop(pathname).split('/')

  if (segments.length <= 1) {
    return <Null />
  }

  const segmentsPaths: Array<[string, string]> = segments.map<[string, string]>(
    (s, i) =>
      s === '' ? ['home', '/'] : [s, `${segments.slice(0, i + 1).join('/')}`],
  )

  return (
    <Breadcrumb>
      {segmentsPaths.map(([s, p]) => (
        <BreadcrumbItem key={p} href={p}>
          {capitalizeAll(s, '-')}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}
