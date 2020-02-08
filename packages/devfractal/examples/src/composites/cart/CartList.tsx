import React from 'react'
import { Table, TableBody, TableHead, Td, Th, Title, Tr } from 'technoidentity-ui'
import { Product } from './Product'

interface CartItem {
  readonly product: Product
  readonly count: number
}
export interface CartItemProps {
  readonly cartItem: CartItem
}

export const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  return (
    <Tr>
      <Td>{cartItem.product.id}</Td>
      <Td>{cartItem.product.title}</Td>
      <Td>{cartItem.product.price}</Td>
      <Td>{cartItem.count}</Td>
    </Tr>
  )
}

export interface CartListProps {
  readonly cartList: readonly CartItem[]
}

export const CartList: React.FC<CartListProps> = ({ cartList }) => {
  return (
    <>
      <Title>Cart</Title>
      <Table>
        <TableHead>
          <Tr>
            <Th>id</Th>
            <Th>title</Th>
            <Th>price</Th>
          </Tr>
        </TableHead>
        <TableBody>
          {cartList.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))}
        </TableBody>
      </Table>
    </>
  )
}
