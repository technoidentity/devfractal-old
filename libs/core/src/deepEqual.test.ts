import { expect, test } from "vitest";
import { deepEqual } from "./deepEqual";

test("deepEqual", () => {
  expect(deepEqual(("hello" as any) / 2, ("world" as any) / 2)).toBeTruthy();
  expect(deepEqual(1, 1)).toBeTruthy();
  expect(deepEqual(1, 2)).toBeFalsy();
  expect(deepEqual(null, null)).toBeTruthy();
  expect(deepEqual(null, undefined)).toBeFalsy();
  expect(deepEqual(undefined, undefined)).toBeTruthy();
  expect(deepEqual(undefined, null)).toBeFalsy();
  expect(deepEqual("a", "a")).toBeTruthy();
  expect(deepEqual("a", "b")).toBeFalsy();
  expect(deepEqual(true, true)).toBeTruthy();
  expect(deepEqual(true, false)).toBeFalsy();
  expect(deepEqual(false, false)).toBeTruthy();
  expect(deepEqual(false, true)).toBeFalsy();
  expect(deepEqual([1, 2, 3], [1, 2, 3])).toBeTruthy();
  expect(deepEqual([1, 2, 3], [1, 2, 4])).toBeFalsy();
  expect(deepEqual([1, 2, 3], [1, 2])).toBeFalsy();
  expect(deepEqual([1, 2], [1, 2, 3])).toBeFalsy();
  expect(deepEqual([1, 2, 3], [1, 2, 3, 4])).toBeFalsy();
  expect(deepEqual([1, 2, 3, 4], [1, 2, 3])).toBeFalsy();
  expect(deepEqual([1, 2, 3], [1, 2, "3"])).toBeFalsy();
  expect(deepEqual([], [])).toBeTruthy();
  expect(deepEqual([1, 2, 3], [])).toBeFalsy();
  expect(deepEqual([[[[]]]], [[[[]]]])).toBeTruthy();
  expect(deepEqual([[[[1]]]], [[[[1]]]])).toBeTruthy();
  expect(deepEqual([[[[]]]], [[[[[]]]]])).toBeFalsy();

  expect(deepEqual({}, {})).toBeTruthy();
  expect(deepEqual({ a: 1 }, { a: 1 })).toBeTruthy();
  expect(deepEqual({ a: 1 }, { a: 2 })).toBeFalsy();
  expect(deepEqual({ a: 1 }, { b: 1 })).toBeFalsy();
  expect(deepEqual({ a: 1, b: 2 }, { a: 1 })).toBeFalsy();
  expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBeFalsy();
  expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBeTruthy();

  expect(
    deepEqual(
      {
        arr: [1, 2, 3, { a: 1, b: 2, c: [1, 2, 3] }],
        obj: { a: 1, b: 2, c: { x: 1, y: 2 } },
        str: "string",
        num: 1,
      },
      {
        arr: [1, 2, 3, { a: 1, b: 2, c: [1, 2, 3] }],
        obj: { a: 1, b: 2, c: { x: 1, y: 2 } },
        str: "string",
        num: 1,
      }
    )
  );
});
