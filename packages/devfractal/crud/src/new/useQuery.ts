import { useLocation } from 'stp-router'
import { cast, ObjC, Props, record, string, TypeOf } from 'stp-utils'
import { parse } from 'query-string'

export function useQuery<Opt extends Props, Req extends Props>(
  spec: ObjC<Req, Opt>,
): TypeOf<typeof spec> {
  const { search } = useLocation()
  const query: Record<string, string> = cast(
    record(string, string),
    parse(search),
  )

  return cast(spec, query)
}
