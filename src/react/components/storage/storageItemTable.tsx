import {
  Box,
  Button,
  Card,
  Input,
  Option,
  Select,
  Skeleton,
  Table,
  Typography,
} from "@mui/joy";
import React, { useCallback, useMemo, useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { MdSearch } from "react-icons/md";

import { gameItemsDictionnary } from "../../../dictionaries/gameItems.dictionary";
import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";
import { getImageHelper } from "../../../helpers/getImage.helper";
import type { StorageItemRow } from "../../../types/storageItem";

const ALL_MACHINES = "all";

type SortKey = keyof Pick<
  StorageItemRow,
  "name" | "amount" | "currentProduction" | "currentConsumption" | "deficit"
>;

type SortDirection = "asc" | "desc";

type SortState = {
  key: SortKey;
  direction: SortDirection;
};

type ColumnDefinition = {
  key: SortKey;
  label: string;
  width: string;
  align: "left" | "right";
  defaultDirection: SortDirection;
};

const COLUMNS: ColumnDefinition[] = [
  {
    key: "name",
    label: "Item",
    width: "auto",
    align: "left",
    defaultDirection: "asc",
  },
  {
    key: "amount",
    label: "Total",
    width: "110px",
    align: "right",
    defaultDirection: "desc",
  },
  {
    key: "currentProduction",
    label: "Produced",
    width: "120px",
    align: "right",
    defaultDirection: "desc",
  },
  {
    key: "currentConsumption",
    label: "Consumed",
    width: "120px",
    align: "right",
    defaultDirection: "desc",
  },
  {
    key: "deficit",
    label: "Under produced",
    width: "160px",
    align: "right",
    defaultDirection: "desc",
  },
];

const sortDirectionIcons: Record<SortDirection, React.ReactNode> = {
  asc: <FaSortUp size="12px" />,
  desc: <FaSortDown size="12px" />,
};

const SKELETON_ROWS_COUNT = 12;

const formatRateHelper = (rate: number): string => {
  return `${Math.round(rate)}/min`;
};

// Item names carry underscores ("Reinforced_Iron_Plate"), so both sides are
// normalised and someone typing "iron plate" still matches.
const normaliseHelper = (value: string): string => {
  return value.replace(/_/g, " ").trim().toLowerCase();
};

type StorageItemTableProps = {
  items?: StorageItemRow[];
  machines: string[];
  producersByItem: Map<GameClassNamesEnum, Set<string>>;
};

export const StorageItemTable: React.FC<StorageItemTableProps> = ({
  items,
  machines,
  producersByItem,
}) => {
  const [sort, setSort] = useState<SortState>();
  const [search, setSearch] = useState("");
  const [machine, setMachine] = useState<string>(ALL_MACHINES);

  const rows = useMemo((): StorageItemRow[] | undefined => {
    if (!items) return undefined;

    const needle = normaliseHelper(search);
    let filtered = items;

    if (needle)
      filtered = filtered.filter((item) =>
        normaliseHelper(item.name).includes(needle),
      );

    if (machine !== ALL_MACHINES)
      filtered = filtered.filter((item) =>
        producersByItem.get(item.className)?.has(machine),
      );

    if (!sort) return filtered;

    const { key, direction } = sort;
    return [...filtered].sort((a, b) => {
      const comparison =
        key === "name" ? a.name.localeCompare(b.name) : a[key] - b[key];
      return direction === "asc" ? comparison : -comparison;
    });
  }, [items, sort, search, machine, producersByItem]);

  const handleSort = useCallback((column: ColumnDefinition) => {
    setSort((previous) => {
      if (previous?.key !== column.key)
        return { key: column.key, direction: column.defaultDirection };
      return {
        key: column.key,
        direction: previous.direction === "asc" ? "desc" : "asc",
      };
    });
  }, []);

  const handleChangeMachine = useCallback(
    (_event: React.SyntheticEvent | null, value: string | null) => {
      setMachine(value ?? ALL_MACHINES);
    },
    [],
  );

  return (
    <Card
      variant="outlined"
      sx={{ padding: "0px", overflow: "hidden" }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          padding: "12px",
          borderBottom: "1px solid var(--joy-palette-neutral-outlinedBorder)",
        }}
      >
        <Input
          size="sm"
          placeholder="Search items..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          startDecorator={<MdSearch size="18px" />}
          sx={{ flex: 1, minWidth: "220px" }}
        />
        <Select
          size="sm"
          value={machine}
          onChange={handleChangeMachine}
          startDecorator="Machine:"
          sx={{ minWidth: "240px" }}
          slotProps={{ button: { "aria-label": "Filter by machine" } }}
        >
          <Option value={ALL_MACHINES}>All</Option>
          {machines.map((machineName) => {
            return (
              <Option
                key={machineName}
                value={machineName}
              >
                {machineName}
              </Option>
            );
          })}
        </Select>
      </Box>
      <Table
        stickyHeader
        hoverRow
        sx={{
          "--TableCell-paddingX": "16px",
          "--TableCell-paddingY": "8px",
          "& tbody tr td:first-of-type": { paddingY: "4px" },
        }}
      >
        <thead>
          <tr>
            <th style={{ width: "60px" }}>Icon</th>
            {COLUMNS.map((column) => {
              const isSorted = sort?.key === column.key;

              return (
                <th
                  key={column.key}
                  aria-sort={
                    isSorted
                      ? ((sort.direction === "asc"
                          ? "ascending"
                          : "descending") as React.AriaAttributes["aria-sort"])
                      : undefined
                  }
                  style={{ width: column.width, textAlign: column.align }}
                >
                  <Button
                    variant="plain"
                    color="neutral"
                    size="sm"
                    onClick={() => {
                      handleSort(column);
                    }}
                    endDecorator={
                      isSorted && sortDirectionIcons[sort.direction]
                    }
                    sx={{
                      fontWeight: "inherit",
                      fontSize: "inherit",
                      paddingX: "4px",
                      minHeight: "unset",
                      // Pushes the label to the column edge so right aligned
                      // headers stay above the figures they describe.
                      marginLeft: column.align === "right" ? "auto" : "-4px",
                    }}
                  >
                    {column.label}
                  </Button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows?.length === 0 && (
            <tr>
              <td
                colSpan={COLUMNS.length + 1}
                style={{ textAlign: "center" }}
              >
                <Typography
                  level="body-md"
                  color="neutral"
                  sx={{ paddingY: "24px" }}
                >
                  No items match the current filters.
                </Typography>
              </td>
            </tr>
          )}
          {rows
            ? rows.map((item) => {
                const isUnderProduced = item.deficit > 0;

                return (
                  <tr key={item.className}>
                    <td>
                      {gameItemsDictionnary[item.className] !== undefined ? (
                        <img
                          src={getImageHelper(item.className) ?? null}
                          alt="Satisfactory item illustration"
                          style={{
                            height: "36px",
                            width: "36px",
                            display: "block",
                          }}
                        />
                      ) : (
                        <HiOutlineQuestionMarkCircle size="36px" />
                      )}
                    </td>
                    <td>
                      <Typography
                        level="body-md"
                        fontWeight={500}
                      >
                        {item.name}
                      </Typography>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <Typography level="body-md">
                        {item.amount.toLocaleString()}
                      </Typography>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <Typography level="body-md">
                        {formatRateHelper(item.currentProduction)}
                      </Typography>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <Typography
                        level="body-md"
                        color={isUnderProduced ? "warning" : "neutral"}
                        fontWeight={isUnderProduced ? 600 : 400}
                      >
                        {formatRateHelper(item.currentConsumption)}
                      </Typography>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <Typography
                        level="body-md"
                        color={isUnderProduced ? "warning" : "neutral"}
                        fontWeight={isUnderProduced ? 600 : 400}
                      >
                        {isUnderProduced
                          ? `-${formatRateHelper(item.deficit)}`
                          : "-"}
                      </Typography>
                    </td>
                  </tr>
                );
              })
            : Array.from({ length: SKELETON_ROWS_COUNT }).map((_, index) => {
                return (
                  <tr key={`storage-row-skeleton-${String(index)}`}>
                    <td>
                      <Skeleton
                        variant="circular"
                        height="36px"
                        width="36px"
                      />
                    </td>
                    <td>
                      <Skeleton
                        variant="text"
                        width="160px"
                      />
                    </td>
                    {COLUMNS.slice(1).map((column) => {
                      return (
                        <td key={column.key}>
                          <Skeleton
                            variant="text"
                            width="70px"
                            sx={{ marginLeft: "auto" }}
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </Card>
  );
};
