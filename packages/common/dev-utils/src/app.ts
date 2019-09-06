import * as t from 'technoidentity-spec'
import { date } from 'technoidentity-spec'
import { req } from 'technoidentity-utils'
import { startFakeJSONServer } from './fakeServer'

const User = req({
  id: t.Int,
  name: t.string,
  male: t.boolean,
  dateOfBirth: date,
})

startFakeJSONServer([{ count: 10, name: 'users', spec: User }])
