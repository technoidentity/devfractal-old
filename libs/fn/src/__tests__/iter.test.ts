/* eslint-disable @typescript-eslint/naming-convention */
import { expect, test } from "vitest";
import {
  enumerate,
  iterFlatten,
  length,
  max,
  min,
  range,
  repeat,
  repeatedly,
  toArray,
} from "../iter";
import {
  all$,
  any$,
  chain$,
  filter$,
  findIndex$,
  flatMap$,
  groupBy$,
  iterEqual$,
  iterSlice$,
  map$,
  maxByProp$,
  minByProp$,
  reduce$,
  skip$,
  skipWhile$,
  take$,
  takeWhile$,
  zip$,
  zipLongest$,
  zipWith$,
} from "../uncurried";

test("range", () => {
  expect(toArray(range(0, 0))).toEqual([]);
  expect(toArray(range(1, 2))).toEqual([1]);
  expect(toArray(range(1, 5))).toEqual([1, 2, 3, 4]);
  expect(() => toArray(range(10, 1))).toThrow();
});

test("repeat", () => {
  expect(toArray(repeat(1, 0))).toEqual([0]);
  expect(toArray(repeat(1, 1))).toEqual([1]);
  expect(toArray(repeat(5, 1))).toEqual([1, 1, 1, 1, 1]);
  expect(() => toArray(repeat(-1, 1))).toThrow();
});

test("repeatedly", () => {
  {
    let i = 0;
    expect(toArray(repeatedly(5, () => i++))).toEqual([0, 1, 2, 3, 4]);
  }
  {
    let i = 0;
    expect(toArray(repeatedly(0, () => i++))).toEqual([]);
  }
});

test("enumerate", () => {
  expect(toArray(enumerate([]))).toEqual([]);
  expect(toArray(enumerate([1, 2, 3]))).toEqual([
    [1, 0],
    [2, 1],
    [3, 2],
  ]);
});

test("length", () => {
  expect(length([])).toEqual(0);
  expect(length([1, 2, 3])).toEqual(3);
});

test("map", () => {
  expect(toArray(map$([], (x) => x * 2))).toEqual([]);
  expect(toArray(map$([1, 2, 3], (x) => x * 2))).toEqual([2, 4, 6]);
  expect(toArray(map$([1, 2, 3], (x) => x + 1))).toEqual([2, 3, 4]);
});

test("filter", () => {
  expect(toArray(filter$([], (x) => x % 2 === 0))).toEqual([]);
  expect(toArray(filter$([1, 2, 3], (x) => x % 2 === 0))).toEqual([2]);
  expect(toArray(filter$([1, 2, 3], (x) => x % 2 === 1))).toEqual([1, 3]);
});

test("reduce", () => {
  expect(reduce$([], (x, acc) => x + acc, 0)).toEqual(0);
  expect(reduce$([1, 2, 3], (x, acc) => x + acc, 0)).toEqual(6);
  expect(reduce$([1, 2, 3], (x, acc) => x + acc, 1)).toEqual(7);
  expect(reduce$([1, 2, 3], (x, acc) => x.toString() + acc, "")).toEqual("321");
});

test("find", () => {
  expect(findIndex$([], (x) => x % 2 === 0)).toEqual(-1);
  expect(findIndex$([1, 2, 3], (x) => x % 2 === 0)).toEqual(1);
  expect(findIndex$([1, 2, 3], (x) => x % 2 === 1)).toEqual(0);
  expect(findIndex$([1, 2, 3, 4], (x) => x === 5)).toEqual(-1);
});

test("findIndex", () => {
  expect(findIndex$([], (x) => x % 2 === 0)).toEqual(-1);
  expect(findIndex$([1, 2, 3], (x) => x % 2 === 0)).toEqual(1);
  expect(findIndex$([1, 2, 3], (x) => x % 2 === 1)).toEqual(0);
  expect(findIndex$([1, 2, 3, 4], (x) => x === 5)).toEqual(-1);
});

