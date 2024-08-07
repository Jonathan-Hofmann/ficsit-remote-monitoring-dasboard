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
}