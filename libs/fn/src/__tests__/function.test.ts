/* eslint-disable @typescript-eslint/no-floating-promises */
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { randInt } from "../function";

describe("function", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(global, "setTimeout");
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  test("random", () => {
    expect(randInt(1, 5)).toBeGreaterThanOrEqual(1);
    expect(randInt(1, 5)).toBeLessThan(5);
    expect(randInt(2.2, 5.3)).toBeGreaterThanOrEqual(2.2);
    expect(randInt(2.2, 5.3)).toBeLessThan(5.3);
  });
});
