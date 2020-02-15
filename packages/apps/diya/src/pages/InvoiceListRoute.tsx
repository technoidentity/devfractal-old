import React from 'react'
import { All, paths } from 'technoidentity-devfractal'
import { invoiceAPI } from '../common'
import { InvoiceList } from '../views'

const ps = paths('invoices')

export const InvoiceListRoute = () => (
  <All api={invoiceAPI} path={ps.list} list={InvoiceList} />
)
