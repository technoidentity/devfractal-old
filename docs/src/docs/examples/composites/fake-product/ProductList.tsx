import React from 'react'
import { Table, TableBody, TableHead, Th, Tr } from '../../devfractal'
import { Product } from './fakeData'
import { ProductItem } from './ProductItem'

export interface ProductListProps {
  readonly productList: ReadonlyArray<Product>
  onDeleteTodo(id: number): Promise<void>
}

export const ProductList: React.SFC<ProductListProps> = ({
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
