import { Button, Table, TableBody, TableHead, Td, Th, Title, Tr } from '@stp/ui'
import React from 'react'

export interface Product {
  readonly id: number
  readonly title: string
  readonly price: number
}
interface ProductProps {
  readonly product: Product
  onAddProduct(id: number): void
}

export const Product: React.FC<ProductProps> = ({ product, onAddProduct }) => {
  return (
    <Tr>
      <Td>{product.id}</Td>
      <Td>{product.title}</Td>
      <Td>{product.price}</Td>
      <Td>
        <Button onClick={() => onAddProduct(product.id)}>AddProduct</Button>
      </Td>
    </Tr>
  )
}

interface ProductListProps {
  readonly productList: readonly Product[]
  onAddProduct(id: number): void
}

export const ProductList: React.FC<ProductListProps> = ({
  productList,
  onAddProduct,
}) => {
  return (
    <>
      <Title>Products</Title>
      <Table>
        <TableHead>
          <Tr>
            <Th>id</Th>
            <Th>title</Th>
            <Th>price</Th>
          </Tr>
        </TableHead>
        <TableBody>
          {productList.map((product, index) => (
            <Product
              key={index}
              product={product}
              onAddProduct={onAddProduct}
            />
          ))}
        </TableBody>
      </Table>
    </>
  )
}
