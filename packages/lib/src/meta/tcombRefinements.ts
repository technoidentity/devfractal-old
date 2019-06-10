import * as t from 'tcomb'

// tslint:disable typedef

export const Positive = t.refinement(Number, n => n >= 0, 'Positive')
export const Negative = t.refinement(Number, n => n <= 0, 'Negative')
export function Min(min: number) {
  return t.refinement(t.Number, n => n >= min)
}
export function Max(max: number) {
  return t.refinement(t.Number, n => n <= max)
}

// @TODO: Implement Email and Url
export const Email = t.refinement(t.String, _ => true)
export const Url = t.refinement(t.String, _ => true)
export const Lower = t.refinement(t.String, s => s.toLowerCase() === s)
export const Upper = t.refinement(t.String, s => s.toUpperCase() === s)

export function Length(len: number) {
  return t.refinement(t.String, s => s.length === len)
}

export function MinStringLength(min: number) {
  return t.refinement(t.String, s => s.length >= min)
}
export function MaxStringLength(max: number) {
  return t.refinement(t.String, s => s.length <= max)
}

// @TODO: Implement MinDate and MaxDate
export function MinDate(_: Date) {
  return t.refinement(t.Date, _ => true)
}
export function MaxDate(_: Date) {
  return t.refinement(t.Date, _ => true)
}

export function ArrayMinLength(min: number) {
  return t.refinement(t.Array, arr => arr.length >= min)
}

export function ArrayMaxLength(max: number) {
  return t.refinement(t.Array, arr => arr.length <= max)
}
