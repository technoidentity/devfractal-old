import { useParams as useParamsRR } from 'react-router'
import { cast, Mixed, TypeOf } from 'technoidentity-utils'

export function useParams<Spec extends Mixed>(paramsSpec: Spec): TypeOf<Spec> {
  // tslint:disable-next-line: typedef
  const params = useParamsRR()
  cast(paramsSpec, params)

  return params
}
