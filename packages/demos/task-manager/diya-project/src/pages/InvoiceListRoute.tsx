import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { invoiceAPI } from '../common'
import { InvoiceList } from '../views'

export const InvoiceListRoute = () => (
  <Get asyncFn={() => invoiceAPI.many()}>
    {data => <InvoiceList data={data} />}
  </Get>
)
