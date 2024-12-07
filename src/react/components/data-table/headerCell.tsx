import type { Column } from "@tanstack/react-table";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export const HeaderCell = ({
	column,
	title,
}: { column: Column<any, any>; title: string }) => {
	const isColumnSorted = column.getIsSorted();

	return (
		<div
			className="cursor-pointer flex flex-row items-center gap-2"
			onClick={() => column.toggleSorting(isColumnSorted === "asc")}
		>
			<p>{title}</p>
			{isColumnSorted !== false && isColumnSorted === "asc" && (
				<FaChevronDown className="h-3 w-3" />
			)}
			{isColumnSorted !== false && <FaChevronUp className="h-3 w-3" />}
		</div>
	);
};
