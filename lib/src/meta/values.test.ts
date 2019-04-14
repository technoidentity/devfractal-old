import { MT } from './index'
import { validate } from './validate'
import {
  ArrayMeta,
  BooleanMeta,
  DateMeta,
  EnumMeta,
  NumberMeta,
  ObjectMeta,
  StringMeta,
} from './values'

test('create meta using values', () => {
  const customerMeta: MT = ObjectMeta(
    {
      name: StringMeta,
      type: EnumMeta(['manager', 'programmer', 'team-leader'], 'CustomerType'),
      joined: DateMeta,
      retired: BooleanMeta,
      addresses: ArrayMeta(
        ObjectMeta({
          city: StringMeta,
          zip: NumberMeta,
          country: StringMeta,
        }),
      ),
    },

    'Customer',
  )

  // tslint:disable-next-line:typedef
  const customer = {
    name: 'foobar',
    type: 'team-leader',
    joined: new Date(),
    retired: false,
    addresses: [
      { city: 'hyderabad', zip: 500018, country: 'india' },
      { city: 'chennai', zip: 500038, country: 'india' },
    ],
  }

  expect(validate(customerMeta, customer)).toBeTruthy()
})
