import "../styles/globalStyles.scss";

import type { Metadata } from "next";
import React from "react";

import { Footer } from "../react/components/footer";
import { SideBarNavigation } from "../react/components/sideBarNavigation";

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
      <link
        rel="icon"
        href="/favicon.ico"
        sizes="any"
      />
      <link
        rel="apple-touch-icon"
        href="/frmd-icon-192.png"
      />
      <body>
        <div className="bg-black flex flex-row text-white min-w-full max-w-full min-h-screen max-h-screen overflow-hidden">
          <SideBarNavigation />
          <div className="w-full flex flex-col h-screen">
            <main className="flex-1 overflow-y-auto">
              <div className="container mt-4 mb-4 mx-auto w-full">
                {children}
              </div>
            </main>
            <div className="container mx-auto w-full">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalLayout;
