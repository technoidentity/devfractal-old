import { produce } from 'immer'
import React from 'react'
import { CartList } from './CartList'
import { ProductList } from './Product'

export interface Product {
  readonly id: number
  readonly title: string
  readonly price: number
}

interface CartItem {
  readonly product: Product
  readonly count: number
}

export const productList: ReadonlyArray<Product> = [
  { id: 1, title: 'gdfkjhd', price: 524 },
  { id: 2, title: 'djkhgks', price: 376 },
  { id: 3, title: 'juaw', price: 278 },
]

// const cartList: ReadonlyArray<CartItem> = [
//   { product: productList[0], count: 1 },
//   { product: productList[1], count: 2 },
//   { product: productList[2], count: 3 },
// ]

export const Cart: React.FC = () => {
  const [cart, setCart] = React.useState<ReadonlyArray<CartItem>>([])
  const products: ReadonlyArray<Product> = productList

  const addToCart: (productID: number) => void = productId => {
    const newCart: ReadonlyArray<CartItem> = produce(cart, draft => {
      const prod: Product | undefined = products.find(p => productId === p.id)
      if (prod === undefined) {
        // tslint:disable-next-line: no-console
        console.error(`no product with id:${productId}`)
        return
      }
      // tslint:disable-next-line:typedef
      const cartItem = draft.find(ci => productId === ci.product.id)
      if (cartItem === undefined) {
        draft.push({ product: prod, count: 1 })
      } else {
        // tslint:disable-next-line: no-object-mutation
        ++cartItem.count
      }
    })
    setCart(newCart)
  }

  return (
    <>
      <ProductList productList={productList} onAddProduct={addToCart} />
      <CartList cartList={cart} />
    </>
  )
}
