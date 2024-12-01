import { BooleanStatusCell } from "@/react/components/data-table/fuseTriggeredStatusCell"
import { HeaderCell } from "@/react/components/data-table/headerCell"
import { NumberCell } from "@/react/components/data-table/numberCell"
import { PercentageCell } from "@/react/components/data-table/percentageCell"
import { PowerFm } from "@/types/apis/frontModel/powerFm"
import { ColumnDef } from "@tanstack/react-table"

export const powerCircuitsCols: ColumnDef<PowerFm>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
        <HeaderCell column={column} title="Circuit-ID" />
    ),
    cell: ({ row }) => (<NumberCell row={row} selector="id"/>)
  },
  {
    accessorKey: "fuseTriggered",
    header: ({ column }) => (
        <HeaderCell column={column} title="Status" />
    ),
    cell: ({ row }) => (<BooleanStatusCell row={row} selector="fuseTriggered" successMsg="All OK" errorMsg="Fuse Broken!" invert/>)
  },
  {
    accessorKey: "powerProduction",
    header: ({ column }) => (
        <HeaderCell column={column} title="Production" />
    ),
    cell: ({ row }) => (<NumberCell row={row} suffix="MW" selector="powerProduction"/>)
  },
  {
    accessorKey: "powerConsumed",
    header: ({ column }) => (
        <HeaderCell column={column} title="Consumption" />
    ),
    cell: ({ row }) => (<NumberCell row={row} suffix="MW" selector="powerConsumed"/>)
  },
  {
    accessorKey: "perc_consumed",
    header: ({ column }) => (
        <HeaderCell column={column} title="Consumption" />
    ),
    cell: ({ row }) => {
        const prod = parseFloat(row.getValue("powerProduction"))
        const cons = parseFloat(row.getValue("powerConsumed"))

        let perc = (cons / prod) * 100

        if(isNaN(perc)){
            perc = 0;
        }

        return(
            <PercentageCell perc={perc} color/>
        )
    }
  },
  {
    accessorKey: "powerMaxConsumed",
    header: ({ column }) => (
        <HeaderCell column={column} title="Max. Consumption" />
    ),
    cell: ({ row }) => (<NumberCell row={row} suffix="MW" selector="powerMaxConsumed"/>)
  },
  {
    accessorKey: "batteryCapacity",
    header: ({ column }) => (
        <HeaderCell column={column} title="Battery Capacity" />
    ),
    cell: ({ row }) => (<NumberCell row={row} suffix="MW" selector="batteryCapacity"/>)
  }
]
