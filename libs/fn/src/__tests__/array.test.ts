/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  aget,
  deepFlatten,
  first,
  insert,
  last,
  maxIndex,
  minIndex,
  paged,
  pop,
  push,
  remove,
  replace,
  reversed,
  shift,
  unique,
  uniqueSorted,
  unshift,
  zipAll,
} from "../array";

import { expect, test } from "vitest";
import { pipe } from "../pipe";
import { arrayEqual$, sorted$, splitAt$ } from "../uncurried";

test("first", () => {
  expect(first([1])).toBe(1);
  expect(first([1, 2, 3])).toBe(1);
  expect(() => first([])).toThrow();
});

test("last", () => {
  expect(last([1])).toBe(1);
  expect(last([1, 2, 3])).toBe(3);
  expect(() => last([])).toThrow();
});

test("at", () => {
  expect(pipe([1], aget(0))).toBe(1);
  expect(pipe([1, 2, 3], aget(0))).toBe(1);
  expect(pipe([1, 2, 3], aget(1))).toBe(2);
  expect(pipe([1, 2, 3], aget(2))).toBe(3);
  expect(() => pipe([1, 2, 3], aget(3))).toThrow();
  expect(pipe([1, 2, 3], aget(-1))).toBe(3);
  expect(() => pipe([], aget(0))).toThrow();
  expect(() => pipe([], aget(0))).toThrow();
});

// test('slice', () => {
//   expect(pipe([], slice(0))).toEqual([])
//   expect(pipe([1, 2, 3, 4, 5], slice(0, 2))).toEqual([1, 2])
//   expect(pipe([1, 2, 3, 4, 5], slice(2))).toEqual([3, 4, 5])
//   expect(pipe([1, 2, 3, 4, 5], slice(2, 4))).toEqual([3, 4])
//   expect(pipe([1, 2, 3, 4, 5], slice(0, 6))).toEqual([1, 2, 3, 4, 5])
//   expect(pipe([1, 2, 3, 4, 5], slice(5))).toEqual([])
//   expect(pipe([1, 2, 3, 4, 5], slice(0, -1))).toEqual([1, 2, 3, 4])
//   expect(pipe([1, 2, 3, 4, 5], slice(0, -2))).toEqual([1, 2, 3])
//   expect(pipe([1, 2, 3, 4, 5], slice(0, -6))).toEqual([])
// })

test("push", () => {
  expect(pipe([], push(2))).toEqual([2]);
  expect(pipe([1, 2, 3], push(4, 5))).toEqual([1, 2, 3, 4, 5]);
  expect(pipe([], push(1, 2, 3))).toEqual([1, 2, 3]);
});

test("pop", () => {
  expect(pipe([1, 2, 3], pop)).toEqual([1, 2]);
  expect(pipe([1], pop)).toEqual([]);
  expect(pipe([], pop)).toEqual([]);
});

test("unshift", () => {
  expect(pipe([], unshift(2))).toEqual([2]);
  expect(pipe([1, 2, 3], unshift(4, 5))).toEqual([4, 5, 1, 2, 3]);
  expect(pipe([], unshift(1, 2, 3))).toEqual([1, 2, 3]);
});

test("shift", () => {
  expect(pipe([1, 2, 3], shift)).toEqual([2, 3]);
  expect(pipe([1], shift)).toEqual([]);
  expect(pipe([], shift)).toEqual([]);
});

test("insert", () => {
  expect(pipe([1, 2, 3], insert(0, 0))).toEqual([0, 1, 2, 3]);
  expect(pipe([1, 2, 3], insert(0, -1, 0))).toEqual([-1, 0, 1, 2, 3]);
  expect(pipe([1, 2, 3], insert(1, 0))).toEqual([1, 0, 2, 3]);
  expect(pipe([1, 2, 3], insert(2, 0))).toEqual([1, 2, 0, 3]);
  expect(pipe([1, 2, 3], insert(3, 0))).toEqual([1, 2, 3, 0]);
  expect(() => pipe([1, 2, 3], insert(4, 0))).toThrow();
  expect(() => pipe([1, 2, 3], insert(-1, 0))).toThrow();
});

