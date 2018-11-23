import * as React from 'react'

import { Breadcrumb, BreadcrumbItem } from '../components/Breadcrumb'

export const BreadcrumbExample: React.SFC = () => (
  <Breadcrumb>
    <BreadcrumbItem href="#">Bulma</BreadcrumbItem>
    <BreadcrumbItem href="#" active>
      Documentation
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Components</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
  </Breadcrumb>
)
