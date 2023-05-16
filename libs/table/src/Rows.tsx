import React from "react";
import { defaultColumnRenderer } from "./defaultColumnRenderer";
import type { RowBase, TableViewProps } from "./types";

type RowsProps<Row extends RowBase> = Pick<
  TableViewProps<Row>,
  "columns" | "renderColumn" | "Actions" | "rows"
>;

export function Rows<Row extends RowBase>({
  columns,
  Actions,
  rows,
  renderColumn = defaultColumnRenderer,
}: RowsProps<Row>) {
  return (
    <>
      {rows.map((r) => (
        <tr key={r.id}>
          {columns.map(({ accessor }) => (
            <React.Fragment key={accessor}>
              {renderColumn(accessor, r)}
            </React.Fragment>
          ))}
          {Actions && (
            <td width={"200px"}>
              <Actions row={r} />
            </td>
          )}
        </tr>
      ))}
    </>
  );
}
