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

type UnderMode = {
  value: string;
  label: string;
  // Shortfall for one item, or 0 when it is keeping up. Worked out on rounded
  // figures so the result matches the rendered columns exactly and a sub-unit
  // gap never shows as "-0".
  compute: (item: StorageItemRow) => number;
};

const underHelper = (consumption: number, production: number): number => {
  const shortfall = Math.round(consumption) - Math.round(production);
  return shortfall > 0 ? shortfall : 0;
};

const UNDER_MODES: UnderMode[] = [
  {
    // Demand beats what is actually coming out right now. The capacity may well
    // exist, so this catches starved inputs and paused or underclocked machines.
    value: "curConsOverCurProd",
    label: "Current Consumption > Current Production",
    compute: (item) =>
      underHelper(item.currentConsumption, item.currentProduction),
  },
  {
    // Demand beats what the recipe could ever deliver, even at 100% clock.
    // A pipeline design problem: no amount of overclocking fixes it.
    value: "curConsOverMaxProd",
    label: "Current Consumption > Max Production",
    compute: (item) => underHelper(item.currentConsumption, item.maxProduction),
  },
  {
    // Both sides at full tilt still leaves a gap, independent of what happens to
    // be running. The structural version of the one above.
    value: "maxConsOverMaxProd",
    label: "Max Consumption > Max Production",
    compute: (item) => underHelper(item.maxConsumption, item.maxProduction),
  },
];

const DEFAULT_UNDER_MODE = UNDER_MODES[0];

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
  align: "left" | "right";
  defaultDirection: SortDirection;
  // Rate columns are rendered as a pair of cells, so the current values line up
  // under each other and the "/ max min" halves do the same, instead of one
  // string per row drifting left and right with the digit count.
  span: number;
};

const COLUMNS: ColumnDefinition[] = [
  {
    key: "name",
    label: "Item",
    align: "left",
    defaultDirection: "asc",
    span: 1,
  },
  {
    key: "amount",
    label: "Stored",
    align: "right",
    defaultDirection: "desc",
    span: 1,
  },
  {
    key: "currentProduction",
    label: "Produced",
    align: "right",
    defaultDirection: "desc",
    span: 2,
  },
  {
    key: "currentConsumption",
    label: "Consumed",
    align: "right",
    defaultDirection: "desc",
    span: 2,
  },
  {
    key: "deficit",
    label: "Under",
    align: "right",
    defaultDirection: "desc",
    span: 1,
  },
];

// Icon, item, stored, produced current + max, consumed current + max, deficit.
// Widths live here rather than on the header cells because the rate headers
// span two columns and so cannot size them individually.
const COLUMN_WIDTHS = [
  "60px",
  "auto",
  "100px",
  "80px",
  "110px",
  "80px",
  "110px",
  "110px",
];

const sortDirectionIcons: Record<SortDirection, React.ReactNode> = {
  asc: <FaSortUp size="12px" />,
  desc: <FaSortDown size="12px" />,
};

const SKELETON_ROWS_COUNT = 12;

const formatAmountHelper = (value: number): string => {
  return Math.round(value).toLocaleString();
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
  const [underMode, setUnderMode] = useState<string>(DEFAULT_UNDER_MODE.value);

  const rows = useMemo((): StorageItemRow[] | undefined => {
    if (!items) return undefined;

    // The Under column is recomputed here rather than reusing the deficit the
    // view supplies, so the chosen mode stays local to this table and leaves the
    // panels layout on its own reading.
    const mode =
      UNDER_MODES.find((entry) => entry.value === underMode) ??
      DEFAULT_UNDER_MODE;

    const needle = normaliseHelper(search);
    let filtered = items.map((item) => {
      return { ...item, deficit: mode.compute(item) };
    });

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
  }, [items, sort, search, machine, underMode, producersByItem]);

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

  const handleChangeUnderMode = useCallback(
    (_event: React.SyntheticEvent | null, value: string | null) => {
      setUnderMode(value ?? DEFAULT_UNDER_MODE.value);
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
        <Select
          size="sm"
          value={underMode}
          onChange={handleChangeUnderMode}
          startDecorator="Under:"
          sx={{ minWidth: "380px" }}
          slotProps={{
            button: { "aria-label": "How the Under column is calculated" },
          }}
        >
          {UNDER_MODES.map((mode) => {
            return (
              <Option
                key={mode.value}
                value={mode.value}
              >
                {mode.label}
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
        <colgroup>
          {COLUMN_WIDTHS.map((width, index) => {
            return (
              <col
                key={`storage-col-${String(index)}`}
                style={width === "auto" ? undefined : { width }}
              />
            );
          })}
        </colgroup>
        <thead>
          <tr>
            <th>Icon</th>
            {COLUMNS.map((column) => {
              const isSorted = sort?.key === column.key;
              const isPaired = column.span > 1;

              return (
                <th
                  key={column.key}
                  colSpan={column.span}
                  aria-sort={
                    isSorted
                      ? ((sort.direction === "asc"
                          ? "ascending"
                          : "descending") as React.AriaAttributes["aria-sort"])
                      : undefined
                  }
                  style={{ textAlign: isPaired ? "center" : column.align }}
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
                      // headers stay above the figures they describe, and
                      // centres it over the two cells of a paired column.
                      marginLeft:
                        isPaired || column.align === "right" ? "auto" : "-4px",
                      marginRight: isPaired ? "auto" : 0,
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
                colSpan={COLUMN_WIDTHS.length}
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
                        {item.amount === 0 ? "-" : item.amount.toLocaleString()}
                      </Typography>
                    </td>
                    <td style={{ textAlign: "right", paddingRight: "6px" }}>
                      <Typography level="body-md">
                        {formatAmountHelper(item.currentProduction)}
                      </Typography>
                    </td>
                    <td style={{ textAlign: "left", paddingLeft: 0 }}>
                      <Typography
                        level="body-md"
                        textColor="text.tertiary"
                      >
                        / {formatAmountHelper(item.maxProduction)}
                      </Typography>
                    </td>
                    <td style={{ textAlign: "right", paddingRight: "6px" }}>
                      <Typography
                        level="body-md"
                        color={isUnderProduced ? "warning" : "neutral"}
                        fontWeight={isUnderProduced ? 600 : 400}
                      >
                        {formatAmountHelper(item.currentConsumption)}
                      </Typography>
                    </td>
                    <td style={{ textAlign: "left", paddingLeft: 0 }}>
                      <Typography
                        level="body-md"
                        textColor="text.tertiary"
                      >
                        / {formatAmountHelper(item.maxConsumption)}
                      </Typography>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <Typography
                        level="body-md"
                        color={isUnderProduced ? "warning" : "neutral"}
                        fontWeight={isUnderProduced ? 600 : 400}
                      >
                        {isUnderProduced
                          ? `-${formatAmountHelper(item.deficit)}`
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
                    {COLUMN_WIDTHS.slice(2).map((_width, cellIndex) => {
                      return (
                        <td key={`storage-skeleton-cell-${String(cellIndex)}`}>
                          <Skeleton
                            variant="text"
                            width="60px"
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
