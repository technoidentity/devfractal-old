import React from 'react'
import { Omit, Simple, Title } from '../../devfractal'
import { Product } from './fakeData'

export interface AddProductFormProps {
  onAddProduct(product: Omit<Product, 'id'>): Promise<void>
}

export const AddProductForm: React.SFC<AddProductFormProps> = ({
  onAddProduct,
}) => {
  return (
    <>
      <Title>AddProductForm</Title>
      <Simple.Form
        initialValues={{ title: '', price: 0 }}
        onSubmit={async (values: Omit<Product, 'id'>, actions) => {
          await onAddProduct(values)
          actions.setSubmitting(false)
        }}
      >
        <Simple.Text name="title" />
        <Simple.Number name="price" />
        <Simple.FormButtons />
      </Simple.Form>
    </>
  )
}
