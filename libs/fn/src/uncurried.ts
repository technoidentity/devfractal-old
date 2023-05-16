import {
  arrayEqual,
  aget,
  insert,
  paged,
  push,
  remove,
  replace,
  sorted,
  splitAt,
  unshift,
} from "./array";
import {
  all,
  any,
  chain,
  cons,
  filter,
  findIndex,
  flatMap,
  fmax,
  fmin,
  groupBy,
  iterEqual,
  iterSlice,
  map,
  maxBy,
  maxByProp,
  minBy,
  minByProp,
  reduce,
  skip,
  skipWhile,
  take,
  takeWhile,
  zip,
  zipLongest,
  zipWith,
} from "./iter";
import {
  buildObject,
  merge,
  omit,
  omitBy,
  pick,
  pickBy,
  pluck,
} from "./object";
import { pipe } from "./pipe";

export function unpipe<Args extends any[], Src, R>(
  f: (...args: Args) => (src: Src) => R
) {
  return (src: Src, ...args: Args) => pipe(src, f(...args));
}

export function p<Args extends any[], Src, R>(
  f: (src: Src, ...args: Args) => R
) {
  return (...args: Args) =>
    (src: Src): R =>
      f(src, ...args);
}

export const map$ = unpipe(map);
export const filter$ = unpipe(filter);
export const iterEqual$ = unpipe(iterEqual);
export const groupBy$ = unpipe(groupBy);
export const flatMap$ = unpipe(flatMap);
export const zip$ = unpipe(zip);
export const zipLongest$ = unpipe(zipLongest);
export const maxBy$ = unpipe(maxBy);
export const minBy$ = unpipe(minBy);
export const maxByProp$ = unpipe(maxByProp);
export const minByProp$ = unpipe(minByProp);
export const iterSlice$ = unpipe(iterSlice);
export const chain$ = unpipe(chain);
export const takeWhile$ = unpipe(takeWhile);
export const skipWhile$ = unpipe(skipWhile);

export const at$ = unpipe(aget);
export const take$ = unpipe(take);
export const skip$ = unpipe(skip);
export const insert$ = unpipe(insert);
export const replace$ = unpipe(replace);
export const remove$ = unpipe(remove);
export const paged$ = unpipe(paged);
export const splitAt$ = unpipe(splitAt);
export const push$ = unpipe(push);
export const unshift$ = unpipe(unshift);
export const sorted$ = unpipe(sorted);
export const arrayEqual$ = unpipe(arrayEqual);
export const zipWith$ = unpipe(zipWith);
export const reduce$ = unpipe(reduce);
export const findIndex$ = unpipe(findIndex);
export const all$ = unpipe(all);
export const any$ = unpipe(any);
export const fmin$ = unpipe(fmin);
export const fmax$ = unpipe(fmax);
export const cons$ = unpipe(cons);

export const pick$ = unpipe(pick);
export const omit$ = unpipe(omit);
export const pluck$ = unpipe(pluck);
export const merge$ = unpipe(merge);
export const buildObject$ = unpipe(buildObject);
export const pickBy$ = unpipe(pickBy);
export const omitBy$ = unpipe(omitBy);
