import { expect, test } from "vitest";
import { arrayEqual$ } from "./uncurried";

test("arrayEqual", () => {
  expect(arrayEqual$([], [])).toBeTruthy();
  expect(arrayEqual$([1, 2, 3], [1, 2, 3])).toBeTruthy();
  expect(arrayEqual$([1, 2], [1, 2])).toBeTruthy();
  expect(arrayEqual$([1, 2, 3], [1, 2, 4])).toBeFalsy();
  expect(arrayEqual$([1, 2, 3], [1, 2])).toBeFalsy();
  expect(arrayEqual$([1, 2], [1, 2, 3])).toBeFalsy();
  expect(arrayEqual$([1, 2, 3], [1, 2, 3, 4])).toBeFalsy();
  expect(arrayEqual$([1, 2, 3, 4], [1, 2, 3])).toBeFalsy();
});