test("take", () => {
  expect([...take$([2, 1, 2], 2)]).toEqual([2, 1]);
  expect([...take$(["a", 1, "a", 2, "1"], 5)]).toEqual(["a", 1, "a", 2, "1"]);
  expect([...take$([1, 2, 3], 5)]).toEqual([1, 2, 3]);
  expect([...take$([1, 2, 3], 0)]).toEqual([]);
  expect([...take$([], 0)]).toEqual([]);
  expect([...take$([1], 2)]).toEqual([1]);
  expect([...take$([1], 0)]).toEqual([]);
});

test("skip", () => {
  expect([...skip$([1, 2, 3], 2)]).toEqual([3]);
  expect([...skip$([1, 2, 3], 5)]).toEqual([]);
  expect([...skip$([1, 2, 3], 0)]).toEqual([1, 2, 3]);
  expect([...skip$([], 0)]).toEqual([]);
  expect([...skip$([1], 0)]).toEqual([1]);
  expect([...skip$([1], 2)]).toEqual([]);
});

test("takeWhile", () => {
  expect([...takeWhile$([2, 4, 9, 8], (x) => x % 2 === 0)]).toEqual([2, 4]);
  expect([...takeWhile$([2, 4, 9, 8], (x) => x % 3 === 0)]).toEqual([]);
  expect([...takeWhile$([1, 2, 3, 7, 4, 5], (x) => x < 5)]).toEqual([1, 2, 3]);
  expect([...takeWhile$([2, 4, 8], (x) => x % 2 === 0)]).toEqual([2, 4, 8]);
  expect([...takeWhile$([], (x) => x % 2 === 0)]).toEqual([]);
});

test("skipWhile", () => {
  expect([...skipWhile$([2, 4, 9, 8], (x) => x % 2 === 0)]).toEqual([9, 8]);
  expect([...skipWhile$([2, 4, 9, 8], (x) => x % 3 === 0)]).toEqual([
    2, 4, 9, 8,
  ]);
  expect([...skipWhile$([1, 2, 3, 7, 4, 5], (x) => x < 5)]).toEqual([7, 4, 5]);
  expect([...skipWhile$([2, 4, 8], (x) => x % 2 === 0)]).toEqual([]);
  expect([...skipWhile$([], (x) => x % 2 === 0)]).toEqual([]);
});

test("all", () => {
  expect(all$([2, 4, 8], (x) => x % 2 === 0)).toEqual(true);
  expect(all$([2, 4, 9, 8], (x) => x % 2 === 0)).toEqual(false);
  expect(all$([1, 2, 3, 7, 4, 5], (x) => x < 5)).toEqual(false);
  expect(all$([1, 2, 3, 4], (x) => x < 5)).toEqual(true);
  expect(all$([], (x) => x % 2 === 0)).toEqual(true);
});

test("any", () => {
  expect(any$([2, 4, 8], (x) => x % 2 === 0)).toEqual(true);
  expect(any$([2, 4, 9, 8], (x) => x % 2 === 0)).toEqual(true);
  expect(any$([1, 2, 3, 7, 4, 5], (x) => x < 5)).toEqual(true);
  expect(any$([1, 2, 3, 4], (x) => x < 5)).toEqual(true);
  expect(any$([], (x) => x % 2 === 0)).toEqual(false);
});

test("min", () => {
  expect(min([3, 6, 8, 1, 2, 9])).toEqual(1);
  expect(min([99, 66, 108, 56, 24, 88])).toEqual(24);
  expect(min([-1, -4, 0, 1, 3])).toEqual(-4);
  expect(min([1])).toEqual(1);
  expect(() => min([])).toThrow();
});

