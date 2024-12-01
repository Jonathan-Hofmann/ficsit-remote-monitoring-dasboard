import { cn } from "@/lib/utils"

const ERROR_PERC = 90

export const PercentageCell = ({ perc, color }: { perc:number, color?:boolean }) => {
    const formatted = new Intl.NumberFormat("en-us", {maximumFractionDigits:3}).format(perc)

    return (
        <div className={cn(["font-medium"])}>
            <p className={cn([(color && perc > ERROR_PERC) && "text-destructive font-semibold"])}>
                {formatted} %
            </p>
        </div>
    )

}