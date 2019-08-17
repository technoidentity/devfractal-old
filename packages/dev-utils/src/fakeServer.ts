import * as server from 'json-server'
import { HasProps, range } from 'technoidentity-utils'
import { fake } from './fake'

interface ResourceConfig {
  readonly spec: HasProps
  readonly name: string
  readonly count: number
}

function fakeObjects(resources: readonly ResourceConfig[]) {
  const result: any = {}
  for (const { name, count, spec } of resources) {
    // tslint:disable-next-line: no-object-mutation
    result[name] = range(count).map(_ => fake(spec))
  }

  return result
}

export function startFakeJSONServer(
  resources: readonly ResourceConfig[],
  port = process.env.PORT || 5555,
) {
  server
    .create()
    .use(server.defaults())
    .use(server.router(fakeObjects(resources)))
    .listen(port, () => {
      console.log(`fake JSON Server is running at port: ${port}`)
    })
}
