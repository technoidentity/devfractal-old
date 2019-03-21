import { Either } from 'fp-ts/lib/Either'
import * as t from 'io-ts'
import { reporter } from 'io-ts-reporters'
import { IntegerFromString } from 'io-ts-types'
import { fatal } from './internal'

export const toInt: (from: string) => number = from => {
  const decoded: Either<t.Errors, number> = IntegerFromString.decode(from)
  return decoded.isRight() ? decoded.value : fatal(reporter(decoded).join('\n'))
}
