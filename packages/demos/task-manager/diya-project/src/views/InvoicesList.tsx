import React from 'react'
import { Section, SimpleTable, v2 } from 'technoidentity-devfractal'
import { Invoice } from '../common'
import { HeadTitle } from '../components'

export const InvoiceList = v2.listComponent(
  Invoice,
  ({ data: invoiceList }) => (
    <Section>
      <HeadTitle>Invoices</HeadTitle>

      <SimpleTable
        data={invoiceList}
        headers={['invoicesNo', 'valid', 'dueDate', 'amount']}
        headerLabels={['InVoices No.', 'Valid', 'Due Date', 'Amount']}
        striped
      />

      <v2.RoutedPager />
    </Section>
  ),
)
