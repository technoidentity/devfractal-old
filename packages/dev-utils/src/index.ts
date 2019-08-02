import * as io from 'io-ts'
import * as server from 'json-server'
import { buildObject, fake, range } from 'technoidentity-utils'

export function startFakeJSONServer<
  T extends Record<string, io.Type<any, any>>
>(faker: T, port = process.env.PORT || 5555, eachCount: number = 10) {
  server
    .create()
    .use(server.defaults())
    .use(
      server.router(
        buildObject(faker, v => range(eachCount).map(_ => fake(v))),
      ),
    )
    .listen(port, () => {
      console.log(`fake JSON Server is running at port: ${port}`)
    })
}
