import { expect, test } from "vitest";
import { checked } from "./checked";
import { Natural } from "./commonSpecs";

const add = checked([Natural, Natural], (a, b) => a + b);

test("checked", () => {
  expect(() => add("hello" as any, 10)).toThrow();
  expect(() => add(10, "hello" as any)).toThrow();
  expect(() => add(10, -1)).toThrow();
  expect(() => add(-10, 1)).toThrow();
  expect(() => add(10.6, 1)).toThrow();
  expect(() => add(1, 10.6)).toThrow();
  expect(add(10, 20)).toBe(30);
});
