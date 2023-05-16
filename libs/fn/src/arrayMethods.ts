type Params<
  T,
  Name extends keyof ReadonlyArray<T>
> = ReadonlyArray<T>[Name] extends (...args: infer P) => any ? P : never;

type Returns<
  T,
  Name extends keyof ReadonlyArray<T>
> = ReadonlyArray<T>[Name] extends (...args: any[]) => infer R ? R : never;

export function arrayMethod<T, Name extends keyof ReadonlyArray<T>>(
  self: readonly T[],
  name: Name
) {
  return (...args: Params<T, Name>): Returns<T, Name> =>
    Array.prototype[name].call(self, ...args);
}

function method<Name extends keyof (readonly unknown[])>(name: Name) {
  return <T>(self: readonly T[], ...args: Params<T, Name>): Returns<T, Name> =>
    arrayMethod(self, name)(...args);
}

function piper<Name extends keyof (readonly unknown[])>(name: Name) {
  return <T>(...args: Params<T, Name>) =>
    (self: readonly T[]) =>
      arrayMethod(self, name)(...args);
}

export const fconcat = method("concat");
export const fslice = method("slice");
export const fjoin = method("join");
export const findexOf = method("indexOf");
export const flastIndexOf = method("lastIndexOf");
export const fevery = method("every");
export const fsome = method("some");
export const ffind = method("find");
export const ffindIndex = method("findIndex");
export const ffilter = method("filter");
export const fforEach = method("forEach");
export const fentries = method("entries");
export const fkeys = method("keys");
export const fvalues = method("values");
export const fincludes = method("includes");

// export const fflat = method('flat')
// export const fflatMap = method('flatMap')
// export const fmap = method('map')
// export const freduce = method('reduce')
// export const freduceRight = method('reduceRight')

export const aconcat = piper("concat");
export const aslice = piper("slice");
export const ajoin = piper("join");
export const aindexOf = piper("indexOf");
export const alastIndexOf = piper("lastIndexOf");
export const aevery = piper("every");
export const asome = piper("some");
export const afind = piper("find");
export const afindIndex = piper("findIndex");
export const afilter = piper("filter");

export const aforEach = piper("forEach");
export const aentries = piper("entries");
export const akeys = piper("keys");
export const avalues = piper("values");
export const aincludes = piper("includes");

// export const aflat = piper('flat')
// export const aflatMap = piper('flatMap')
// export const amap = piper('map')
// export const areduce = piper('reduce')
// export const areduceRight = piper('reduceRight')
