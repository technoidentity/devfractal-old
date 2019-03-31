import * as t from 'io-ts'

// tslint:disable readonly-array

export const idRT: t.UnionC<
  [t.BrandC<t.NumberC, t.IntBrand>, t.StringC]
> = t.union([t.Int, t.string])

// tslint:enable readonly-array
