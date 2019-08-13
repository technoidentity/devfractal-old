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
import { Invoice, invoiceAPI } from '../common'

const InvoiceListProps = req({ invoiceList: readonlyArray(Invoice) })

type InvoiceListProps = TypeOf<typeof InvoiceListProps>

const InoviceListView: React.FC<InvoiceListProps> = ({ invoiceList }) => (
  <SimpleTable
    data={invoiceList}
    headers={['invoicesNo', 'valid', 'dueDate', 'amount']}
    headerLabels={['InVoices No.', 'Valid', 'Due Date', 'Amount']}
  />
)

const InvoiceListTable = component(InvoiceListProps, ({ invoiceList }) => (
  <Section>
    <Title size="4">Invoices</Title>
    <InoviceListView invoiceList={invoiceList} />
  </Section>
))

export const InvoiceList: React.FC = () => (
  <Get asyncFn={() => invoiceAPI.many()}>
    {data => <InvoiceListTable invoiceList={data} />}
  </Get>
)
