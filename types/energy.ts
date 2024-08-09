export interface EnergyData {
    CircuitID: number
    PowerConsumed: number
    PowerCapacity: number
    PowerMaxConsumed: number
    BatteryDifferential: number
    BatteryPercent: number
    BatteryCapacity: number
    BatteryTimeEmpty: number
    BatteryTimeFull: number
    FuseTriggered: boolean
    fill?:string
}

export interface GeneratorData {
    Name: string,
    ClassName: string,
    location: {
        x:number,
        y:number,
        z:number,
        Rotation: number
    },
    CircuitID: number,
    BaseProd: number,
    DynamicProdCapacity: number,
    DynamicProdDemandFactor: number,
    RegulatedDemandProd: number,
    IsFullBlast: boolean,
    CanStart: boolean,
    ProdPowerComsumption: number,
    CurrentPotential: number,
    ProductionCapacity: number,
    DefaultProductionCapacity: number,
    PowerProductionPotential: number,
    FuelAmount: number,
    Supplement: {
        Name: string,
        ClassName: string,
        CurrentConsumed: number,
        MaxConsumed: number,
        PercentFull: number
    },
    FuelResource: number,
    NuclearWarning: string,
    GeoMinPower: number,
    GeoMaxPower: number,
    AvailableFuel: {
        Name: string,
        ClassName: string,
        EnergyValue: string
    },
    WasteInventory: {
        Name: string,
        ClassName: string,
        Amount: number,
    },
    features:{
        properties: {
            name: string,
            type: string
        },
        geoemtry: {
            name: string,
            coordinates: number[],
            type: string
        }
    }
}