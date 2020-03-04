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
} from 'technoidentity-utils'
import { CheckboxFieldProps, DateFieldProps, InputFieldProps } from './fields'
import { Simple } from './SimpleForm'

type _Props<O extends Props, R extends Props> = ObjC<O, R>['props']

type SpecFieldOuterProps<
  Opt extends Props,
  Req extends Props,
  Name extends keyof ObjC<Opt, Req>['props']
> = _Props<Opt, Req>[Name] extends NumberC | StringC
  ? Omit<InputFieldProps, 'name' | 'value'>
  : _Props<Opt, Req>[Name] extends BooleanC
  ? Omit<CheckboxFieldProps, 'name' | 'value'>
  : _Props<Opt, Req>[Name] extends DateC
  ? Omit<DateFieldProps, 'name' | 'value'>
  : never

export type SpecFieldOwnProps<
  Opt extends Props,
  Req extends Props,
  Name extends keyof ObjTypeOf<Opt, Req>
> = SpecFieldOuterProps<Opt, Req, Name> & {
  readonly name: Name
  readonly value?: ObjTypeOf<Opt, Req>[Name]
  readonly label?: string
  readonly spec: ObjC<Opt, Req>
}

export function SpecField<
  Opt extends Props,
  Req extends Props,
  Name extends keyof ObjC<Opt, Req>['props']
>({ spec, name, ...props }: SpecFieldOwnProps<Opt, Req, Name>): JSX.Element {
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
