import { compareAsc } from 'date-fns'
import * as t from 'tcomb'

// tslint:disable typedef

export const Positive = t.refinement(t.Number, n => n >= 0, 'Positive')
export const Negative = t.refinement(t.Number, n => n <= 0, 'Negative')
export function Min(min: number) {
  return t.refinement(t.Number, n => n >= min, 'Min')
}
export function Max(max: number) {
  return t.refinement(t.Number, n => n <= max, 'Max')
}

export const PositiveInt = t.refinement(t.Integer, n => n >= 0, 'PositiveInt')
export const NegativeInt = t.refinement(t.Integer, n => n <= 0, 'NegativeInt')
export function MinInt(min: number) {
  return t.refinement(t.Integer, n => n >= min, 'MinInt')
}
export function MaxInt(max: number) {
  return t.refinement(t.Integer, n => n <= max, 'MaxInt')
}

// eslint-disable-next-line
const rEmail: RegExp = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
// eslint-disable-next-line
const rUrl: RegExp = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i

export const Email = t.refinement(t.String, s => rEmail.test(s), 'Email')
export const Url = t.refinement(t.String, s => rUrl.test(s), 'Url')
export const Lower = t.refinement(
  t.String,
  s => s.toLowerCase() === s,
  'Lowercase',
)
export const Upper = t.refinement(
  t.String,
  s => s.toUpperCase() === s,
  'Uppercase',
)
export function Length(len: number) {
  return t.refinement(t.String, s => s.length === len, 'StringLength')
}
export function MinStringLength(min: number) {
  return t.refinement(t.String, s => s.length >= min, 'MinStringLength')
}
export function MaxStringLength(max: number) {
  return t.refinement(t.String, s => s.length <= max, 'MaxStringLength')
}

export function Literal(literal: string) {
  return t.refinement(t.String, s => s === literal)
}

export function MinDate(min: Date) {
  return t.refinement(t.Date, d => compareAsc(min, d) <= 0, 'MinDate')
}
export function MaxDate(max: Date) {
  return t.refinement(t.Date, d => compareAsc(max, d) >= 0, 'MaxDate')
}

export function ArrayMinLength(min: number) {
  return t.refinement(t.Array, arr => arr.length >= min, 'ArrayMinLength')
}
export function ArrayMaxLength(max: number) {
  return t.refinement(t.Array, arr => arr.length <= max, 'ArrayMaxLength')
}
