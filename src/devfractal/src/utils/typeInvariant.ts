import { Mixed, TypeOf } from 'io-ts'
import { PathReporter } from 'io-ts/lib/PathReporter'
import { invariant } from './invariant'

export const typeInvariant: <Type extends Mixed, Value extends TypeOf<Type>>(
  type: Type,
  args: Value,
) => Value = (type, args) => {
  invariant(type.is(args), PathReporter.report(type.decode(args)).join('\n'))
  return args
}
