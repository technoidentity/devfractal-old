import { debugCast, isBool, isDate, isNil, isNum, isStr } from "@df/spec";
import { z } from "zod";
import type { FilterPredicate, RowBase, Sort } from "./types";

const Primitive = z.union([
  z.number(),
  z.boolean(),
  z.string(),
  z.coerce.date(),
]);
type Primitive = z.infer<typeof Primitive>;

const primitiveSearch = (search: string, value: Primitive): boolean => {
  if (value === undefined) {
    return false;
  }
  const s = search.trim();

  if (isStr(value)) {
    return value.toLowerCase().includes(s.toLowerCase());
  }

  if (isBool(value)) {
    return (s === "true" && value) || (s === "false" && !value);
  }

  if (isNum(value)) {
    return value === Number(s);
  }

  // @TODO: match partial date too
  if (isDate(value)) {
    return value.getTime() === new Date(s).getTime();
  }

  return false;
};

export function searchRows<Row extends RowBase>(
  rows: readonly Row[],
  searchFields: "all" | ReadonlyArray<keyof Row>,
  search?: string
): readonly Row[] {
  if (isNil(search) || search.trim() === "" || rows.length === 0) {
    return rows;
  }

  const searchKeys =
    searchFields === "all"
      ? (Object.keys(rows[0]) as ReadonlyArray<keyof Row>)
      : searchFields;

  return rows.filter((row) =>
    searchKeys.some((key) =>
      primitiveSearch(search, row[key] && debugCast(Primitive, row[key]))
    )
  );
}

export function predicateRows<Row extends RowBase>(
  rows: readonly Row[],
  predicate: FilterPredicate<Row>
) {
  return rows.filter(predicate);
}

export function isDateString(value: unknown): value is string {
  if (!isStr(value)) {
    return false;
  }

  return value.match(/^\d{2}-\d{2}-\d{4}$/) !== null;
}

export function convertDateString(value: string) {
  return value.slice(6, 4) + value.slice(3, 2) + value.slice(0, 2);
}

export function convertType(value: unknown): string {
  if (isDateString(value)) {
    return convertDateString(value);
  }
  if (isNum(value)) {
    return value.toString();
  }

  if (isBool(value)) {
    return value ? "1" : "-1";
  }

  if (isStr(value)) {
    return value;
  }

  if (isStr(value)) {
    return value;
  }

  throw new Error(`{value} not a string, number or date or boolean`);
}

export function sortRows<Row extends object>(
  rows: readonly Row[],
  sort: Sort<Row>
) {
  return [...rows].sort((a, b) => {
    const { order, orderBy } = sort;
    if (isNil(a[orderBy])) {
      return 1;
    }
    if (isNil(b[orderBy])) {
      return -1;
    }

    const aLocale = convertType(a[orderBy]);
    const bLocale = convertType(b[orderBy]);

    if (order === "asc") {
      return aLocale.localeCompare(bLocale, "en", {
        numeric: isNum(b[orderBy]),
      });
    }
    return bLocale.localeCompare(aLocale, "en", {
      numeric: isNum(a[orderBy]),
    });
  });
}

export function paginateRows<Row extends object>(
  sortedRows: readonly Row[],
  page: number,
  rowsPerPage: number
): Row[] {
  return sortedRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);
}
