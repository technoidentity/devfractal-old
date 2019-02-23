import React from 'react'
import { RouteComponentProps } from 'react-router'
import { capitalize, chop, Null, WithRouter } from '../utils'
import { Breadcrumb, BreadcrumbItem } from './internal'

const DynamicBreadcrumbWithRouter: React.SFC<RouteComponentProps> = ({
  location,
}) => {
  const segments: string[] = chop(location.pathname).split('/')

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
          {capitalize(s)}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

export const DynamicBreadcrumb: React.SFC = () => (
  <WithRouter<{}> component={DynamicBreadcrumbWithRouter} />
)
