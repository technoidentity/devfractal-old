import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, Get, Section, SimpleTable } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Invoice, invoiceAPI } from '../common'
import { HeadTitle, StaticPagination } from '../components'

const InvoiceListProps = req({ invoiceList: readonlyArray(Invoice) })

const InvoiceListTable = component(InvoiceListProps, ({ invoiceList }) => (
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

export const InvoiceList: React.FC = () => (
  <Get asyncFn={() => invoiceAPI.many()}>
    {data => <InvoiceListTable invoiceList={data} />}
  </Get>
)
