import { useParams } from 'react-router'
import { cast, Mixed, TypeOf } from 'technoidentity-utils'

export function useParamsSafe<Spec extends Mixed>(
  paramsSpec: Spec,
): TypeOf<Spec> {
  // tslint:disable-next-line: typedef
  const params = useParams()
  cast(paramsSpec, params)

  return params
}
