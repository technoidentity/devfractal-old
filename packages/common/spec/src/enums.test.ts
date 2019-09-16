import { isRight } from 'fp-ts/lib/Either'
import { type, TypeOf } from 'io-ts'
import { enums } from './enums'

// tslint:disable typedef

it('enums', () => {
  const Foo = type({ foo: enums('Color', 'red', 'green', 'blue') })
  type Foo = TypeOf<typeof Foo>

  const foo: Foo = { foo: 'red' }

  let decoded = Foo.decode(foo)

  expect(decoded._tag).toEqual('Right')
  if (isRight(decoded)) {
    expect(decoded.right).toEqual(foo)
  }

  decoded = Foo.decode({ foo: 'hello' })
  expect(decoded._tag).toEqual('Left')
})
