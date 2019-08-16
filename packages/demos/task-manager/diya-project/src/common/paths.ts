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
    list: () => `/${resource}`,
    create: () => `/${resource}/add`,
    edit: (id: string | number) => `/${resource}/${id}/edit`,
  }
}
