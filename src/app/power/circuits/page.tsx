"use client";

import { PageHeader } from "@/react/components/header";
import { PowerCircuitsOverview } from "@/react/components/power/circuits";
import type React from "react";

const Homepage = (): React.JSX.Element => {
	return (
		<div className="container mx-auto">
			<PageHeader title="Power" subtitle="Connected Circuits" />
			<PowerCircuitsOverview />
		</div>
	);
};

export default Homepage;
