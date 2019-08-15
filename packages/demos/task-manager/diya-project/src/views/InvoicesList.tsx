import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, Section, SimpleTable } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Invoice } from '../common'
import { HeadTitle, StaticPagination } from '../components'

const InvoiceListProps = req({ invoiceList: readonlyArray(Invoice) })

export const InvoiceList = component(InvoiceListProps, ({ invoiceList }) => (
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
))