test("iterSlice", () => {
  expect([...iterSlice$([1, 2, 3, 4, 5], 2, 4)]).toEqual([3, 4]);
  expect([...iterSlice$([1, 2, 3, 4, 5], 0, 4)]).toEqual([1, 2, 3, 4]);
  expect([...iterSlice$([1, 2, 3, 4, 5], 2, 5)]).toEqual([3, 4, 5]);
  expect([...iterSlice$([1, 2, 3, 4, 5], 0, 5)]).toEqual([1, 2, 3, 4, 5]);
  expect([...iterSlice$([1, 2, 3, 4, 5], 0, 0)]).toEqual([]);
  expect([...iterSlice$([1, 2, 3, 4, 5], 0, 1)]).toEqual([1]);
  expect([...iterSlice$([1, 2, 3, 4, 5], 4)]).toEqual([5]);
  expect([...iterSlice$([], 0, 0)]).toEqual([]);
});

test("iterEqual", () => {
  expect(iterEqual$([1, 2, 3], [1, 2, 3])).toBeTruthy();
  expect(iterEqual$([1, 2, 3], [1, 2, 3, 4])).toBeFalsy();
  expect(iterEqual$([1, 2, 3], [1, 2, 4])).toBeFalsy();
  expect(iterEqual$([1, 2, 3], [1, 2])).toBeFalsy();
  expect(iterEqual$([], [])).toBeTruthy();
  expect(iterEqual$([1], [])).toBeFalsy();
  expect(iterEqual$([], [1])).toBeFalsy();
});

test("max", () => {
  expect(max([3, 6, 8, 1, 2, 9])).toEqual(9);
  expect(max([99, 66, 108, 56, 24, 88])).toEqual(108);
  expect(max([-1, -4, 0, 1, 3])).toEqual(3);
  expect(max([1])).toEqual(1);
  expect(() => max([])).toThrow();
});

test("minByProp", () => {
  expect(minByProp$([{ n: 1 }, { n: 2 }, { n: 3 }, { n: 0 }], "n")).toEqual({
    n: 0,
  });
  expect(minByProp$([{ n: 1 }, { n: 2 }, { n: 0 }, { n: 3 }], "n")).toEqual({
    n: 0,
  });
  expect(minByProp$([{ n: 1 }, { n: 0 }, { n: 2 }, { n: 3 }], "n")).toEqual({
    n: 0,
  });
  expect(minByProp$([{ n: 1 }, { n: 2 }, { n: 3 }], "n")).toEqual({ n: 1 });
  expect(() => minByProp$([], "n")).toThrow();
});

test("maxByProp", () => {
  expect(maxByProp$([{ n: 1 }, { n: 2 }, { n: 3 }, { n: 0 }], "n")).toEqual({
    n: 3,
  });
  expect(maxByProp$([{ n: 1 }, { n: 2 }, { n: 0 }, { n: 3 }], "n")).toEqual({
    n: 3,
  });
  expect(maxByProp$([{ n: 3 }, { n: 1 }, { n: 0 }, { n: 2 }], "n")).toEqual({
    n: 3,
  });
  expect(() => maxByProp$([], "n")).toThrow();
});

// const objects = [{ n: 1 }, { n: 2 }, { n: 3 }, { n: 0 }]

// test('minBy', () => {
//   expect(
//     pipe(
//       [9, 3, 5, 8, 2, 4],
//       minBy(x => x % 3),
//     ),
//   ).toEqual(9)
//   expect(
//     pipe(
//       [3, 6, 8, 1, 2, 9],
//       minBy(x => x + 3),
//     ),
//   ).toEqual(1)
//   expect(
//     pipe(
//       objects,
//       minBy(x => x.n),
//     ),
//   ).toEqual({ n: 0 })
//   expect(
//     pipe(
//       [4],
//       minBy(x => x % 3),
//     ),
//   ).toEqual(4)
//   expect(() => pipe([], x => x % 3)).toThrow()
// })

