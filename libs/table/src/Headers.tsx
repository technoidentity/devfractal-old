import {
  Center,
  createStyles,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { ArrowsSort, SortAscending, SortDescending } from "tabler-icons-react";
import type { Column, RowBase, Sort, TableViewProps } from "./types";

const useStyles = createStyles((theme) => ({
  th: {
    padding: "0 !important",
  },

  control: {
    width: "100%",
    // padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

    // eslint-disable-next-line @typescript-eslint/naming-convention
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  icon: {
    width: 21,
    height: 21,
    borderRadius: 21,
  },
}));

export type HeadersProps<Row extends RowBase> = Pick<
  TableViewProps<Row>,
  "columns" | "sort" | "onSort"
>;

type SortIconProps<Row extends RowBase> = Readonly<{
  column: Column<Row>;
  sort: Sort<Row>;
}>;

function SortIcon<Row extends RowBase>({ column, sort }: SortIconProps<Row>) {
  const props = { size: 14, strokeWidth: 1.5 };

  const Comp =
    column.accessor === sort.orderBy
      ? sort.order === "asc"
        ? SortAscending
        : SortDescending
      : ArrowsSort;

  return <Comp {...props} />;
}

export function Headers<Row extends RowBase>({
  columns,
  sort,
  onSort,
}: HeadersProps<Row>) {
  const { classes } = useStyles();

  return (
    <>
      {columns.map((column) => (
        <th key={column.accessor}>
          <UnstyledButton
            className={classes.control}
            onClick={() => onSort(column.accessor)}
          >
            <Group position="apart">
              <Text weight={500} size="sm">
                {column.label}
              </Text>
              <Center className={classes.icon}>
                <SortIcon column={column} sort={sort} />
              </Center>
            </Group>
          </UnstyledButton>
        </th>
      ))}
    </>
  );
}
