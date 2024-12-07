"use client";

import { PageHeader } from "@/react/components/header";
import { PowerOverview } from "@/react/components/power";
import type React from "react";

const Homepage = (): React.JSX.Element => {
	return (
		<div className="container pt-8 mx-auto">
			<PageHeader title="Power" subtitle="Overview" />
			<PowerOverview />
		</div>
	);
};

export default Homepage;
