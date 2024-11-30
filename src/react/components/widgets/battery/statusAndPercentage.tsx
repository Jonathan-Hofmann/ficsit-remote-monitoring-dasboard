import { Card, CardContent } from "@/components/ui/card";
import type { EnergyData } from "@/types/energy";

export const BatteryStatusAndPercentage = ({
  circuit,
}: {
  circuit: EnergyData;
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardContent>
          {circuit.BatteryCapacity > 0 ? (
            <p className="text-xl">
              {Math.round(circuit.BatteryPercent).toLocaleString()} %
            </p>
          ) : (
            <p className="text-lg opacity-50">-- %</p>
          )}
          <p className="text-xs text-muted-foreground">Loading state</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          {circuit.BatteryCapacity > 0 ? (
            <>
              {circuit.BatteryDifferential >= 0 ? (
                <p className="text-lg">Charging</p>
              ) : (
                <p className="text-lg">Decharging</p>
              )}
            </>
          ) : (
            <p className="text-lg opacity-50">-</p>
          )}
          <p className="text-xs text-muted-foreground">Status</p>
        </CardContent>
      </Card>
    </div>
  );
};
