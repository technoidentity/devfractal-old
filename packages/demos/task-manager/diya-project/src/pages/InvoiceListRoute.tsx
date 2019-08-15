import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { invoiceAPI } from '../common'
import { InvoiceList } from '../views/InvoicesList'

export const InvoiceListRoute: React.FC = () => (
  <Get asyncFn={() => invoiceAPI.many()}>
    {data => <InvoiceList invoiceList={data} />}
  </Get>
)
