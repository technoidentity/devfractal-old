import React from 'react'
import { component, Section, SimpleTable } from 'technoidentity-devfractal'
import { Invoice } from '../common'
import { HeadTitle } from '../components'
import { listProps, StatePager } from '../crud'

const InvoiceListProps = listProps(Invoice)

export const InvoiceList = component(
  InvoiceListProps,
  ({ data: invoiceList }) => (
    <Section>
      <HeadTitle>Invoices</HeadTitle>

      <SimpleTable
        data={invoiceList}
        headers={['invoicesNo', 'valid', 'dueDate', 'amount']}
        headerLabels={['InVoices No.', 'Valid', 'Due Date', 'Amount']}
        striped
      />

      <StatePager />
    </Section>
  ),
)
