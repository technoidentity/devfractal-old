import type { TableProps } from "@mantine/core";
import type { useClientTable } from "./useClientTable";

export type Sort<Row extends object> = {
  order: "asc" | "desc";
  orderBy: keyof Row;
};

export type RowBase = object & { id: string | number };

export type Column<T extends object> = {
  accessor: keyof T & string;
  label: string;
  format?: (val: boolean) => void;
};

export interface TableViewProps<Row extends RowBase> extends TableProps {
  columns: readonly Column<Row>[];
  rows: readonly Row[];

  sort: Sort<Row>;
  onSort(val: keyof Row): void;

  renderColumn?: (key: keyof Row, row: Row) => React.ReactNode;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  Actions?: (props: { row: Row }) => JSX.Element;
}

export interface ClientTableProps<Row extends RowBase>
  extends Omit<TableViewProps<Row>, "rows" | "sort" | "onSort"> {
  tableState: ReturnType<typeof useClientTable<Row>>;
}

export type ClientTableState<Row extends RowBase> = Readonly<{
  readonly search?: string;
  readonly page: number;
  readonly sort: Sort<Row>;
}>;

export type FilterPredicate<Row extends RowBase> = (row: Row) => boolean;
