import React from 'react'
import {
  listComponent,
  RoutedPager,
  Section,
  SimpleTable,
} from '@stp/devfractal'
import { Invoice } from '../common'
import { HeadTitle } from '../components'

export const InvoiceList = listComponent(Invoice, ({ data: invoiceList }) => (
  <Section>
    <HeadTitle>Invoices</HeadTitle>

    <SimpleTable
      data={invoiceList}
      select={['invoicesNo', 'valid', 'dueDate', 'amount']}
      override={{ invoicesNo: 'InVoices No.' }}
      striped
    />

    <RoutedPager />
  </Section>
))
