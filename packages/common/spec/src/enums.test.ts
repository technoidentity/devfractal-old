import { isRight } from 'fp-ts/lib/Either'
import { type, TypeOf } from 'io-ts'
import { enumerate, enums } from './enums'

// tslint:disable typedef

describe('enums', () => {
  const Foo = type({ foo: enums('Color', 'red', 'green', 'blue') })

  it('name', () => {
    expect(Foo.props.foo.name).toEqual('Color')
  })

  it('success case', () => {
    type Foo = TypeOf<typeof Foo>
    const foo: Foo = { foo: 'red' }
    const decoded = Foo.decode(foo)
    expect(decoded._tag).toEqual('Right')
    if (isRight(decoded)) {
      expect(decoded.right).toEqual(foo)
    }
  })

  it('failure case', () => {
    const decoded = Foo.decode({ foo: 'hello' })
    expect(decoded._tag).toEqual('Left')
  })

  it('name of unnamed', () => {
    const Color = enumerate('red', 'green', 'blue')

    expect(Color.name).toEqual('Enum<red | green | blue>')
  })
})
