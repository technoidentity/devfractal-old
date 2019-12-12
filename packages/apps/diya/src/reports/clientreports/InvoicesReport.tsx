import React from 'react'
// import { HeadTitle } from '../../components'
import { Table } from '../../reacttable/Table'

export const InvoicesReport: React.FC = () => {
  const data = [
    {
      id: '1',
      clientName: 'Amazon',
      billingType: 'Monthly',
      dueOn: '10/10/2019',
      renewBy: '20/09/2019',
    },
    {
      id: '2',
      clientName: 'Amazon',
      billingType: 'Monthly',
      dueOn: '10/10/2019',
      renewBy: '20/09/2019',
    },
    {
      id: '3',
      clientName: 'Amazon',
      billingType: 'Monthly',
      dueOn: '10/10/2019',
      renewBy: '20/09/2019',
    },
  ]
  return (
    <>
      {/* <HeadTitle> Client Reports > Invoices Report</HeadTitle> */}
      <Table
        tableData={data}
        sorting={true}
        pagination={true}
        headerNames={['clientName', 'billingType', 'dueOn', 'renewBy']}
      />
    </>
  )
}
