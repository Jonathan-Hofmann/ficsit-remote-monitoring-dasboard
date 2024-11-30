import {
  BsCheckCircle,
  BsCheckCircleFill,
  BsExclamationTriangleFill,
} from "react-icons/bs";

import { cn } from "@/lib/utils";
import type { EnergyData } from "@/types/energy";

import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export const EnergyFuseCard = ({ circuit }: { circuit: EnergyData }) => {
  return (
    <Card className="">
      <CardContent className="flex flex-row justify-between">
        <div>
          {circuit.FuseTriggered ? (
            <p className="text-lg font-semibold text-orange-400">
              Fuse broken!
            </p>
          ) : (
            <p className="text-lg">No Problem.</p>
          )}
          <p className="text-xs text-muted-foreground">Power Grid status</p>
        </div>
        <div className="pr-2 flex flex-col items-center justify-center">
          {circuit.FuseTriggered ? (
            <BsExclamationTriangleFill className="text-orange-400 h-6 w-6" />
          ) : (
            <BsCheckCircle className="h-6 w-6" />
          )}
        </div>
      </CardContent>
    </Card>
  );
};
