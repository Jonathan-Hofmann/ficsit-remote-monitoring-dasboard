import { HeaderCell } from "@/react/components/data-table/headerCell";
import { NumberCell } from "@/react/components/data-table/numberCell";
import { Badge } from "@/react/ui/badge";
import type { FuelInventoryItem } from "@/types/apis/dataTransferObject/generatorsDto";
import type { GeneratorFm } from "@/types/apis/frontModel/generatorsFm";
import type { ColumnDef } from "@tanstack/react-table";

export const powerGeneratorsCols: ColumnDef<GeneratorFm>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => <HeaderCell column={column} title="Name" />,
	},
	{
		accessorKey: "powerInfo.CircuitGroupID",
		id: "circuitID",
		header: ({ column }) => (
			<HeaderCell column={column} title="Connected Circuit" />
		),
		cell: ({ row }) => {
			const tmp: number = row.getValue("circuitID");
			if (tmp >= 0) {
				return <Badge variant={"secondary"}>Circuit {tmp}</Badge>;
			}
			return <Badge variant={"outline"}>Not connected</Badge>;
		},
	},
	{
		accessorKey: "loadPercentage",
		header: ({ column }) => <HeaderCell column={column} title="Status" />,
		cell: ({ row }) => {
			const prod = Number.parseFloat(row.getValue("loadPercentage"));

			if (prod > 0) {
				return <Badge variant={"success"}>Working</Badge>;
			}
			return <Badge variant={"destructive"}>Offline</Badge>;
		},
	},
	{
		accessorKey: "baseProd",
		header: ({ column }) => (
			<HeaderCell column={column} title="Current Production" />
		),
		cell: ({ row }) => <NumberCell row={row} suffix="MW" selector="baseProd" />,
	},
	{
		accessorKey: "currentPotential",
		header: ({ column }) => (
			<HeaderCell column={column} title="Production Boost (%)" />
		),
		cell: ({ row }) => (
			<NumberCell row={row} suffix="%" selector="currentPotential" />
		),
	},
	{
		accessorKey: "fuelInventory",
		header: ({ column }) => (
			<HeaderCell column={column} title="Fuel Inventory" />
		),
		cell: ({ row }) => {
			const prod: FuelInventoryItem[] = row.getValue("fuelInventory");

			let invString = "--";

			for (let i = 0; i < prod.length; i++) {
				const inv = prod[i];
				if (i === 0) {
					invString = `${inv.Name}: ${inv.Amount}`;
				} else {
					`${invString} | ${inv.Name}: ${inv.Amount}`;
				}
			}

			return <p>{invString}</p>;
		},
	},
];
