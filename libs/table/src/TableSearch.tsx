import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import type { RowBase } from "./types";

export type TableSearchProps<Row extends RowBase> = Readonly<{
  searchFields?: ReadonlyArray<keyof Row>;
  search: string;
  onSearch(search: string): void;
}>;

export function TableSearch<Row extends RowBase>({
  search,
  onSearch,
}: TableSearchProps<Row>) {
  return (
    <TextInput
      placeholder="Search by any field"
      mb="md"
      icon={<IconSearch size={14} stroke={1.5} />}
      value={search}
      onChange={(evt) => onSearch(evt.target.value)}
    />
  );
}
