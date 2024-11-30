import { Card, CardContent } from "@/components/ui/card";
import type { EnergyData } from "@/types/energy";

export const BatteryTimeInfo = ({ circuit }: { circuit: EnergyData }) => {
  return (
    <Card>
      <CardContent>
        {circuit.BatteryCapacity > 0 ? (
          <>
            {circuit.BatteryDifferential >= 0 ? (
              <p className="text-lg">{circuit.BatteryTimeFull}</p>
            ) : (
              <p className="text-lg">{circuit.BatteryTimeEmpty}</p>
            )}
          </>
        ) : (
          <p className="text-lg opacity-50">--:--:--</p>
        )}
        <p className="text-xs text-muted-foreground">
          {circuit.BatteryDifferential >= 0
            ? "Time until full"
            : "Time until empty"}
        </p>
      </CardContent>
    </Card>
  );
};
