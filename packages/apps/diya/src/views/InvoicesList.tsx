import React from 'react'
import { listComponent, RoutedPager, SimpleTable } from 'technoidentity-crud'
import { Section } from 'technoidentity-ui'
import { Invoice } from '../common'
import { HeadTitle } from '../components'

export const InvoiceList = listComponent(Invoice, ({ data: invoiceList }) => (
  <Section>
    <HeadTitle>Invoices</HeadTitle>

    <SimpleTable
      data={invoiceList}
      select={['invoicesNo', 'valid', 'dueDate', 'amount']}
      override={{ invoicesNo: 'InVoices No.' }}
    />

    <RoutedPager />
  </Section>
))
