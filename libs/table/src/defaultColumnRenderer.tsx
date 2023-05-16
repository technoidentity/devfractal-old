import { toStr } from "@df/spec";
import type { RowBase } from "./types";

const formatDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return formatter.format(date);
};

export function defaultColumnRenderer<Row extends RowBase>(
  key: keyof Row,
  row: Row
) {
  const col = row[key] as any;
  const r = col instanceof Date ? formatDate(col) : col;

  return <td>{toStr(r)}</td>;
}
