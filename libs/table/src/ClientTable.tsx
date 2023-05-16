import { Box, Pagination, Stack } from "@mantine/core";
import { TableSearch } from "./TableSearch";
import { TableView } from "./TableView";
import type { ClientTableProps, RowBase } from "./types";

export function ClientTable<Row extends RowBase>({
  columns,
  tableState: {
    actions,
    selects,
    props: { searchFields },
    state,
  },
  ...props
}: ClientTableProps<Row>) {
  return (
    <Stack>
      <Box>
        {searchFields && (
          <TableSearch search={state.search} onSearch={actions.handleSearch} />
        )}

        <TableView<Row>
          {...props}
          columns={columns}
          sort={state.sort}
          rows={selects.current}
          onSort={actions.handleSort}
        />
      </Box>

      <Pagination
        mt="lg"
        position="right"
        styles={(theme) => ({
          control: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "&[data-active]": {
              backgroundImage: theme.fn.gradient({ from: "red", to: "yellow" }),
            },
          },
        })}
        value={state.page}
        onChange={actions.setPage}
        total={selects.totalPages}
      />
    </Stack>
  );
}
