import * as React from 'react'

import { Breadcrumb, BreadcrumbItem } from '../components/Breadcrumb'

export const BreadcrumbExample: React.SFC = () => (
  <div>
    <Breadcrumb separator="arrow-separator" size="medium">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem active>Components</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="is-centered is-large" separator="succeeds-separator">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  </div>
)
