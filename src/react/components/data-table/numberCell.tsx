import { cn } from "@/lib/utils";
import type { Row } from "@tanstack/react-table";

export const NumberCell = ({
	row,
	suffix,
	selector,
}: { row: Row<any>; suffix?: string; selector: string }) => {
	const amount = Number.parseFloat(row.getValue(selector));
	const formatted = new Intl.NumberFormat("en-us", {
		maximumFractionDigits: 3,
	}).format(amount);

	return (
		<div className={cn(["font-medium"])}>
			<p>
				{formatted} {suffix && suffix}
			</p>
		</div>
	);
};
