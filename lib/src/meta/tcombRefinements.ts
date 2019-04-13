import * as t from 'tcomb'

// tslint:disable typedef

export const Positive = t.refinement(Number, n => n >= 0, 'Positive')
export const Negative = t.refinement(Number, n => n <= 0, 'Negative')
export const Min = (min: number) => t.refinement(t.Number, n => n >= min)
export const Max = (max: number) => t.refinement(t.Number, n => n <= max)

// @TODO: Implement Email and Url
export const Email = t.refinement(t.String, _ => true)
export const Url = t.refinement(t.String, _ => true)
export const Lower = t.refinement(t.String, s => s.toLowerCase() === s)
export const Upper = t.refinement(t.String, s => s.toUpperCase() === s)
export const Length = (len: number) =>
  t.refinement(t.String, s => s.length === len)
export const MinLength = (min: number) =>
  t.refinement(t.String, s => s.length >= min)
export const MaxLength = (max: number) =>
  t.refinement(t.String, s => s.length <= max)

// @TODO: Implement MinDate and MaxDate
export const MinDate = (_: Date) => t.refinement(t.Date, _ => true)
export const MaxDate = (_: Date) => t.refinement(t.Date, _ => true)

export const ArrayMinLength = (min: number) =>
  t.refinement(t.Array, arr => arr.length >= min)
export const ArrayMaxLength = (max: number) =>
  t.refinement(t.Array, arr => arr.length <= max)