// test('maxBy', () => {
//   expect(maxBy([9, 3, 5, 8, 2, 4], x => x % 3)).toEqual(5)
//   expect(maxBy([3, 6, 8, 1, 2, 9], x => x + 3)).toEqual(9)
//   expect(maxBy(objects, x => x.n)).toEqual({ n: 3 })
//   expect(maxBy([4], x => x % 3)).toEqual(4)
//   expect(() => maxBy([], x => x % 3)).toThrow()
// })

test("groupBy", () => {
  expect(groupBy$([], Math.floor)).toEqual({});
  expect(groupBy$([6.1, 4.2, 6.3], Math.floor)).toEqual({
    4: [4.2],
    6: [6.1, 6.3],
  });
  expect(groupBy$([6.1, 4.2, 6.3], Math.ceil)).toEqual({
    5: [4.2],
    7: [6.1, 6.3],
  });
});

test("iterFlatten", () => {
  expect([...iterFlatten([])]).toEqual([]);
  expect([...iterFlatten([1, 2, 3])]).toEqual([1, 2, 3]);
  expect([
    ...iterFlatten([
      [1, 2],
      [3, 4, [5, 6, [7, 8]]],
    ]),
  ]).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
test("chain", () => {
  expect(toArray(chain$([], []))).toEqual([]);
  expect(toArray(chain$([1, 2, 3], []))).toEqual([1, 2, 3]);
  expect(toArray(chain$([], [1, 2, 3]))).toEqual([1, 2, 3]);
  expect(toArray(chain$([1, 2, 3], [4, 5, 6]))).toEqual([1, 2, 3, 4, 5, 6]);
  expect(toArray(chain$([1, 2, 3], [4, 5, 6], [7, 8, 9]))).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
});

test("flatMap", () => {
  expect(toArray(flatMap$([], (x) => [x]))).toEqual([]);
  expect(toArray(flatMap$([1, 2, 3], (x) => [x]))).toEqual([1, 2, 3]);
  expect(toArray(flatMap$([1, 2, 3], (x) => [x, x]))).toEqual([
    1, 1, 2, 2, 3, 3,
  ]);
  expect(toArray(flatMap$([1, 2, 3], (x) => [[x]]))).toEqual([[1], [2], [3]]);
});

test("zip", () => {
  expect(toArray(zip$([1, 2, 3], ["a", "b"]))).toEqual([
    [1, "a"],
    [2, "b"],
  ]);
  expect(toArray(zip$([1, 2, 3], ["a", "b", "c", "d", "e"]))).toEqual([
    [1, "a"],
    [2, "b"],
    [3, "c"],
  ]);
  expect(toArray(zip$([1, 2], ["a", "b"]))).toEqual([
    [1, "a"],
    [2, "b"],
  ]);
  expect(toArray(zip$([1], ["a"]))).toEqual([[1, "a"]]);
  expect(toArray(zip$([], []))).toEqual([]);
});

test("zipLongest", () => {
  expect(toArray(zipLongest$([1, 2, 3], ["a", "b"], 100, "200"))).toEqual([
    [1, "a"],
    [2, "b"],
    [3, "200"],
  ]);
  expect(
    toArray(zipLongest$([1, 2, 3], ["a", "b", "c", "d", "e"], 100, "200"))
  ).toEqual([
    [1, "a"],
    [2, "b"],
    [3, "c"],
    [100, "d"],
    [100, "e"],
  ]);
  expect(toArray(zipLongest$([1, 2], ["a", "b"], 100, "200"))).toEqual([
    [1, "a"],
    [2, "b"],
  ]);
});

test("zipWith", () => {
  const sub = (x: number, y: number) => x - y;
  expect([...zipWith$([], [], sub)]).toEqual([]);
  expect([...zipWith$([1, 2, 3], [4, 5, 6], sub)]).toEqual([-3, -3, -3]);
  expect([...zipWith$([1, 2, 3], [4, 5, 6, 7], sub)]).toEqual([-3, -3, -3]);
  expect([...zipWith$([1, 2, 3, 4], [4, 5, 6], sub)]).toEqual([-3, -3, -3]);
  expect([...zipWith$([1, 2, 3], [4, 5, 6], (x, y) => x + y)]).toEqual([
    5, 7, 9,
  ]);
});

// const authors = [
//   { authorId: 1, name: 'David Flanagan', email: 'david.flanagan@gmail.com' },
//   { authorId: 2, name: 'Kathy Sierra', email: 'kathy.sierra@gmail.com' },
//   { authorId: 3, name: 'Erid Freeman', email: 'eric.freeman@gmail.com' },
//   {
//     authorId: 4,
//     name: 'Daniel Higginbotham',
//     email: 'higginbotham.daniel@gmail.com',
//   },
// ]

// const books = [
//   { bookId: 1, title: 'Javascript The Definitive Guide', mainAuthorId: 1 },
//   { bookId: 2, title: 'Java in a nutshell', mainAuthorId: 1 },
//   { bookId: 3, title: 'Head first Java', mainAuthorId: 2 },
//   { bookId: 4, title: 'Badass  Making Users Awesome', mainAuthorId: 2 },
//   { bookId: 5, title: 'Head first design patterns', mainAuthorId: 3 },
//   { bookId: 6, title: 'Head first design patterns', mainAuthorId: 10 },
// ]

// test('inner join', () => {
//   const result = [
//     {
//       authorId: 1,
//       name: 'David Flanagan',
//       email: 'david.flanagan@gmail.com',
//       bookId: 1,
//       title: 'Javascript The Definitive Guide',
//       mainAuthorId: 1,
//     },
//     {
//       authorId: 1,
//       name: 'David Flanagan',
//       email: 'david.flanagan@gmail.com',
//       bookId: 2,
//       title: 'Java in a nutshell',
//       mainAuthorId: 1,
//     },
//     {
//       authorId: 2,
//       name: 'Kathy Sierra',
//       email: 'kathy.sierra@gmail.com',
//       bookId: 3,
//       title: 'Head first Java',
//       mainAuthorId: 2,
//     },
//     {
//       authorId: 2,
//       name: 'Kathy Sierra',
//       email: 'kathy.sierra@gmail.com',
//       bookId: 4,
//       title: 'Badass  Making Users Awesome',
//       mainAuthorId: 2,
//     },
//     {
//       authorId: 3,
//       name: 'Erid Freeman',
//       email: 'eric.freeman@gmail.com',
//       bookId: 5,
//       title: 'Head first design patterns',
//       mainAuthorId: 3,
//     },
//   ]

//   expect(join(authors, books, 'authorId', 'mainAuthorId')).toEqual(result)
// })

// it('rightOuterJoin', () => {
//   const result2 = [
//     {
//       authorId: 1,
//       name: 'David Flanagan',
//       email: 'david.flanagan@gmail.com',
//       bookId: 1,
//       title: 'Javascript The Definitive Guide',
//       mainAuthorId: 1,
//     },
//     {
//       authorId: 1,
//       name: 'David Flanagan',
//       email: 'david.flanagan@gmail.com',
//       bookId: 2,
//       title: 'Java in a nutshell',
//       mainAuthorId: 1,
//     },
//     {
//       authorId: 2,
//       name: 'Kathy Sierra',
//       email: 'kathy.sierra@gmail.com',
//       bookId: 3,
//       title: 'Head first Java',
//       mainAuthorId: 2,
//     },
//     {
//       authorId: 2,
//       name: 'Kathy Sierra',
//       email: 'kathy.sierra@gmail.com',
//       bookId: 4,
//       title: 'Badass  Making Users Awesome',
//       mainAuthorId: 2,
//     },
//     {
//       authorId: 3,
//       name: 'Erid Freeman',
//       email: 'eric.freeman@gmail.com',
//       bookId: 5,
//       title: 'Head first design patterns',
//       mainAuthorId: 3,
//     },
//     { bookId: 6, title: 'Head first design patterns', mainAuthorId: 10 },
//   ]
//   expect(rightOuterJoin(authors, books, 'authorId', 'mainAuthorId')).toEqual(
//     result2,
//   )
// })

// it('leftOuterJoin', () => {
//   const result2 = [
//     {
//       authorId: 1,
//       name: 'David Flanagan',
//       email: 'david.flanagan@gmail.com',
//       bookId: 1,
//       title: 'Javascript The Definitive Guide',
//       mainAuthorId: 1,
//     },
//     {
//       authorId: 1,
//       name: 'David Flanagan',
//       email: 'david.flanagan@gmail.com',
//       bookId: 2,
//       title: 'Java in a nutshell',
//       mainAuthorId: 1,
//     },
//     {
//       authorId: 2,
//       name: 'Kathy Sierra',
//       email: 'kathy.sierra@gmail.com',
//       bookId: 3,
//       title: 'Head first Java',
//       mainAuthorId: 2,
//     },
//     {
//       authorId: 2,
//       name: 'Kathy Sierra',
//       email: 'kathy.sierra@gmail.com',
//       bookId: 4,
//       title: 'Badass  Making Users Awesome',
//       mainAuthorId: 2,
//     },
//     {
//       authorId: 3,
//       name: 'Erid Freeman',
//       email: 'eric.freeman@gmail.com',
//       bookId: 5,
//       title: 'Head first design patterns',
//       mainAuthorId: 3,
//     },
//     {
//       authorId: 4,
//       name: 'Daniel Higginbotham',
//       email: 'higginbotham.daniel@gmail.com',
//     },
//   ]
//   expect(leftOuterJoin(authors, books, 'authorId', 'mainAuthorId')).toEqual(
//     result2,
//   )
// })

// test('inserAt', () => {
//   const empty: number[] = []
//   insertAt(empty, 0, 100)
//   expect(empty).toEqual([100])

//   const arr = [1, 2, 4, 5]
//   insertAt(arr, 1, 10)

//   expect(arr).toEqual([1, 10, 2, 4, 5])

//   insertAt(arr, 0, 100)
//   expect(arr).toEqual([100, 1, 10, 2, 4, 5])

//   insertAt(arr, arr.length - 1, 100)
//   expect(arr).toEqual([100, 1, 10, 2, 4, 100, 5])

//   insertAt(arr, arr.length, 200)
//   expect(arr).toEqual([100, 1, 10, 2, 4, 100, 5, 200])

//   expect(() => insertAt(arr, -1, 200)).toThrow()
//   expect(() => insertAt(arr, arr.length + 1, 200)).toThrow()
// })

// test('removeAt', () => {
//   const arr = [1, 2, 4, 5]
//   removeAt(arr, 0)

//   expect(arr).toEqual([2, 4, 5])

//   expect(() => removeAt(arr, -1)).toThrow()
//   expect(() => removeAt(arr, arr.length)).toThrow()

//   removeAt(arr, arr.length - 1)
//   expect(arr).toEqual([2, 4])
// })

// test('replaceAt', () => {
//   const arr = [1, 2, 4, 5]
//   aset(arr, 0, 2)

//   expect(arr).toEqual([2, 2, 4, 5])

//   expect(() => aset(arr, -1, 6)).toThrow()
//   expect(() => aset(arr, arr.length, 8)).toThrow()

//   aset(arr, 1, 10)
//   expect(arr).toEqual([2, 10, 4, 5])

//   aset(arr, arr.length - 1, 0)
//   expect(arr).toEqual([2, 10, 4, 0])
// })

// test('groupBy', () => {
//   expect(pipe([6.1, 4.2, 6.3], groupBy(Math.floor))).toEqual({
//     '6': [6.1, 6.3],
//     '4': [4.2],
//   })
// })
