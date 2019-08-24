import React from 'react'
import {
  listComponent,
  RoutedPager,
  Section,
  SimpleTable,
} from 'technoidentity-devfractal'
import { Invoice } from '../common'
import { HeadTitle } from '../components'

export const InvoiceList = listComponent(Invoice, ({ data: invoiceList }) => (
  <Section>
    <HeadTitle>Invoices</HeadTitle>

    <SimpleTable
      data={invoiceList}
      headers={['invoicesNo', 'valid', 'dueDate', 'amount']}
      headerLabels={['InVoices No.', 'Valid', 'Due Date', 'Amount']}
      striped
    />

    <RoutedPager />
  </Section>
))
