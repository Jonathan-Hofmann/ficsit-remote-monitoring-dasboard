export const PageHeader = ({title, subtitle}:{title:string, subtitle:string}) => {
    return(
        <div className="mb-6 mt-12">
            <p className="text-sm text-muted-foreground uppercase font-medium mb-1">{subtitle}</p>
            <p className="text-4xl font-bold">{title}</p>
        </div>
    )
}