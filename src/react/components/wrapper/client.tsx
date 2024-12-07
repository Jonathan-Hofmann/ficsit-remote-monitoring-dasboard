"use client";

import { SidebarProvider } from "@/react/ui/sidebar";
import { useEffect, useState } from "react";
import { SidebarNavigation } from "../sideBarNavigation";
import { ThemeProvider } from "../theme";

export const ClientSideProviders = ({ children }: { children: any }) => {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	return isClient ? (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			<SidebarProvider>
				<SidebarNavigation />
				<main className="w-full">
					<div className="w-full">{children}</div>
				</main>
			</SidebarProvider>
		</ThemeProvider>
	) : null;
};
