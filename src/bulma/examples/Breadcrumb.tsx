import * as React from 'react'

import { Breadcrumb, BreadcrumbItem } from '../components/Breadcrumb'

export const BreadcrumbExample: React.SFC = () => (
  <div>
    <Breadcrumb className="has-arrow-separator" size="medium">
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem className="is-active">Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb
      className="is-centered is-large"
      separator="succeeds-separator"
      aria-label="breadcrumbs"
    >
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem className="is-active">Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  </div>
)
