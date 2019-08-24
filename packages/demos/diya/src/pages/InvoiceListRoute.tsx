import React from 'react'
import { v2 } from 'technoidentity-devfractal'
import { invoiceAPI } from '../common'
import { InvoiceList } from '../views'

const paths = v2.paths('invoices')

export const InvoiceListRoute = () => (
  <v2.All api={invoiceAPI} path={paths.list} list={InvoiceList} />
)
