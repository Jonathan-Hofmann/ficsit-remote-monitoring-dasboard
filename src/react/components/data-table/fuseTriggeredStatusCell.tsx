import { Badge } from "@/react/ui/badge";
import type { Row } from "@tanstack/react-table";

export const BooleanStatusCell = ({
	row,
	selector,
	errorMsg,
	successMsg,
	invert,
}: {
	row: Row<any>;
	selector: string;
	errorMsg: string;
	successMsg: string;
	invert?: boolean;
}) => {
	let tmp: boolean = row.getValue(selector);

	if (invert) {
		tmp = !tmp;
	}

	return (
		<div>
			{tmp === true ? (
				<Badge variant={"success"}>{successMsg}</Badge>
			) : (
				<Badge variant={"destructive"}>{errorMsg}</Badge>
			)}
		</div>
	);
};
