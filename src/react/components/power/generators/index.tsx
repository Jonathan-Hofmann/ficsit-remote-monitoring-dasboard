import { EndpointEnum } from "@/enums/endpoint.enum";
import { useAutoRefetch } from "@/react/hook/useAutoRefetch";
import { Card, CardContent, CardHeader, CardTitle } from "@/react/ui/card";
import type { GeneratorFm } from "@/types/apis/frontModel/generatorsFm";
import { powerGeneratorsCols } from "./table/cols";
import { PowerGeneratorsTable } from "./table/table";

export const PowerGeneratorsOverview = () => {
	const data = useAutoRefetch(EndpointEnum.GENERATORS, false);

	return (
		<div>
			{data.data ? (
				<div>
					<Card>
						<CardHeader>
							<CardTitle>All connected Power Generators</CardTitle>
						</CardHeader>
						<CardContent>
							<PowerGeneratorsTable
								data={data.data as GeneratorFm[]}
								columns={powerGeneratorsCols}
							/>
						</CardContent>
					</Card>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};
