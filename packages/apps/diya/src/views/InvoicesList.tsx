import { date } from 'io-ts-types/lib/date'
import React from 'react'
import { listComponent, Section } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { Invoice } from '../common'
import { HeadTitle } from '../components'
import { Table } from '../reacttable/Table'
import { formatDate } from '../reacttable/utils'

export const InvoiceList = listComponent(Invoice, ({ data: invoiceList }) => {
  const { setHeaderText } = useAuth()
  // tslint:disable-next-line:no-null-keyword
  setHeaderText(null)
  const keys = Object.keys(invoiceList[0])
  const tableData = invoiceList.map(invoiceList =>
    keys.reduce(
      (acc, k) => ({
        ...acc,
        [k]: date.is(invoiceList[k])
          ? formatDate(invoiceList[k])
          : invoiceList[k],
        actions: 'actions',
      }),
      {},
    ),
  )
  return (
    <Section>
      <HeadTitle>Invoices</HeadTitle>
      <Table
        tableData={[
          // @TODO: Fix 'id' required/partial later
          ...((tableData as unknown) as ReadonlyArray<
            Omit<Invoice, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={['invoicesNo', 'valid', 'dueDate', 'amount']}
        filterOption={[{ columnName: 'invoicesNo', filterType: 'search' }]}
        headerLabels={{ invoicesNo: 'InVoices No.' }}
      />
    </Section>
  )
})
