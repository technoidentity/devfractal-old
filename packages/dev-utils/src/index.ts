import * as io from 'io-ts'
import * as server from 'json-server'
import { buildObject, fake } from 'technoidentity-utils'

const port = process.env.PORT || 3000

export function startFakeJSONServer<
  T extends Record<string, io.Type<any, any>>
>(faker: T) {
  server
    .create()
    .use(server.defaults())
    .use(server.router(buildObject(faker, v => fake(io.readonlyArray(v)))))
    .listen(port, () => {
      console.log('fake JSON Server is running')
    })
}
