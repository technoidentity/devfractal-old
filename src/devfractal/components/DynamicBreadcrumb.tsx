import React from 'react'
import { RouteComponentProps } from 'react-router'
import { capitalize } from '../../utils'
import { BreadcrumbItem, BreadcrumbView } from './Breadcrumb'

export const DynamicBreadcrumb: React.SFC<RouteComponentProps> = ({
  location,
}) => {
  const segments: string[] = location.pathname.split('/').slice(1)
  let current: string = ''

  const paths: ReadonlyArray<string> = segments.map(crumb => {
    current += `/${crumb}`
    return current
  })

  // tslint:disable-next-line: no-array-mutation
  segments.unshift('home')

  return (
    <BreadcrumbView>
      {['/', ...paths].map((path, i) => (
        <BreadcrumbItem key={i} href={path}>
          {capitalize(segments[i])}
        </BreadcrumbItem>
      ))}
    </BreadcrumbView>
  )
}
