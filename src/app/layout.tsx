import "../styles/globalStyles.scss";

import type { Metadata } from "next";
import type React from "react";

import { ClientSideProviders } from "@/react/components/wrapper/client";

export const metadata: Metadata = {
	title: "Satisfactory Dashboard Ficsit Remote Monitoring",
	description: "Satisfactory Dashboard Ficsit Remote Monitoring",
};

type Props = {
	children: React.ReactNode;
};

const GlobalLayout = ({ children }: Props): React.JSX.Element => {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<link rel="apple-touch-icon" href="/frmd-icon-192.png" />
			<body className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
				<ClientSideProviders>{children}</ClientSideProviders>
			</body>
		</html>
	);
};

export default GlobalLayout;
