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
