import { range } from '@stp/utils'
import Chance from 'chance'

const chance: Chance.Chance = new Chance()

const fakeID: () => number = () => chance.integer({ min: 100, max: 1000 })

const fakeTitle: () => string = () => chance.sentence({ words: 3 })

const fakePrice: () => number = () =>
  chance.floating({ fixed: 3, min: 0, max: 1000 })

export interface Product {
  readonly id: number
  readonly title: string
  readonly price: number
}

export const fakeProducts: (
  n: number,
) => Promise<ReadonlyArray<Product>> = async n =>
  range(n).map(_ => ({ id: fakeID(), title: fakeTitle(), price: fakePrice() }))
