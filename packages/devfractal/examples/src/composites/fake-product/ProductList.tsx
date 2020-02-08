import { Table, TableBody, TableHead, Th, Tr } from 'stp-ui'
import React from 'react'
import { Product } from './fakeData'
import { ProductItem } from './ProductItem'

export interface ProductListProps {
  readonly productList: readonly Product[]
  onDeleteTodo(id: number): Promise<void>
}

export const ProductList: React.FC<ProductListProps> = ({
  productList,
  onDeleteTodo,
}) => {
  return (
    <Table>
      <TableHead>
        <Tr>
          <Th>ID</Th>
          <Th>Title</Th>
          <Th>Price</Th>
        </Tr>
      </TableHead>
      <TableBody>
        {productList.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onDeleteProduct={async () => onDeleteTodo(product.id)}
          />
        ))}
      </TableBody>
    </Table>
  )
}
