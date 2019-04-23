import {
  isValid,
  MArray,
  MBool,
  MDate,
  MEnum,
  MNumber,
  MObject,
  MString,
  MT,
} from './index'

test('create meta using values', () => {
  const customerMeta: MT = MObject(
    {
      name: MString,
      type: MEnum(['manager', 'programmer', 'team-leader'], 'CustomerType'),
      joined: MDate,
      retired: MBool,
      addresses: MArray(
        MObject({
          city: MString,
          zip: MNumber,
          country: MString,
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

  expect(isValid(customerMeta, customer)).toBeTruthy()
})
