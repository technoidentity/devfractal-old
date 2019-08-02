import { WithRouter } from 'devfractal-router'
import { Null } from 'devfractal-ui-core'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { capitalizeAll, chop } from 'technoidentity-utils'
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb'

const DynamicBreadcrumbWithRouter: React.FC<RouteComponentProps> = ({
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
          {capitalizeAll(s, '-')}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

export const DynamicBreadcrumb: React.FC = () => (
  <WithRouter<{}> component={DynamicBreadcrumbWithRouter} />
)
