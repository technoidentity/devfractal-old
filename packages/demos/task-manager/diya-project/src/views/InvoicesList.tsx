import React from 'react'
import { component, Section, SimpleTable } from 'technoidentity-devfractal'
import { Invoice, listProps } from '../common'
import { HeadTitle, StaticPagination } from '../components'

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

      <StaticPagination />
    </Section>
  ),
)
