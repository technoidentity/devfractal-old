import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import {
  component,
  Get,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Invoice, invoiceAPI, StaticPagination } from '../common'

const InvoiceListProps = req({ invoiceList: readonlyArray(Invoice) })

type InvoiceListProps = TypeOf<typeof InvoiceListProps>

const InvoiceListView: React.FC<InvoiceListProps> = ({ invoiceList }) => (
  <SimpleTable
    data={invoiceList}
    headers={['invoicesNo', 'valid', 'dueDate', 'amount']}
    headerLabels={['InVoices No.', 'Valid', 'Due Date', 'Amount']}
    striped
  />
)

const InvoiceListTable = component(InvoiceListProps, ({ invoiceList }) => (
  <Section>
    <Title size="4" textColor="info">
      Invoices
    </Title>
    <InvoiceListView invoiceList={invoiceList} />
    <StaticPagination />
  </Section>
))

export const InvoiceList: React.FC = () => (
  <Get asyncFn={() => invoiceAPI.many()}>
    {data => <InvoiceListTable invoiceList={data} />}
  </Get>
)
