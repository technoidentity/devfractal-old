import { expectTypeOf, test } from "vitest";
import { toFn } from "../toFn";

test("methodToFn", () => {
  class Point {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    distance(that: Point): number {
      return Math.sqrt((this.x - that.x) ** 2 + (this.y - that.y) ** 2);
    }
  }

  const distance = toFn(Point, "distance");
  expectTypeOf(
    distance(new Point(1, 2), new Point(3, 4))
  ).toEqualTypeOf<number>();
});
