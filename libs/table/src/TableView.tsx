/* eslint-disable @typescript-eslint/naming-convention */
import { createStyles, ScrollArea, Table, Text } from "@mantine/core";
import React from "react";
import { Headers } from "./Headers";
import { Rows } from "./Rows";
import type { TableViewProps } from "./types";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

export function TableView<T extends { id: number | string } & object>({
  columns,
  onSort,
  renderColumn,
  Actions,
  rows,
  sort,
  ...props
}: TableViewProps<T>) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = React.useState(false);

  return (
    // @TODO: need to provide ScrollArea height for sticky?
    <ScrollArea onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table verticalSpacing="xs" {...props}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <Headers columns={columns} onSort={onSort} sort={sort} />
            {Actions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            <Rows
              columns={columns}
              rows={rows}
              Actions={Actions}
              renderColumn={renderColumn}
            />
          ) : (
            <tr>
              <td colSpan={Object.keys(columns).length + (Actions ? 1 : 0)}>
                <Text weight={500} align="center">
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
