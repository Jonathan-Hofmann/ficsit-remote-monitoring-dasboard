import { cn } from "@/lib/utils";
import type { EnergyData } from "@/types/energy";

import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export const EnergyBatteryAttachedCard = ({
  circuit,
}: {
  circuit: EnergyData;
}) => {
  return (
    <Card className="">
      <CardContent className="">
        {circuit.BatteryCapacity > 0 ? (
          <p className="text-lg">Connected</p>
        ) : (
          <p className="text-lg opacity-50">No Battery Connected</p>
        )}
        <p className="text-xs text-muted-foreground">Battery status</p>
      </CardContent>
    </Card>
  );
};
