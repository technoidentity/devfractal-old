import { FormikActions } from 'formik'
import { Mixed, readonlyArray, TypeOf } from 'io-ts'
import { fn, props, req } from 'technoidentity-utils'

// tslint:disable typedef

export function paths(resource: string) {
  return {
    list: `/${resource}`,
    edit: `/${resource}/:id/edit`,
    create: `/${resource}/add`,
  }
}

export function links(resource: string) {
  return {
    ...paths(resource),
    edit: (id: string | undefined) => `/${resource}/${id}/edit`,
  }
}

export function formProps<Spec extends Mixed>(spec: Spec) {
  return props(
    { initial: spec },
    {
      onSubmit: fn<
        (
          values: TypeOf<Spec>,
          actions: FormikActions<TypeOf<Spec>>,
        ) => Promise<void>
      >(),
    },
  )
}

export function listProps<Spec extends Mixed>(spec: Spec) {
  return req({ data: readonlyArray(spec) })
}