test("replace", () => {
  expect(pipe([1, 2, 3], replace(0, 0))).toEqual([0, 2, 3]);
  expect(pipe([1, 2, 3], replace(1, 0))).toEqual([1, 0, 3]);
  expect(pipe([1, 2, 3], replace(2, 0))).toEqual([1, 2, 0]);
  expect(() => pipe([1, 2, 3], replace(3, 0))).toThrow();
  expect(() => pipe([1, 2, 3], replace(-1, 0))).toThrow();
});

test("remove", () => {
  expect(pipe([1, 2, 3, 4], remove(0))).toEqual([2, 3, 4]);
  expect(pipe([1, 2, 3, 4], remove(1))).toEqual([1, 3, 4]);
  expect(pipe([1, 2, 3, 4], remove(2))).toEqual([1, 2, 4]);
  expect(pipe([1, 2, 3, 4], remove(3))).toEqual([1, 2, 3]);
  expect(() => pipe([1, 2, 3, 4], remove(4))).toThrow();
  expect(() => pipe([1, 2, 3, 4], remove(-1))).toThrow();
});

test("paged", () => {
  expect(pipe([1, 2, 3, 4, 5], paged(1, 2))).toEqual([1, 2]);
  expect(pipe([1, 2, 3, 4, 5], paged(2, 2))).toEqual([3, 4]);
  expect(pipe([1, 2, 3, 4, 5], paged(3, 2))).toEqual([5]);
  expect(() => pipe([1, 2, 3, 4, 5], paged(4, 2))).toThrow();

  expect(pipe([1, 2, 3, 4, 5, 6], paged(1, 2))).toEqual([1, 2]);
  expect(pipe([1, 2, 3, 4, 5, 6], paged(2, 2))).toEqual([3, 4]);
  expect(pipe([1, 2, 3, 4, 5, 6], paged(3, 2))).toEqual([5, 6]);
  expect(() => pipe([1, 2, 3, 4, 5, 6], paged(4, 2))).toThrow();

  expect(() => pipe([1, 2], paged(0, 2))).toThrow();
  expect(() => pipe([1, 2], paged(2, 0))).toThrow();
});

test("arrayEqual", () => {
  expect(arrayEqual$([1, 2, 3], [1, 2, 3])).toBe(true);
  expect(arrayEqual$([1, 2, 3], [1, 2, 3, 4])).toBe(false);
  expect(arrayEqual$([1, 2, 3], [1, 2, 4])).toBe(false);
  expect(arrayEqual$([1, 2, 3], [1, 2])).toBe(false);
  expect(arrayEqual$([1, 2, 3], [1, 3, 2])).toBe(false);
  expect(arrayEqual$([], [])).toBe(true);
  expect(arrayEqual$([], [1])).toBe(false);
});

test("unique", () => {
  expect(unique([2, 1, 2])).toEqual([2, 1]);
  expect(unique(["a", 1, "a", 2, "1"])).toEqual(["a", 1, 2, "1"]);
  expect(unique([false, true, true, false, 0, 1, "s", 1])).toEqual([
    false,
    true,
    0,
    1,
    "s",
  ]);
  expect(unique([])).toEqual([]);
  expect(unique([1])).toEqual([1]);
  expect(unique([1, 1, 0, 0, "", ""])).toEqual([1, 0, ""]);
});

