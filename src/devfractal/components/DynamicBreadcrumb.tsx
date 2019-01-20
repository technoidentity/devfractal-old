import React from 'react'
import { RouteComponentProps } from 'react-router'
import { capitalize } from '../../utils'
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb'

export const DynamicBreadcrumb: React.SFC<RouteComponentProps> = ({
  location,
}) => {
  // tslint:disable no-array-mutation typedef prefer-const

  const segments: string[] =
    location.pathname === '/' ? [''] : location.pathname.split('/')

  let paths = segments.map((_, i) => {
    const result = `${segments.slice(0, i + 1).join('/')}`
    return result === '' ? '/' : result
  })

  segments.shift()
  segments.unshift('home')

  return (
    <Breadcrumb>
      {paths.map((path, i) => (
        <BreadcrumbItem key={i} href={path}>
          {capitalize(segments[i])}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}
