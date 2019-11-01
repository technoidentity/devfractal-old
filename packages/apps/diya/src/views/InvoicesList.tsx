import React from 'react'
import { listComponent, Section } from 'technoidentity-devfractal'
import { Invoice } from '../common'
import { HeadTitle } from '../components'
import { Table } from '../reacttable/Table'

export const InvoiceList = listComponent(Invoice, ({ data: invoiceList }) => {
  const tableData = invoiceList.map(data => ({ ...data, actions: 'actions' }))
  return (
    <Section>
      <HeadTitle>Invoices</HeadTitle>
      <Table
        tableData={[...tableData]}
        sorting={true}
        pagination={true}
        headerNames={['invoicesNo', 'valid', 'dueDate', 'amount']}
        filterOption={[{ columnName: 'invoicesNo', filterType: 'search' }]}
        headerLabels={{ invoicesNo: 'InVoices No.' }}
      />
    </Section>
  )
})
