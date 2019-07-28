import React from 'react'
import { Simple } from 'technoidentity-devfractal-simple'
import { Title } from 'technoidentity-devfractal-ui-core'
import { Product } from './fakeData'

export interface AddProductFormProps {
  onAddProduct(product: Omit<Product, 'id'>): Promise<void>
}

export const AddProductForm: React.FC<AddProductFormProps> = ({
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
