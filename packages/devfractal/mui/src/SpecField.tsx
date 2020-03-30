import React from 'react'
import {
  BooleanC,
  BooleanType,
  DateC,
  EnumType,
  NumberC,
  NumberType,
  ObjC,
  ObjTypeOf,
  Props,
  StringC,
  StringType,
} from 'srtp-utils'
import { CheckboxFieldProps, DateFieldProps, InputFieldProps } from './fields'
import { Simple } from './SimpleForm'

type SpecFieldOuterProps<
  O extends Props,
  R extends Props,
  Name extends keyof ObjC<O, R>['props']
> = ObjC<O, R>['props'][Name] extends NumberC | StringC
  ? Omit<InputFieldProps, 'name' | 'value'>
  : ObjC<O, R>['props'][Name] extends BooleanC
  ? Omit<CheckboxFieldProps, 'name' | 'value'>
  : ObjC<O, R>['props'][Name] extends DateC
  ? Omit<DateFieldProps, 'name' | 'value'>
  : never

export interface SpecFieldOwnProps<
  O extends Props,
  R extends Props,
  N extends keyof ObjTypeOf<O, R>
> {
  readonly name: N
  readonly value?: ObjTypeOf<O, R>[N]
  readonly label?: string
  readonly spec: ObjC<O, R>
}

export type SpecFieldProps<
  O extends Props,
  R extends Props,
  N extends keyof ObjTypeOf<O, R>
> = SpecFieldOuterProps<O, R, N> & SpecFieldOwnProps<O, R, N>

export function SpecField<
  O extends Props,
  R extends Props,
  N extends keyof ObjC<O, R>['props']
>({ spec, name, ...props }: SpecFieldProps<O, R, N>): JSX.Element {
  if (spec.props[name] instanceof StringType) {
    return <Simple.Text name={name as string} {...props} />
  }

  if (spec.props[name] instanceof NumberType) {
    return <Simple.Text name={name as string} {...props} />
  }

  if (spec.props[name] instanceof BooleanType) {
    return <Simple.Checkbox name={name as string} {...props} />
  }

  if (
    spec.props[name].name === 'Date' ||
    spec.props[name].name === 'DateFromISOString'
  ) {
    return <Simple.Date name={name as string} {...props} />
  }

  if (spec.props[name] instanceof EnumType) {
    return <Simple.Select name={name as string} {...props} />
  }

  throw new Error(`unsupported spec: ${spec.props[name].name}`)
}