test("flatten", () => {
  expect(deepFlatten([])).toEqual([]);
  expect(deepFlatten([[[[[]]]]])).toEqual([]);
  expect(deepFlatten([1, 2, 3])).toEqual([1, 2, 3]);
  expect(deepFlatten([1, [2, 3]])).toEqual([1, 2, 3]);
  expect(deepFlatten([1, [2, [3]]])).toEqual([1, 2, 3]);
  expect(deepFlatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  expect(deepFlatten([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  expect(deepFlatten([1, [2, [3], [4], [5]]])).toEqual([1, 2, 3, 4, 5]);
});

test("zipAll", () => {
  expect(zipAll()).toEqual([]);
  expect(zipAll([])).toEqual([]);
  expect(zipAll([1], [2], [3])).toEqual([[1, 2, 3]]);
  expect(zipAll([1, 2], [3, 4], [5, 6])).toEqual([
    [1, 3, 5],
    [2, 4, 6],
  ]);
  expect(zipAll([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]);
  expect(zipAll([1, 2, 3], [4, 5, 6, 100], [7, 8, 9])).toEqual([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]);
  expect(zipAll([1, 2, 3], [4, 5, 6], [7, 8])).toEqual([
    [1, 4, 7],
    [2, 5, 8],
  ]);
});

test("splitAt", () => {
  expect(splitAt$([], 0)).toEqual([[], []]);
  expect(splitAt$([], 1)).toEqual([[], []]);
  expect(splitAt$([1], 0)).toEqual([[], [1]]);
  expect(splitAt$([1], 1)).toEqual([[1], []]);
  expect(splitAt$([1, 2, 3], 0)).toEqual([[], [1, 2, 3]]);
  expect(splitAt$([1, 2, 3], 1)).toEqual([[1], [2, 3]]);
  expect(splitAt$([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  expect(splitAt$([1, 2, 3], 3)).toEqual([[1, 2, 3], []]);
  expect(splitAt$([1, 2, 3], 4)).toEqual([[1, 2, 3], []]);
});

const cmp = (x: number, y: number) => x - y;

test("sorted", () => {
  expect(sorted$([], cmp)).toEqual([]);
  expect(sorted$([1], cmp)).toEqual([1]);
  expect(sorted$([2, 1], cmp)).toEqual([1, 2]);
  expect(sorted$([3, 2, 1], cmp)).toEqual([1, 2, 3]);
  expect(sorted$([3, 2, 1, 4], cmp)).toEqual([1, 2, 3, 4]);
  expect(sorted$([3, 2, 1, 4, 5], cmp)).toEqual([1, 2, 3, 4, 5]);
  expect(sorted$([3, 2, 1, 4, 5, 6], cmp)).toEqual([1, 2, 3, 4, 5, 6]);
  expect(sorted$([3, 2, 1, 4, 5, 6, 7], cmp)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test("reversed", () => {
  expect(reversed([])).toEqual([]);
  expect(reversed([1])).toEqual([1]);
  expect(reversed([1, 2])).toEqual([2, 1]);
  expect(reversed([1, 2, 3])).toEqual([3, 2, 1]);
  expect(reversed([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
});

test("uniqueSorted", () => {
  expect(uniqueSorted([])).toEqual([]);
  expect(uniqueSorted([1])).toEqual([1]);
  expect(uniqueSorted([1, 1])).toEqual([1]);
  expect(uniqueSorted([1, 1, 2])).toEqual([1, 2]);
  expect(uniqueSorted([1, 1, 2, 2])).toEqual([1, 2]);
  expect(uniqueSorted([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
  expect(uniqueSorted([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  expect(uniqueSorted([1, 1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  expect(uniqueSorted([1, 1, 2, 2, 3, 3, 4, 4])).toEqual([1, 2, 3, 4]);
});

test("unique", () => {
  expect(unique([2, 1, 2])).toEqual([2, 1]);
  expect(unique(["a", 1, "a", 2, "1"])).toEqual(["a", 1, 2, "1"]);
  expect(unique([false, true, true, false, 0, 1, "s", 1])).toEqual([
    false,
    true,
    0,
    1,
    "s",
  ]);
  expect(unique([])).toEqual([]);
  expect(unique([1])).toEqual([1]);
  expect(unique([1, 1, 0, 0, "", ""])).toEqual([1, 0, ""]);
  expect(unique([1, 1, 0, 0, "", "", "s", "s"])).toEqual([1, 0, "", "s"]);
});

test("minIndex", () => {
  expect(() => minIndex([])).toThrow();
  expect(minIndex([1, 2, 3])).toEqual(0);
  expect(minIndex([3, 2, 1])).toEqual(2);
  expect(minIndex([1, 3, 2])).toEqual(0);
  expect(minIndex([1, 2, 3, 4])).toEqual(0);
  expect(minIndex([4, 3, 2, 1])).toEqual(3);
});

test("maxIndex", () => {
  expect(() => maxIndex([])).toThrow();
  expect(maxIndex([1, 2, 3])).toEqual(2);
  expect(maxIndex([3, 2, 1])).toEqual(0);
  expect(maxIndex([1, 3, 2])).toEqual(1);
  expect(maxIndex([1, 2, 3, 4])).toEqual(3);
  expect(maxIndex([4, 3, 2, 1])).toEqual(0);
});
