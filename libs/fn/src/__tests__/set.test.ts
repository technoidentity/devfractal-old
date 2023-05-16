import { expect, test } from "vitest";
import { difference, intersection, union } from "../set";

test("intersection", () => {
  expect(intersection([], [])).toEqual([]);
  expect(intersection([], [2, 5])).toEqual([]);
  expect(intersection([2, 5], [])).toEqual([]);
  expect(intersection([2, 5], [1, 3, 4])).toEqual([]);
  expect(intersection([5, 2, 3, 1], [0, 3, 4, 5])).toEqual([5, 3]);
  expect(
    intersection(["ravi", "kumar", "tejo"], ["sravani", "jyoti", "tejo"])
  ).toEqual(["tejo"]);
});

test("difference", () => {
  expect(difference([], [])).toEqual([]);
  expect(difference([], [2, 5])).toEqual([]);
  expect(difference([2, 5, 3], [])).toEqual([2, 5, 3]);
  expect(difference([2, 5], [1, 3, 4])).toEqual([2, 5]);
  expect(difference([5, 2, 1, 3], [0, 3, 4])).toEqual([5, 2, 1]);
  expect(difference(["ravi", "kumar"], ["sravani", "jyoti", "tejo"])).toEqual([
    "ravi",
    "kumar",
  ]);
});

test("union", () => {
  expect(union([], [])).toEqual([]);
  expect(union([], [2, 5])).toEqual([2, 5]);
  expect(union([2, 5], [])).toEqual([2, 5]);
  expect(union([2, 5], [1, 3, 4])).toEqual([2, 5, 1, 3, 4]);
  expect(union([5, 2, 1, 3], [0, 3, 4])).toEqual([5, 2, 1, 3, 0, 4]);
  expect(union(["ravi", "kumar"], ["sravani", "jyoti", "tejo"])).toEqual([
    "ravi",
    "kumar",
    "sravani",
    "jyoti",
    "tejo",
  ]);
});
