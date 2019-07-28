import React from 'react'
import { Button, Td, Tr } from 'technoidentity-devfractal-ui-core'
import { Product } from './fakeData'

export interface ProductItemProps {
  readonly product: Product
  onDeleteProduct(id: number): Promise<void>
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  onDeleteProduct,
}) => {
  return (
    <Tr>
      <Td>{product.id}</Td>
      <Td>{product.title}</Td>
      <Td>{product.price}</Td>
      <Td>
        <Button
          variant="danger"
          onClick={async () => onDeleteProduct(product.id)}
        >
          Delete
        </Button>
      </Td>
    </Tr>
  )
}
