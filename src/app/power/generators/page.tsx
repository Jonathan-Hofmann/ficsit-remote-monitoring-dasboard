"use client"

import { PageHeader } from "@/react/components/header";
import { PowerGeneratorsOverview } from "@/react/components/power/generators";
import type React from "react";

const Homepage = (): React.JSX.Element => {
  return (
    <div className="container mx-auto">
      <PageHeader title="Power" subtitle="Connected Circuits"/>
      <PowerGeneratorsOverview/>
    </div>
  );
};

export default Homepage;
