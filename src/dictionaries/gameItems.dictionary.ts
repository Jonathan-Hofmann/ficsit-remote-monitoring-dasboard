import { EndpointEnum } from "../enums/endpoint.enum";
import { GameBuildingsTypeEnum } from "../enums/gameBuildingsType.enum";
import { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import { GameItemsEnum } from "../enums/gameItems.enum";
import { GameItemsCategoryEnum } from "../enums/gameItemsCategory.enum";
import { GameResourcesTypeEnum } from "../enums/gameResourcesType.enum";
import type { GameItemsDictionnary } from "../types/gameItemsDictionary";

export const gameItemsDictionnary: GameItemsDictionnary = {
  // Raw resources items
  [GameClassNamesEnum.Desc_OreIron_C]: {
    name: GameItemsEnum.Iron_Ore,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_OreCopper_C]: {
    name: GameItemsEnum.Copper_Ore,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Stone_C]: {
    name: GameItemsEnum.Limestone,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Coal_C]: {
    name: GameItemsEnum.Coal,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Water_C]: {
    name: GameItemsEnum.Water,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_PackagedWater_C]: {
    name: GameItemsEnum.Packaged_Water,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_LiquidOil_C]: {
    name: GameItemsEnum.Crude_Oil,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_PackagedOil_C]: {
    name: GameItemsEnum.Packaged_Oil,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_OreGold_C]: {
    name: GameItemsEnum.Caterium_Ore,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_OreBauxite_C]: {
    name: GameItemsEnum.Bauxite,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_RawQuartz_C]: {
    name: GameItemsEnum.Raw_Quartz,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Sulfur_C]: {
    name: GameItemsEnum.Sulfur,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_OreUranium_C]: {
    name: GameItemsEnum.Uranium,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_NitrogenGas_C]: {
    name: GameItemsEnum.Nitrogen_Gas,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_PackagedNitrogenGas_C]: {
    name: GameItemsEnum.Packaged_Nitrogen_Gas,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SAM_C]: {
    name: GameItemsEnum.SAM,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Flora and fauna items
  [GameClassNamesEnum.Desc_Leaves_C]: {
    name: GameItemsEnum.Leaves,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Wood_C]: {
    name: GameItemsEnum.Wood,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Mycelia_C]: {
    name: GameItemsEnum.Mycelia,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_HogParts_C]: {
    name: GameItemsEnum.Hog_Remains,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpitterParts_C]: {
    name: GameItemsEnum.Spitter_Remains,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_StingerParts_C]: {
    name: GameItemsEnum.Stinger_Remains,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_HatcherParts_C]: {
    name: GameItemsEnum.Hatcher_Remains,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.BP_Crystal_C]: {
    name: GameItemsEnum.Blue_Power_Slug,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.BP_Crystal_mk2_C]: {
    name: GameItemsEnum.Yellow_Power_Slug,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.BP_Crystal_mk3_C]: {
    name: GameItemsEnum.Purple_Power_Slug,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Nut_C]: {
    name: GameItemsEnum.Beryl_Nut,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Berry_C]: {
    name: GameItemsEnum.Paleberry,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Shroom_C]: {
    name: GameItemsEnum.Bacon_Agaric,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Special
  [GameClassNamesEnum.Desc_ResourceSinkCoupon_C]: {
    name: GameItemsEnum.Ficsit_Coupon,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_HardDrive_C]: {
    name: GameItemsEnum.Hard_Drive,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_WAT2_C]: {
    name: GameItemsEnum.Mercer_Sphere,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_WAT1_C]: {
    name: GameItemsEnum.Somersloop,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Tier 1 items
  [GameClassNamesEnum.Desc_IronIngot_C]: {
    name: GameItemsEnum.Iron_Ingot,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_IronPlate_C]: {
    name: GameItemsEnum.Iron_Plate,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_IronRod_C]: {
    name: GameItemsEnum.Iron_Rod,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_CopperIngot_C]: {
    name: GameItemsEnum.Copper_Ingot,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Wire_C]: {
    name: GameItemsEnum.Wire,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Cable_C]: {
    name: GameItemsEnum.Cable,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Cement_C]: {
    name: GameItemsEnum.Concrete,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_IronScrew_C]: {
    name: GameItemsEnum.Screw,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_IronPlateReinforced_C]: {
    name: GameItemsEnum.Reinforced_Iron_Plate,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_GenericBiomass_C]: {
    name: GameItemsEnum.Biomass,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Tier 2 items
  [GameClassNamesEnum.Desc_CopperSheet_C]: {
    name: GameItemsEnum.Copper_Sheet,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Rotor_C]: {
    name: GameItemsEnum.Rotor,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_ModularFrame_C]: {
    name: GameItemsEnum.Modular_Frame,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_1_C]: {
    name: GameItemsEnum.Smart_Plating,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Biofuel_C]: {
    name: GameItemsEnum.Solid_Biofuel,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Tier 3 items
  [GameClassNamesEnum.Desc_SteelIngot_C]: {
    name: GameItemsEnum.Steel_Ingot,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SteelPlate_C]: {
    name: GameItemsEnum.Steel_Beam,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SteelPipe_C]: {
    name: GameItemsEnum.Steel_Pipe,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_2_C]: {
    name: GameItemsEnum.Versatile_Framework,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Tier 4 items
  [GameClassNamesEnum.Desc_SteelPlateReinforced_C]: {
    name: GameItemsEnum.Encased_Industrial_Beam,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Stator_C]: {
    name: GameItemsEnum.Stator,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Motor_C]: {
    name: GameItemsEnum.Motor,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_3_C]: {
    name: GameItemsEnum.Automated_Wiring,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Tier 5 items
  [GameClassNamesEnum.Desc_Plastic_C]: {
    name: GameItemsEnum.Plastic,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Rubber_C]: {
    name: GameItemsEnum.Rubber,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_PolymerResin_C]: {
    name: GameItemsEnum.Polymer_Resin,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_PetroleumCoke_C]: {
    name: GameItemsEnum.Petroleum_Coke,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_CircuitBoard_C]: {
    name: GameItemsEnum.Circuit_Board,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_LiquidFuel_C]: {
    name: GameItemsEnum.Fuel,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_Fuel_C]: {
    name: GameItemsEnum.Packaged_Fuel,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_HeavyOilResidue_C]: {
    name: GameItemsEnum.Heavy_Oil_Residue,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_PackagedOilResidue_C]: {
    name: GameItemsEnum.Packaged_Heavy_Oil_Residue,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_LiquidBiofuel_C]: {
    name: GameItemsEnum.Liquid_Biofuel,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_PackagedBiofuel_C]: {
    name: GameItemsEnum.Packaged_Liquid_Biofuel,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_FluidCanister_C]: {
    name: GameItemsEnum.Empty_Canister,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Tier 6 items
  [GameClassNamesEnum.Desc_Computer_C]: {
    name: GameItemsEnum.Computer,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_ModularFrameHeavy_C]: {
    name: GameItemsEnum.Heavy_Modular_Frame,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_4_C]: {
    name: GameItemsEnum.Modular_Engine,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_5_C]: {
    name: GameItemsEnum.Adaptive_Control_Unit,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Tier 7 items
  [GameClassNamesEnum.Desc_AluminaSolution_C]: {
    name: GameItemsEnum.Alumina_Solution,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_PackagedAlumina_C]: {
    name: GameItemsEnum.Packaged_Alumina_Solution,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_AluminumScrap_C]: {
    name: GameItemsEnum.Aluminum_Scrap,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_AluminumIngot_C]: {
    name: GameItemsEnum.Aluminum_Ingot,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_AluminumPlate_C]: {
    name: GameItemsEnum.Alclad_Aluminum_Sheet,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_AluminumCasing_C]: {
    name: GameItemsEnum.Aluminum_Casing,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_ModularFrameLightweight_C]: {
    name: GameItemsEnum.Radio_Control_Unit,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SulfuricAcid_C]: {
    name: GameItemsEnum.Sulfuric_Acid,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_PackagedSulfuricAcid_C]: {
    name: GameItemsEnum.Packaged_Sulfuric_Acid,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Battery_C]: {
    name: GameItemsEnum.Battery,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_ComputerSuper_C]: {
    name: GameItemsEnum.Supercomputer,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_7_C]: {
    name: GameItemsEnum.Assembly_Director_System,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Tier 8 items
  [GameClassNamesEnum.Desc_UraniumCell_C]: {
    name: GameItemsEnum.Encased_Uranium_Cell,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_ElectromagneticControlRod_C]: {
    name: GameItemsEnum.Electromagnetic_Control_Rod,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_NuclearFuelRod_C]: {
    name: GameItemsEnum.Uranium_Fuel_Rod,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_NuclearWaste_C]: {
    name: GameItemsEnum.Uranium_Waste,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_6_C]: {
    name: GameItemsEnum.Magnetic_Field_Generator,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_GasTank_C]: {
    name: GameItemsEnum.Empty_Fluid_Tank,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_AluminumPlateReinforced_C]: {
    name: GameItemsEnum.Heat_Sink,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_CoolingSystem_C]: {
    name: GameItemsEnum.Cooling_System,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_ModularFrameFused_C]: {
    name: GameItemsEnum.Fused_Modular_Frame,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_MotorLightweight_C]: {
    name: GameItemsEnum.Turbo_Motor,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_8_C]: {
    name: GameItemsEnum.Thermal_Propulsion_Rocket,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_NitricAcid_C]: {
    name: GameItemsEnum.Nitric_Acid,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_PackagedNitricAcid_C]: {
    name: GameItemsEnum.Packaged_Nitric_Acid,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_NonFissibleUranium_C]: {
    name: GameItemsEnum.Non_Fissile_Uranium,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_PlutoniumPellet_C]: {
    name: GameItemsEnum.Plutonium_Pellet,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_PlutoniumCell_C]: {
    name: GameItemsEnum.Encased_Plutonium_Cell,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_PlutoniumFuelRod_C]: {
    name: GameItemsEnum.Plutonium_Fuel_Rod,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_PlutoniumWaste_C]: {
    name: GameItemsEnum.Plutonium_Waste,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_CopperDust_C]: {
    name: GameItemsEnum.Copper_Powder,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_PressureConversionCube_C]: {
    name: GameItemsEnum.Pressure_Conversion_Cube,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_9_C]: {
    name: GameItemsEnum.Nuclear_Pasta,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Tier 9 items
  [GameClassNamesEnum.Desc_Diamond_C]: {
    name: GameItemsEnum.Diamonds,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_TimeCrystal_C]: {
    name: GameItemsEnum.Time_Crystal,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_FicsiteIngot_C]: {
    name: GameItemsEnum.Ficsite_Ingot,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_FicsiteMesh_C]: {
    name: GameItemsEnum.Ficsite_Trigon,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_10_C]: {
    name: GameItemsEnum.Biochemical_Sculptor,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_QuantumEnergy_C]: {
    name: GameItemsEnum.Excited_Photonic_Matter,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_DarkEnergy_C]: {
    name: GameItemsEnum.Dark_Matter_Residue,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_DarkMatter_C]: {
    name: GameItemsEnum.Dark_Matter_Crystal,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_QuantumOscillator_C]: {
    name: GameItemsEnum.Superposition_Oscillator,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_TemporalProcessor_C]: {
    name: GameItemsEnum.Neural_Quantum_Processor,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_12_C]: {
    name: GameItemsEnum.AI_Expansion_Server,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SingularityCell_C]: {
    name: GameItemsEnum.Singularity_Cell,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorPart_11_C]: {
    name: GameItemsEnum.Ballistic_Warp_Drive,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Ficsonium_C]: {
    name: GameItemsEnum.Ficsonium,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_FicsoniumFuelRod_C]: {
    name: GameItemsEnum.Ficsonium_Fuel_Rod,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // MAM items
  [GameClassNamesEnum.Desc_CrystalShard_C]: {
    name: GameItemsEnum.Power_Shard,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_AlienProtein_C]: {
    name: GameItemsEnum.Alien_Protein,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_AlienDNACapsule_C]: {
    name: GameItemsEnum.Alien_DNA_Capsule,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Fabric_C]: {
    name: GameItemsEnum.Fabric,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_GoldIngot_C]: {
    name: GameItemsEnum.Caterium_Ingot,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_HighSpeedWire_C]: {
    name: GameItemsEnum.Quickwire,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_CircuitBoardHighSpeed_C]: {
    name: GameItemsEnum.AI_Limiter,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_HighSpeedConnector_C]: {
    name: GameItemsEnum.High_Speed_Connector,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_QuartzCrystal_C]: {
    name: GameItemsEnum.Quartz_Crystal,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_Silica_C]: {
    name: GameItemsEnum.Silica,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_CrystalOscillator_C]: {
    name: GameItemsEnum.Crystal_Oscillator,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_DissolvedSilica_C]: {
    name: GameItemsEnum.Dissolved_Silica,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_Gunpowder_C]: {
    name: GameItemsEnum.Black_Powder,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_CompactedCoal_C]: {
    name: GameItemsEnum.Compacted_Coal,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_LiquidTurboFuel_C]: {
    name: GameItemsEnum.Turbofuel,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_TurboFuel_C]: {
    name: GameItemsEnum.Packaged_Turbofuel,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_GunpowderMK2_C]: {
    name: GameItemsEnum.Smokeless_Powder,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_RocketFuel_C]: {
    name: GameItemsEnum.Rocket_Fuel,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_PackagedRocketFuel_C]: {
    name: GameItemsEnum.Packaged_Rocket_Fuel,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_IonizedFuel_C]: {
    name: GameItemsEnum.Ionized_Fuel,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Fluid,
  },
  [GameClassNamesEnum.Desc_PackagedIonizedFuel_C]: {
    name: GameItemsEnum.Packaged_Ionized_Fuel,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SAMIngot_C]: {
    name: GameItemsEnum.Reanimated_SAM,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_SAMFluctuator_C]: {
    name: GameItemsEnum.SAM_Fluctuator,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },
  [GameClassNamesEnum.Desc_AlienPowerFuel_C]: {
    name: GameItemsEnum.Alien_Power_Matrix,
    category: GameItemsCategoryEnum.Resource,
    resourceType: GameResourcesTypeEnum.Solid,
  },

  // Classic equipements
  [GameClassNamesEnum.BP_EquipmentDescriptorShockShank_C]: {
    name: GameItemsEnum.Xeno_Zapper,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.BP_ItemDescriptorPortableMiner_C]: {
    name: GameItemsEnum.Portable_Miner,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorObjectScanner_C]: {
    name: GameItemsEnum.Object_Scanner,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_Chainsaw_C]: {
    name: GameItemsEnum.Chainsaw,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorStunSpear_C]: {
    name: GameItemsEnum.Xeno_Basher,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorJetPack_C]: {
    name: GameItemsEnum.Jetpack,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorHoverPack_C]: {
    name: GameItemsEnum.Hoverpack,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorGasmask_C]: {
    name: GameItemsEnum.Gas_Mask,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_Filter_C]: {
    name: GameItemsEnum.Gas_Filter,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorHazmatSuit_C]: {
    name: GameItemsEnum.Hazmat_Suit,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_HazmatFilter_C]: {
    name: GameItemsEnum.Iodine_Infused_Filter,
    category: GameItemsCategoryEnum.Equipment,
  },

  // MAM  equipements
  [GameClassNamesEnum.BP_EquipmentDescriptorJumpingStilts_C]: {
    name: GameItemsEnum.Blade_Runners,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_Parachute_C]: {
    name: GameItemsEnum.Parachute,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_Medkit_C]: {
    name: GameItemsEnum.Medicinal_Inhaler,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_RebarGunProjectile_C]: {
    name: GameItemsEnum.Rebar_Gun,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_SpikedRebar_C]: {
    name: GameItemsEnum.Iron_Rebar,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_Rebar_Stunshot_C]: {
    name: GameItemsEnum.Stun_Rebar,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_Rebar_Spreadshot_C]: {
    name: GameItemsEnum.Shatter_Rebar,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_Rebar_Explosive_C]: {
    name: GameItemsEnum.Explosive_Rebar,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.BP_EqDescZipLine_C]: {
    name: GameItemsEnum.Zipline,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorNobeliskDetonator_C]: {
    name: GameItemsEnum.Nobelisk_Detonator,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_NobeliskExplosive_C]: {
    name: GameItemsEnum.Nobelisk,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_NobeliskGas_C]: {
    name: GameItemsEnum.Gas_Nobelisk,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_NobeliskShockwave_C]: {
    name: GameItemsEnum.Pulse_Nobelisk,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_NobeliskCluster_C]: {
    name: GameItemsEnum.Cluster_Nobelisk,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_NobeliskNuke_C]: {
    name: GameItemsEnum.Nuke_Nobelisk,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorRifle_C]: {
    name: GameItemsEnum.Rifle,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_CartridgeStandard_C]: {
    name: GameItemsEnum.Rifle_Ammo,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_CartridgeSmartProjectile_C]: {
    name: GameItemsEnum.Homing_Rifle_Ammo,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_CartridgeChaos_C]: {
    name: GameItemsEnum.Turbo_Rifle_Ammo,
    category: GameItemsCategoryEnum.Equipment,
  },

  // Awesome shop equipements
  [GameClassNamesEnum.BP_EquipmentDescriptorCup_C]: {
    name: GameItemsEnum.Cup,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorCupGold_C]: {
    name: GameItemsEnum.Employee_of_the_Planet_Cup,
    category: GameItemsCategoryEnum.Equipment,
  },
  [GameClassNamesEnum.Desc_BoomBox_C]: {
    name: GameItemsEnum.Boom_Box,
    category: GameItemsCategoryEnum.Equipment,
  },

  // Extractors buildings
  [GameClassNamesEnum.Build_MinerMk1_C]: {
    name: GameItemsEnum.Miner_Mk_1,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Extractor,
  },
  [GameClassNamesEnum.Build_MinerMk2_C]: {
    name: GameItemsEnum.Miner_Mk_2,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Extractor,
  },
  [GameClassNamesEnum.Build_MinerMk3_C]: {
    name: GameItemsEnum.Miner_Mk_3,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Extractor,
  },
  [GameClassNamesEnum.Build_WaterPump_C]: {
    name: GameItemsEnum.Water_Extractor,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Extractor,
  },
  [GameClassNamesEnum.Build_OilPump_C]: {
    name: GameItemsEnum.Oil_Extractor,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Extractor,
  },
  [GameClassNamesEnum.Build_FrackingSmasher_C]: {
    name: GameItemsEnum.Resource_Well_Pressurizer,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Extractor,
  },
  [GameClassNamesEnum.Build_FrackingExtractor_C]: {
    name: GameItemsEnum.Resource_Well_Extractor,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Extractor,
  },

  // Smelters buildings
  [GameClassNamesEnum.Build_SmelterMk1_C]: {
    name: GameItemsEnum.Smelter,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Manufacturer,
    endpoint: EndpointEnum.SMELTER,
  },
  [GameClassNamesEnum.Build_FoundryMk1_C]: {
    name: GameItemsEnum.Foundry,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Manufacturer,
    endpoint: EndpointEnum.FOUNDRY,
  },

  // Manufacturers buildings
  [GameClassNamesEnum.Build_ConstructorMk1_C]: {
    name: GameItemsEnum.Constructor,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Manufacturer,
    endpoint: EndpointEnum.CONSTRUCTOR,
  },
  [GameClassNamesEnum.Build_AssemblerMk1_C]: {
    name: GameItemsEnum.Assembler,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Manufacturer,
    endpoint: EndpointEnum.ASSEMBLER,
  },
  [GameClassNamesEnum.Build_ManufacturerMk1_C]: {
    name: GameItemsEnum.Manufacturer,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Manufacturer,
    endpoint: EndpointEnum.MANUFACTURER,
  },
  [GameClassNamesEnum.Build_Packager_C]: {
    name: GameItemsEnum.Packager,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Manufacturer,
    endpoint: EndpointEnum.PACKAGER,
  },
  [GameClassNamesEnum.Build_OilRefinery_C]: {
    name: GameItemsEnum.Refinery,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Manufacturer,
    endpoint: EndpointEnum.REFINERY,
  },
  [GameClassNamesEnum.Build_Blender_C]: {
    name: GameItemsEnum.Blender,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Manufacturer,
    endpoint: EndpointEnum.BLENDER,
  },
  [GameClassNamesEnum.Build_HadronCollider_C]: {
    name: GameItemsEnum.Particle_Accelerator,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Manufacturer,
    endpoint: EndpointEnum.PARTICLE_ACCELERATOR,
  },
  [GameClassNamesEnum.Build_QuantumEncoder_C]: {
    name: GameItemsEnum.Quantum_Encoder,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Manufacturer,
    endpoint: EndpointEnum.QUANTUM_ENCODER,
  },
  [GameClassNamesEnum.Build_Converter_C]: {
    name: GameItemsEnum.Converter,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Manufacturer,
    endpoint: EndpointEnum.CONVERTER,
  },

  // Generators buildings
  [GameClassNamesEnum.Build_GeneratorBiomass_Automated_C]: {
    name: GameItemsEnum.Biomass_Burner,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Generator,
    endpoint: EndpointEnum.BIOMASS_GENERATOR,
  },
  [GameClassNamesEnum.Build_GeneratorIntegratedBiomass_C]: {
    name: GameItemsEnum.Hub_Integrated_Biomass_Burner,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Generator,
    endpoint: undefined,
  },
  [GameClassNamesEnum.Build_GeneratorCoal_C]: {
    name: GameItemsEnum.Coal_Powered_Generator,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Generator,
    endpoint: EndpointEnum.COAL_GENERATOR,
  },
  [GameClassNamesEnum.Build_GeneratorFuel_C]: {
    name: GameItemsEnum.Fuel_Powered_Generator,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Generator,
    endpoint: EndpointEnum.FUEL_GENERATOR,
  },
  [GameClassNamesEnum.Build_GeneratorGeoThermal_C]: {
    name: GameItemsEnum.Geothermal_Generator,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Generator,
    endpoint: EndpointEnum.GEOTHERMAL_GENERATOR,
  },
  [GameClassNamesEnum.Build_GeneratorNuclear_C]: {
    name: GameItemsEnum.Nuclear_Power_Plant,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Generator,
    endpoint: EndpointEnum.NUCLEAR_GENERATOR,
  },
  [GameClassNamesEnum.Build_AlienPowerBuilding_C]: {
    name: GameItemsEnum.Alien_Power_Augmenter,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Generator,
    endpoint: undefined,
  },

  // Specials buildings
  [GameClassNamesEnum.Build_TradingPost_C]: {
    name: GameItemsEnum.HUB,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Special,
  },
  [GameClassNamesEnum.Build_Mam_C]: {
    name: GameItemsEnum.MAM,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Special,
  },
  [GameClassNamesEnum.Build_SpaceElevator_C]: {
    name: GameItemsEnum.Space_Elevator,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Special,
  },
  [GameClassNamesEnum.Build_ResourceSink_C]: {
    name: GameItemsEnum.AWESOME_Sink,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Special,
  },
  [GameClassNamesEnum.Build_ResourceSinkShop_C]: {
    name: GameItemsEnum.AWESOME_Shop,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Special,
  },
  [GameClassNamesEnum.Build_BlueprintDesigner_C]: {
    name: GameItemsEnum.Blueprint_Designer_Mk_1,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Special,
  },
  [GameClassNamesEnum.Build_BlueprintDesigner_MK2_C]: {
    name: GameItemsEnum.Blueprint_Designer_Mk_2,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Special,
  },
  [GameClassNamesEnum.Build_BlueprintDesigner_MK3_C]: {
    name: GameItemsEnum.Blueprint_Designer_Mk_3,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Special,
  },
  [GameClassNamesEnum.Build_WorkBench_C]: {
    name: GameItemsEnum.Crafting_Bench,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Special,
  },
  [GameClassNamesEnum.Build_Workshop_C]: {
    name: GameItemsEnum.Equipment_Workshop,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Special,
  },

  // Power buildings
  [GameClassNamesEnum.Build_PowerStorageMk1_C]: {
    name: GameItemsEnum.Power_Storage,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Power,
  },

  // Logistic buildings
  [GameClassNamesEnum.Build_PipelinePump_C]: {
    name: GameItemsEnum.Pipeline_Pump_Mk_1,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Logistic,
  },
  [GameClassNamesEnum.Build_PipelinePumpMk2_C]: {
    name: GameItemsEnum.Pipeline_Pump_Mk_2,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Logistic,
  },

  // Transportation buildings
  [GameClassNamesEnum.Build_TruckStation_C]: {
    name: GameItemsEnum.Truck_Station,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Transportation,
  },
  [GameClassNamesEnum.Build_DroneStation_C]: {
    name: GameItemsEnum.Drone_Port,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Transportation,
  },
  [GameClassNamesEnum.Build_TrainStation_C]: {
    name: GameItemsEnum.Train_Station,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Transportation,
  },
  [GameClassNamesEnum.Build_TrainDockingStation_C]: {
    name: GameItemsEnum.Freight_Platform,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Transportation,
  },
  [GameClassNamesEnum.Build_TrainDockingStationLiquid_C]: {
    name: GameItemsEnum.Fluid_Freight_Platform,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Transportation,
  },
  [GameClassNamesEnum.Build_PipeHyperStart_C]: {
    name: GameItemsEnum.Hypertube_Entrance,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Transportation,
  },
  [GameClassNamesEnum.Build_JumpPadAdjustable_C]: {
    name: GameItemsEnum.Jump_Pad,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Transportation,
  },
  [GameClassNamesEnum.Build_LandingPad_C]: {
    name: GameItemsEnum.U_Jelly_Landing_Pad,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Transportation,
  },
  [GameClassNamesEnum.Build_Portal_C]: {
    name: GameItemsEnum.Main_Portal,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Transportation,
  },
  [GameClassNamesEnum.Build_PortalSatellite_C]: {
    name: GameItemsEnum.Satellite_Portal,
    category: GameItemsCategoryEnum.Building,
    buildingType: GameBuildingsTypeEnum.Transportation,
  },

  // Vehicles
  [GameClassNamesEnum.BP_Tractor_C]: {
    name: GameItemsEnum.Tractor,
    category: GameItemsCategoryEnum.Vehicle,
  },
  [GameClassNamesEnum.BP_Truck_C]: {
    name: GameItemsEnum.Truck,
    category: GameItemsCategoryEnum.Vehicle,
  },
  [GameClassNamesEnum.Testa_BP_WB_C]: {
    name: GameItemsEnum.Cyber_Wagon,
    category: GameItemsCategoryEnum.Vehicle,
  },
  [GameClassNamesEnum.BP_Explorer_C]: {
    name: GameItemsEnum.Explorer,
    category: GameItemsCategoryEnum.Vehicle,
  },
  [GameClassNamesEnum.BP_Golfcart_C]: {
    name: GameItemsEnum.FICSIT_Factory_Cart,
    category: GameItemsCategoryEnum.Vehicle,
  },
  [GameClassNamesEnum.BP_GolfCartGold_C]: {
    name: GameItemsEnum.Golden_Factory_Cart,
    category: GameItemsCategoryEnum.Vehicle,
  },
  [GameClassNamesEnum.Desc_DroneTransport_C]: {
    name: GameItemsEnum.Drone,
    category: GameItemsCategoryEnum.Vehicle,
  },
  [GameClassNamesEnum.Desc_Locomotive_C]: {
    name: GameItemsEnum.Electric_Locomotive,
    category: GameItemsCategoryEnum.Vehicle,
  },
  [GameClassNamesEnum.Desc_FreightWagon_C]: {
    name: GameItemsEnum.Freight_Car,
    category: GameItemsCategoryEnum.Vehicle,
  },

  // All others
  [GameClassNamesEnum.Desc_GeneratorBiomass_C]: {
    name: GameItemsEnum.Desc_GeneratorBiomass_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_UraniumPellet_C]: {
    name: GameItemsEnum.Desc_UraniumPellet_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Crystal_C]: {
    name: GameItemsEnum.Desc_Crystal_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_NaturalGas_C]: {
    name: GameItemsEnum.Desc_NaturalGas_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_AmmoProjectileMultiShot_C]: {
    name: GameItemsEnum.Desc_AmmoProjectileMultiShot_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorBeacon_C]: {
    name: GameItemsEnum.BP_EquipmentDescriptorBeacon_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorBuildGun_C]: {
    name: GameItemsEnum.BP_EquipmentDescriptorBuildGun_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorCandyCane_C]: {
    name: GameItemsEnum.BP_EquipmentDescriptorCandyCane_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorHookShot_C]: {
    name: GameItemsEnum.BP_EquipmentDescriptorHookShot_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorMachinegun_C]: {
    name: GameItemsEnum.BP_EquipmentDescriptorMachinegun_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorResourceMiner_C]: {
    name: GameItemsEnum.BP_EquipmentDescriptorResourceMiner_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorRifleMk2_C]: {
    name: GameItemsEnum.BP_EquipmentDescriptorRifleMk2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.BP_EquipmentDescriptorSnowballMittens_C]: {
    name: GameItemsEnum.BP_EquipmentDescriptorSnowballMittens_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.BP_HealthGainDescriptor_C]: {
    name: GameItemsEnum.BP_HealthGainDescriptor_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_AnyUndefined_C]: {
    name: GameItemsEnum.Desc_AnyUndefined_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_BatteryCharged_C]: {
    name: GameItemsEnum.Desc_BatteryCharged_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Beam_C]: {
    name: GameItemsEnum.Desc_Beam_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Beam_Connector_C]: {
    name: GameItemsEnum.Desc_Beam_Connector_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Beam_Connector_Double_C]: {
    name: GameItemsEnum.Desc_Beam_Connector_Double_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Beam_Painted_C]: {
    name: GameItemsEnum.Desc_Beam_Painted_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Beam_Support_C]: {
    name: GameItemsEnum.Desc_Beam_Support_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_BerryBush_C]: {
    name: GameItemsEnum.Desc_BerryBush_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Blueprint_C]: {
    name: GameItemsEnum.Desc_Blueprint_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Camera_C]: {
    name: GameItemsEnum.Desc_Camera_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CandyCaneDecor_C]: {
    name: GameItemsEnum.Desc_CandyCaneDecor_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CandyCane_C]: {
    name: GameItemsEnum.Desc_CandyCane_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CartridgePlasma_C]: {
    name: GameItemsEnum.Desc_CartridgePlasma_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CartridgeSmart_C]: {
    name: GameItemsEnum.Desc_CartridgeSmart_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CatwalkCross_C]: {
    name: GameItemsEnum.Desc_CatwalkCross_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CatwalkRamp_C]: {
    name: GameItemsEnum.Desc_CatwalkRamp_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CatwalkStairs_C]: {
    name: GameItemsEnum.Desc_CatwalkStairs_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CatwalkStraight_C]: {
    name: GameItemsEnum.Desc_CatwalkStraight_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CatwalkTurn_C]: {
    name: GameItemsEnum.Desc_CatwalkTurn_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CatwalkT_C]: {
    name: GameItemsEnum.Desc_CatwalkT_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CeilingLight_C]: {
    name: GameItemsEnum.Desc_CeilingLight_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CharacterClap_Statue_C]: {
    name: GameItemsEnum.Desc_CharacterClap_Statue_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CharacterRunStatue_C]: {
    name: GameItemsEnum.Desc_CharacterRunStatue_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_CharacterSpin_Statue_C]: {
    name: GameItemsEnum.Desc_CharacterSpin_Statue_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ColorCartridge_C]: {
    name: GameItemsEnum.Desc_ColorCartridge_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ComputerQuantum_C]: {
    name: GameItemsEnum.Desc_ComputerQuantum_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Concrete_Barrier_01_C]: {
    name: GameItemsEnum.Desc_Concrete_Barrier_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorAttachmentMerger_C]: {
    name: GameItemsEnum.Desc_ConveyorAttachmentMerger_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorAttachmentSplitterProgrammable_C]: {
    name: GameItemsEnum.Desc_ConveyorAttachmentSplitterProgrammable_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorAttachmentSplitterSmart_C]: {
    name: GameItemsEnum.Desc_ConveyorAttachmentSplitterSmart_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorAttachmentSplitter_C]: {
    name: GameItemsEnum.Desc_ConveyorAttachmentSplitter_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorBeltMk1_C]: {
    name: GameItemsEnum.Desc_ConveyorBeltMk1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorBeltMk2_C]: {
    name: GameItemsEnum.Desc_ConveyorBeltMk2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorBeltMk3_C]: {
    name: GameItemsEnum.Desc_ConveyorBeltMk3_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorBeltMk4_C]: {
    name: GameItemsEnum.Desc_ConveyorBeltMk4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorBeltMk5_C]: {
    name: GameItemsEnum.Desc_ConveyorBeltMk5_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorCeilingAttachment_C]: {
    name: GameItemsEnum.Desc_ConveyorCeilingAttachment_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorLiftHandle_C]: {
    name: GameItemsEnum.Desc_ConveyorLiftHandle_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorLiftMk1_C]: {
    name: GameItemsEnum.Desc_ConveyorLiftMk1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorLiftMk2_C]: {
    name: GameItemsEnum.Desc_ConveyorLiftMk2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorLiftMk3_C]: {
    name: GameItemsEnum.Desc_ConveyorLiftMk3_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorLiftMk4_C]: {
    name: GameItemsEnum.Desc_ConveyorLiftMk4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorLiftMk5_C]: {
    name: GameItemsEnum.Desc_ConveyorLiftMk5_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorPoleStackable_C]: {
    name: GameItemsEnum.Desc_ConveyorPoleStackable_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorPoleWall_C]: {
    name: GameItemsEnum.Desc_ConveyorPoleWall_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ConveyorPole_C]: {
    name: GameItemsEnum.Desc_ConveyorPole_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Crystal_mk2_C]: {
    name: GameItemsEnum.Desc_Crystal_mk2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Crystal_mk3_C]: {
    name: GameItemsEnum.Desc_Crystal_mk3_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DoggoStatue_C]: {
    name: GameItemsEnum.Desc_DoggoStatue_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipeInCorner_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipeInCorner_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipeInCorner_ConcretePolished_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipeInCorner_ConcretePolished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipeInCorner_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipeInCorner_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipeInCorner_Grip_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipeInCorner_Grip_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipeOutCorner_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipeOutCorner_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipeOutCorner_ConcretePolished_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipeOutCorner_ConcretePolished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipeOutCorner_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipeOutCorner_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipeOutCorner_Grip_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipeOutCorner_Grip_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipe_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipe_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipe_ConcretePolished_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipe_ConcretePolished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipe_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipe_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DownQuarterPipe_Grip_8x4_C]: {
    name: GameItemsEnum.Desc_DownQuarterPipe_Grip_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_DowsingStick_C]: {
    name: GameItemsEnum.Desc_DowsingStick_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Fence_01_C]: {
    name: GameItemsEnum.Desc_Fence_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Fireworks_Projectile_01_C]: {
    name: GameItemsEnum.Desc_Fireworks_Projectile_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Fireworks_Projectile_02_C]: {
    name: GameItemsEnum.Desc_Fireworks_Projectile_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Fireworks_Projectile_03_C]: {
    name: GameItemsEnum.Desc_Fireworks_Projectile_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Flat_Frame_01_C]: {
    name: GameItemsEnum.Desc_Flat_Frame_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_FloodlightPole_C]: {
    name: GameItemsEnum.Desc_FloodlightPole_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_FloodlightWall_C]: {
    name: GameItemsEnum.Desc_FloodlightWall_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_FlowerPetals_C]: {
    name: GameItemsEnum.Desc_FlowerPetals_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_FoundationGlass_01_C]: {
    name: GameItemsEnum.Desc_FoundationGlass_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_FoundationPassthrough_Hypertube_C]: {
    name: GameItemsEnum.Desc_FoundationPassthrough_Hypertube_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_FoundationPassthrough_Lift_C]: {
    name: GameItemsEnum.Desc_FoundationPassthrough_Lift_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_FoundationPassthrough_Pipe_C]: {
    name: GameItemsEnum.Desc_FoundationPassthrough_Pipe_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_8x1_01_C]: {
    name: GameItemsEnum.Desc_Foundation_8x1_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_8x2_01_C]: {
    name: GameItemsEnum.Desc_Foundation_8x2_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_8x4_01_C]: {
    name: GameItemsEnum.Desc_Foundation_8x4_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_Asphalt_8x1_C]: {
    name: GameItemsEnum.Desc_Foundation_Asphalt_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_Asphalt_8x2_C]: {
    name: GameItemsEnum.Desc_Foundation_Asphalt_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_Foundation_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_ConcretePolished_8x1_C]: {
    name: GameItemsEnum.Desc_Foundation_ConcretePolished_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_Concrete_8x1_C]: {
    name: GameItemsEnum.Desc_Foundation_Concrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_Concrete_8x2_C]: {
    name: GameItemsEnum.Desc_Foundation_Concrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_Foundation_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_Frame_01_C]: {
    name: GameItemsEnum.Desc_Foundation_Frame_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_Metal_8x1_C]: {
    name: GameItemsEnum.Desc_Foundation_Metal_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_Metal_8x2_C]: {
    name: GameItemsEnum.Desc_Foundation_Metal_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Foundation_Metal_8x4_C]: {
    name: GameItemsEnum.Desc_Foundation_Metal_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Gate_Automated_8x4_C]: {
    name: GameItemsEnum.Desc_Gate_Automated_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Geyser_C]: {
    name: GameItemsEnum.Desc_Geyser_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Gift_C]: {
    name: GameItemsEnum.Desc_Gift_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_GoldenNut_Statue_C]: {
    name: GameItemsEnum.Desc_GoldenNut_Statue_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HatcherBasic_C]: {
    name: GameItemsEnum.Desc_HatcherBasic_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HogAlpha_C]: {
    name: GameItemsEnum.Desc_HogAlpha_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HogBasic_C]: {
    name: GameItemsEnum.Desc_HogBasic_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HogCliff_C]: {
    name: GameItemsEnum.Desc_HogCliff_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HogNuclear_C]: {
    name: GameItemsEnum.Desc_HogNuclear_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HogRockThrowProjectile_C]: {
    name: GameItemsEnum.Desc_HogRockThrowProjectile_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Hog_Statue_C]: {
    name: GameItemsEnum.Desc_Hog_Statue_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HostileCreature_C]: {
    name: GameItemsEnum.Desc_HostileCreature_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HUBParts_C]: {
    name: GameItemsEnum.Desc_HUBParts_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HubTerminal_C]: {
    name: GameItemsEnum.Desc_HubTerminal_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HydrogenGas_C]: {
    name: GameItemsEnum.Desc_HydrogenGas_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HyperPoleStackable_C]: {
    name: GameItemsEnum.Desc_HyperPoleStackable_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HyperTubeWallHole_C]: {
    name: GameItemsEnum.Desc_HyperTubeWallHole_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_HyperTubeWallSupport_C]: {
    name: GameItemsEnum.Desc_HyperTubeWallSupport_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_IndustrialTank_C]: {
    name: GameItemsEnum.Desc_IndustrialTank_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Asphalt_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Asphalt_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Asphalt_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Asphalt_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Concrete_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Concrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Concrete_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Concrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Asphalt_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Asphalt_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Asphalt_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Asphalt_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Concrete_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Concrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Concrete_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Concrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Metal_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Metal_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Metal_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Metal_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Metal_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Metal_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Polished_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Polished_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Polished_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Polished_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_DCorner_Polished_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_DCorner_Polished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Metal_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Metal_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Metal_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Metal_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Metal_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Metal_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Polished_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Polished_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Polished_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Polished_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_Polished_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_Polished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Asphalt_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Asphalt_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Asphalt_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Asphalt_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Concrete_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Concrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Concrete_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Concrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Metal_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Metal_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Metal_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Metal_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Metal_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Metal_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Polished_8x1_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Polished_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Polished_8x2_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Polished_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_InvertedRamp_UCorner_Polished_8x4_C]: {
    name: GameItemsEnum.Desc_InvertedRamp_UCorner_Polished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_JumpPadTilted_C]: {
    name: GameItemsEnum.Desc_JumpPadTilted_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_JumpPad_C]: {
    name: GameItemsEnum.Desc_JumpPad_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ladder_C]: {
    name: GameItemsEnum.Desc_Ladder_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_LightsControlPanel_C]: {
    name: GameItemsEnum.Desc_LightsControlPanel_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_LookoutTower_C]: {
    name: GameItemsEnum.Desc_LookoutTower_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_None_C]: {
    name: GameItemsEnum.Desc_None_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_NonflyingBird_C]: {
    name: GameItemsEnum.Desc_NonflyingBird_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_NutBush_C]: {
    name: GameItemsEnum.Desc_NutBush_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Overflow_C]: {
    name: GameItemsEnum.Desc_Overflow_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Pigment_C]: {
    name: GameItemsEnum.Desc_Pigment_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PillarBase_C]: {
    name: GameItemsEnum.Desc_PillarBase_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PillarBase_Small_C]: {
    name: GameItemsEnum.Desc_PillarBase_Small_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PillarMiddle_C]: {
    name: GameItemsEnum.Desc_PillarMiddle_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PillarMiddle_Concrete_C]: {
    name: GameItemsEnum.Desc_PillarMiddle_Concrete_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PillarMiddle_Frame_C]: {
    name: GameItemsEnum.Desc_PillarMiddle_Frame_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PillarTop_C]: {
    name: GameItemsEnum.Desc_PillarTop_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Pillar_Small_Concrete_C]: {
    name: GameItemsEnum.Desc_Pillar_Small_Concrete_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Pillar_Small_Frame_C]: {
    name: GameItemsEnum.Desc_Pillar_Small_Frame_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Pillar_Small_Metal_C]: {
    name: GameItemsEnum.Desc_Pillar_Small_Metal_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PipeHyperSupport_C]: {
    name: GameItemsEnum.Desc_PipeHyperSupport_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PipeHyper_C]: {
    name: GameItemsEnum.Desc_PipeHyper_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PipelineJunction_Cross_C]: {
    name: GameItemsEnum.Desc_PipelineJunction_Cross_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PipelineMK2_C]: {
    name: GameItemsEnum.Desc_PipelineMK2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PipelineMK2_NoIndicator_C]: {
    name: GameItemsEnum.Desc_PipelineMK2_NoIndicator_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PipelineSupportWallHole_C]: {
    name: GameItemsEnum.Desc_PipelineSupportWallHole_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PipelineSupportWall_C]: {
    name: GameItemsEnum.Desc_PipelineSupportWall_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PipelineSupport_C]: {
    name: GameItemsEnum.Desc_PipelineSupport_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Pipeline_C]: {
    name: GameItemsEnum.Desc_Pipeline_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Pipeline_NoIndicator_C]: {
    name: GameItemsEnum.Desc_Pipeline_NoIndicator_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PipeStorageTank_C]: {
    name: GameItemsEnum.Desc_PipeStorageTank_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PipeSupportStackable_C]: {
    name: GameItemsEnum.Desc_PipeSupportStackable_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerLine_C]: {
    name: GameItemsEnum.Desc_PowerLine_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerPoleMk1_C]: {
    name: GameItemsEnum.Desc_PowerPoleMk1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerPoleMk2_C]: {
    name: GameItemsEnum.Desc_PowerPoleMk2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerPoleMk3_C]: {
    name: GameItemsEnum.Desc_PowerPoleMk3_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerPoleWallDoubleMk2_C]: {
    name: GameItemsEnum.Desc_PowerPoleWallDoubleMk2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerPoleWallDoubleMk3_C]: {
    name: GameItemsEnum.Desc_PowerPoleWallDoubleMk3_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerPoleWallDouble_C]: {
    name: GameItemsEnum.Desc_PowerPoleWallDouble_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerPoleWallMk2_C]: {
    name: GameItemsEnum.Desc_PowerPoleWallMk2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerPoleWallMk3_C]: {
    name: GameItemsEnum.Desc_PowerPoleWallMk3_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerPoleWall_C]: {
    name: GameItemsEnum.Desc_PowerPoleWall_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerSwitch_C]: {
    name: GameItemsEnum.Desc_PowerSwitch_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerTowerPlatform_C]: {
    name: GameItemsEnum.Desc_PowerTowerPlatform_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PowerTower_C]: {
    name: GameItemsEnum.Desc_PowerTower_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PriorityPowerSwitch_C]: {
    name: GameItemsEnum.Desc_PriorityPowerSwitch_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_PropaneGas_C]: {
    name: GameItemsEnum.Desc_PropaneGas_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuantumCrystal_C]: {
    name: GameItemsEnum.Desc_QuantumCrystal_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeCorner_01_C]: {
    name: GameItemsEnum.Desc_QuarterPipeCorner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeCorner_02_C]: {
    name: GameItemsEnum.Desc_QuarterPipeCorner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeCorner_03_C]: {
    name: GameItemsEnum.Desc_QuarterPipeCorner_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeCorner_04_C]: {
    name: GameItemsEnum.Desc_QuarterPipeCorner_04_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeInCorner_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeInCorner_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeInCorner_ConcretePolished_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeInCorner_ConcretePolished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeInCorner_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeInCorner_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeInCorner_Grip_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeInCorner_Grip_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Asphalt_8x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Asphalt_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Asphalt_8x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Asphalt_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Concrete_8x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Concrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Concrete_8x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Concrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Ficsit_8x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Ficsit_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Ficsit_8x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Ficsit_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Ficsit_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Ficsit_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Grip_8x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Grip_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Grip_8x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Grip_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_Grip_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_Grip_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleInCorner_PolishedConcrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Asphalt_4x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Asphalt_4x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Asphalt_4x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Asphalt_4x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Asphalt_4x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Asphalt_4x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Concrete_4x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Concrete_4x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Concrete_4x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Concrete_4x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Concrete_4x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Concrete_4x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Ficsit_4x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Ficsit_4x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Ficsit_4x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Ficsit_4x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Ficsit_4x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Ficsit_4x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Grip_4x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Grip_4x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Grip_4x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Grip_4x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_Grip_4x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_Grip_4x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddleOutCorner_PolishedConcrete_4x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Asphalt_8x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Asphalt_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Asphalt_8x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Asphalt_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Concrete_8x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Concrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Concrete_8x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Concrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Ficsit_4x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Ficsit_4x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Ficsit_4x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Ficsit_4x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Ficsit_4x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Ficsit_4x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Grip_8x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Grip_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Grip_8x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Grip_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_Grip_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_Grip_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_PolishedConcrete_8x1_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_PolishedConcrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_PolishedConcrete_8x2_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_PolishedConcrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeMiddle_PolishedConcrete_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeMiddle_PolishedConcrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeOutCorner_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeOutCorner_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeOutCorner_ConcretePolished_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeOutCorner_ConcretePolished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeOutCorner_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeOutCorner_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipeOutCorner_Grip_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipeOutCorner_Grip_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipe_02_C]: {
    name: GameItemsEnum.Desc_QuarterPipe_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipe_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipe_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipe_C]: {
    name: GameItemsEnum.Desc_QuarterPipe_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipe_ConcretePolished_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipe_ConcretePolished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipe_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipe_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_QuarterPipe_Grip_8x4_C]: {
    name: GameItemsEnum.Desc_QuarterPipe_Grip_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RadarTower_C]: {
    name: GameItemsEnum.Desc_RadarTower_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Railing_01_C]: {
    name: GameItemsEnum.Desc_Railing_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RailroadBlockSignal_C]: {
    name: GameItemsEnum.Desc_RailroadBlockSignal_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RailroadPathSignal_C]: {
    name: GameItemsEnum.Desc_RailroadPathSignal_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RailroadSwitchControl_C]: {
    name: GameItemsEnum.Desc_RailroadSwitchControl_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RailroadTrackIntegrated_C]: {
    name: GameItemsEnum.Desc_RailroadTrackIntegrated_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RailroadTrack_C]: {
    name: GameItemsEnum.Desc_RailroadTrack_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_8x1_C]: {
    name: GameItemsEnum.Desc_RampDouble_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Asphalt_8x1_C]: {
    name: GameItemsEnum.Desc_RampDouble_Asphalt_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Asphalt_8x2_C]: {
    name: GameItemsEnum.Desc_RampDouble_Asphalt_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_RampDouble_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_C]: {
    name: GameItemsEnum.Desc_RampDouble_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Concrete_8x1_C]: {
    name: GameItemsEnum.Desc_RampDouble_Concrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Concrete_8x2_C]: {
    name: GameItemsEnum.Desc_RampDouble_Concrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_RampDouble_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Metal_8x1_C]: {
    name: GameItemsEnum.Desc_RampDouble_Metal_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Metal_8x2_C]: {
    name: GameItemsEnum.Desc_RampDouble_Metal_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Metal_8x4_C]: {
    name: GameItemsEnum.Desc_RampDouble_Metal_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Polished_8x1_C]: {
    name: GameItemsEnum.Desc_RampDouble_Polished_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Polished_8x2_C]: {
    name: GameItemsEnum.Desc_RampDouble_Polished_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampDouble_Polished_8x4_C]: {
    name: GameItemsEnum.Desc_RampDouble_Polished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampInverted_8x1_C]: {
    name: GameItemsEnum.Desc_RampInverted_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampInverted_8x1_Corner_01_C]: {
    name: GameItemsEnum.Desc_RampInverted_8x1_Corner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampInverted_8x1_Corner_02_C]: {
    name: GameItemsEnum.Desc_RampInverted_8x1_Corner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampInverted_8x2_01_C]: {
    name: GameItemsEnum.Desc_RampInverted_8x2_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampInverted_8x2_Corner_01_C]: {
    name: GameItemsEnum.Desc_RampInverted_8x2_Corner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampInverted_8x2_Corner_02_C]: {
    name: GameItemsEnum.Desc_RampInverted_8x2_Corner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampInverted_8x4_Corner_01_C]: {
    name: GameItemsEnum.Desc_RampInverted_8x4_Corner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RampInverted_8x4_Corner_02_C]: {
    name: GameItemsEnum.Desc_RampInverted_8x4_Corner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_8x1_01_C]: {
    name: GameItemsEnum.Desc_Ramp_8x1_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_8x2_01_C]: {
    name: GameItemsEnum.Desc_Ramp_8x2_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_8x4_01_C]: {
    name: GameItemsEnum.Desc_Ramp_8x4_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_8x4_Inverted_01_C]: {
    name: GameItemsEnum.Desc_Ramp_8x4_Inverted_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_8x8x8_C]: {
    name: GameItemsEnum.Desc_Ramp_8x8x8_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Asphalt_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_Asphalt_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Asphalt_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_Asphalt_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Concrete_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_Concrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Concrete_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_Concrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Diagonal_8x1_01_C]: {
    name: GameItemsEnum.Desc_Ramp_Diagonal_8x1_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Diagonal_8x1_02_C]: {
    name: GameItemsEnum.Desc_Ramp_Diagonal_8x1_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Diagonal_8x2_01_C]: {
    name: GameItemsEnum.Desc_Ramp_Diagonal_8x2_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Diagonal_8x2_02_C]: {
    name: GameItemsEnum.Desc_Ramp_Diagonal_8x2_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Diagonal_8x4_01_C]: {
    name: GameItemsEnum.Desc_Ramp_Diagonal_8x4_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Diagonal_8x4_02_C]: {
    name: GameItemsEnum.Desc_Ramp_Diagonal_8x4_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Asphalt_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Asphalt_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Asphalt_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Asphalt_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Concrete_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Concrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Concrete_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Concrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Metal_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Metal_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Metal_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Metal_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Metal_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Metal_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Polished_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Polished_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Polished_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Polished_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_DownCorner_Polished_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_DownCorner_Polished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Frame_01_C]: {
    name: GameItemsEnum.Desc_Ramp_Frame_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Frame_Inverted_01_C]: {
    name: GameItemsEnum.Desc_Ramp_Frame_Inverted_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Metal_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_Metal_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Metal_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_Metal_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Metal_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_Metal_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Polished_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_Polished_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Polished_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_Polished_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_Polished_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_Polished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Asphalt_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Asphalt_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Asphalt_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Asphalt_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Asphalt_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Asphalt_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Concrete_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Concrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Concrete_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Concrete_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Metal_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Metal_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Metal_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Metal_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Metal_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Metal_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Polished_8x1_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Polished_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Polished_8x2_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Polished_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Ramp_UpCorner_Polished_8x4_C]: {
    name: GameItemsEnum.Desc_Ramp_UpCorner_Polished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_RebarGun_C]: {
    name: GameItemsEnum.Desc_RebarGun_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Rebar_Aluminum_C]: {
    name: GameItemsEnum.Desc_Rebar_Aluminum_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Rebar_ChemicalShot_C]: {
    name: GameItemsEnum.Desc_Rebar_ChemicalShot_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Rebar_Hookshot_C]: {
    name: GameItemsEnum.Desc_Rebar_Hookshot_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Rebar_Rocket_C]: {
    name: GameItemsEnum.Desc_Rebar_Rocket_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Rebar_Steel_C]: {
    name: GameItemsEnum.Desc_Rebar_Steel_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_A_01_C]: {
    name: GameItemsEnum.Desc_Roof_A_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_A_02_C]: {
    name: GameItemsEnum.Desc_Roof_A_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_A_03_C]: {
    name: GameItemsEnum.Desc_Roof_A_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_A_04_C]: {
    name: GameItemsEnum.Desc_Roof_A_04_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Metal_InCorner_01_C]: {
    name: GameItemsEnum.Desc_Roof_Metal_InCorner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Metal_InCorner_02_C]: {
    name: GameItemsEnum.Desc_Roof_Metal_InCorner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Metal_InCorner_03_C]: {
    name: GameItemsEnum.Desc_Roof_Metal_InCorner_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Metal_OutCorner_01_C]: {
    name: GameItemsEnum.Desc_Roof_Metal_OutCorner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Metal_OutCorner_02_C]: {
    name: GameItemsEnum.Desc_Roof_Metal_OutCorner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Metal_OutCorner_03_C]: {
    name: GameItemsEnum.Desc_Roof_Metal_OutCorner_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Orange_01_C]: {
    name: GameItemsEnum.Desc_Roof_Orange_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Orange_02_C]: {
    name: GameItemsEnum.Desc_Roof_Orange_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Orange_03_C]: {
    name: GameItemsEnum.Desc_Roof_Orange_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Orange_04_C]: {
    name: GameItemsEnum.Desc_Roof_Orange_04_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Orange_InCorner_01_C]: {
    name: GameItemsEnum.Desc_Roof_Orange_InCorner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Orange_InCorner_02_C]: {
    name: GameItemsEnum.Desc_Roof_Orange_InCorner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Orange_InCorner_03_C]: {
    name: GameItemsEnum.Desc_Roof_Orange_InCorner_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Orange_OutCorner_01_C]: {
    name: GameItemsEnum.Desc_Roof_Orange_OutCorner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Orange_OutCorner_02_C]: {
    name: GameItemsEnum.Desc_Roof_Orange_OutCorner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Orange_OutCorner_03_C]: {
    name: GameItemsEnum.Desc_Roof_Orange_OutCorner_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Tar_01_C]: {
    name: GameItemsEnum.Desc_Roof_Tar_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Tar_02_C]: {
    name: GameItemsEnum.Desc_Roof_Tar_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Tar_03_C]: {
    name: GameItemsEnum.Desc_Roof_Tar_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Tar_04_C]: {
    name: GameItemsEnum.Desc_Roof_Tar_04_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Tar_InCorner_01_C]: {
    name: GameItemsEnum.Desc_Roof_Tar_InCorner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Tar_InCorner_02_C]: {
    name: GameItemsEnum.Desc_Roof_Tar_InCorner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Tar_InCorner_03_C]: {
    name: GameItemsEnum.Desc_Roof_Tar_InCorner_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Tar_OutCorner_01_C]: {
    name: GameItemsEnum.Desc_Roof_Tar_OutCorner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Tar_OutCorner_02_C]: {
    name: GameItemsEnum.Desc_Roof_Tar_OutCorner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Tar_OutCorner_03_C]: {
    name: GameItemsEnum.Desc_Roof_Tar_OutCorner_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Window_01_C]: {
    name: GameItemsEnum.Desc_Roof_Window_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Window_02_C]: {
    name: GameItemsEnum.Desc_Roof_Window_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Window_03_C]: {
    name: GameItemsEnum.Desc_Roof_Window_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Window_04_C]: {
    name: GameItemsEnum.Desc_Roof_Window_04_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Window_InCorner_01_C]: {
    name: GameItemsEnum.Desc_Roof_Window_InCorner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Window_InCorner_02_C]: {
    name: GameItemsEnum.Desc_Roof_Window_InCorner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Window_InCorner_03_C]: {
    name: GameItemsEnum.Desc_Roof_Window_InCorner_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Window_OutCorner_01_C]: {
    name: GameItemsEnum.Desc_Roof_Window_OutCorner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Window_OutCorner_02_C]: {
    name: GameItemsEnum.Desc_Roof_Window_OutCorner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Roof_Window_OutCorner_03_C]: {
    name: GameItemsEnum.Desc_Roof_Window_OutCorner_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ServerRack_C]: {
    name: GameItemsEnum.Desc_ServerRack_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SignPole_Huge_C]: {
    name: GameItemsEnum.Desc_SignPole_Huge_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SignPole_Large_C]: {
    name: GameItemsEnum.Desc_SignPole_Large_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SignPole_Medium_C]: {
    name: GameItemsEnum.Desc_SignPole_Medium_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SignPole_Portrait_C]: {
    name: GameItemsEnum.Desc_SignPole_Portrait_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SignPole_Small_C]: {
    name: GameItemsEnum.Desc_SignPole_Small_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SingleRapidFireProjectile_SmallAquatic_C]: {
    name: GameItemsEnum.Desc_SingleRapidFireProjectile_SmallAquatic_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SnowballProjectile_C]: {
    name: GameItemsEnum.Desc_SnowballProjectile_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SnowDispenser_C]: {
    name: GameItemsEnum.Desc_SnowDispenser_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Snowman_C]: {
    name: GameItemsEnum.Desc_Snowman_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Snow_C]: {
    name: GameItemsEnum.Desc_Snow_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpaceElevatorBlocker_C]: {
    name: GameItemsEnum.Desc_SpaceElevatorBlocker_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpaceGiraffeStatue_C]: {
    name: GameItemsEnum.Desc_SpaceGiraffeStatue_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpaceGiraffe_C]: {
    name: GameItemsEnum.Desc_SpaceGiraffe_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpaceRabbit_C]: {
    name: GameItemsEnum.Desc_SpaceRabbit_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterAquatic_Alpha_C]: {
    name: GameItemsEnum.Desc_SpitterAquatic_Alpha_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterAquatic_Small_C]: {
    name: GameItemsEnum.Desc_SpitterAquatic_Small_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterBombShot_C]: {
    name: GameItemsEnum.Desc_SpitterBombShot_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterDesert_Alpha_C]: {
    name: GameItemsEnum.Desc_SpitterDesert_Alpha_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterDesert_Small_C]: {
    name: GameItemsEnum.Desc_SpitterDesert_Small_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterForest_Alpha_C]: {
    name: GameItemsEnum.Desc_SpitterForest_Alpha_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterForest_Red_Alpha_C]: {
    name: GameItemsEnum.Desc_SpitterForest_Red_Alpha_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterForest_Small_C]: {
    name: GameItemsEnum.Desc_SpitterForest_Small_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterForest_Small_Red_C]: {
    name: GameItemsEnum.Desc_SpitterForest_Small_Red_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterSingleProjectile_C]: {
    name: GameItemsEnum.Desc_SpitterSingleProjectile_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterSnipeShot_C]: {
    name: GameItemsEnum.Desc_SpitterSnipeShot_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterSpreadShotSecondary_C]: {
    name: GameItemsEnum.Desc_SpitterSpreadShotSecondary_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterSpreadShot_C]: {
    name: GameItemsEnum.Desc_SpitterSpreadShot_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SpitterWave_C]: {
    name: GameItemsEnum.Desc_SpitterWave_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Stairs_Left_01_C]: {
    name: GameItemsEnum.Desc_Stairs_Left_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Stairs_Right_01_C]: {
    name: GameItemsEnum.Desc_Stairs_Right_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StandaloneWidgetSign_Huge_C]: {
    name: GameItemsEnum.Desc_StandaloneWidgetSign_Huge_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StandaloneWidgetSign_Large_C]: {
    name: GameItemsEnum.Desc_StandaloneWidgetSign_Large_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StandaloneWidgetSign_Medium_C]: {
    name: GameItemsEnum.Desc_StandaloneWidgetSign_Medium_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StandaloneWidgetSign_Portrait_C]: {
    name: GameItemsEnum.Desc_StandaloneWidgetSign_Portrait_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StandaloneWidgetSign_SmallVeryWide_C]: {
    name: GameItemsEnum.Desc_StandaloneWidgetSign_SmallVeryWide_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StandaloneWidgetSign_SmallWide_C]: {
    name: GameItemsEnum.Desc_StandaloneWidgetSign_SmallWide_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StandaloneWidgetSign_Small_C]: {
    name: GameItemsEnum.Desc_StandaloneWidgetSign_Small_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StandaloneWidgetSign_Square_C]: {
    name: GameItemsEnum.Desc_StandaloneWidgetSign_Square_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StandaloneWidgetSign_Square_Small_C]: {
    name: GameItemsEnum.Desc_StandaloneWidgetSign_Square_Small_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StandaloneWidgetSign_Square_Tiny_C]: {
    name: GameItemsEnum.Desc_StandaloneWidgetSign_Square_Tiny_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_8x1_C]: {
    name: GameItemsEnum.Desc_SteelWall_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_8x4_C]: {
    name: GameItemsEnum.Desc_SteelWall_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_8x4_Gate_01_C]: {
    name: GameItemsEnum.Desc_SteelWall_8x4_Gate_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_8x4_Window_01_C]: {
    name: GameItemsEnum.Desc_SteelWall_8x4_Window_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_8x4_Window_02_C]: {
    name: GameItemsEnum.Desc_SteelWall_8x4_Window_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_8x4_Window_03_C]: {
    name: GameItemsEnum.Desc_SteelWall_8x4_Window_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_8x4_Window_04_C]: {
    name: GameItemsEnum.Desc_SteelWall_8x4_Window_04_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_FlipTris_8x1_C]: {
    name: GameItemsEnum.Desc_SteelWall_FlipTris_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_FlipTris_8x2_C]: {
    name: GameItemsEnum.Desc_SteelWall_FlipTris_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_FlipTris_8x4_C]: {
    name: GameItemsEnum.Desc_SteelWall_FlipTris_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_FlipTris_8x8_C]: {
    name: GameItemsEnum.Desc_SteelWall_FlipTris_8x8_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_Tris_8x1_C]: {
    name: GameItemsEnum.Desc_SteelWall_Tris_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_Tris_8x2_C]: {
    name: GameItemsEnum.Desc_SteelWall_Tris_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_Tris_8x4_C]: {
    name: GameItemsEnum.Desc_SteelWall_Tris_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_SteelWall_Tris_8x8_C]: {
    name: GameItemsEnum.Desc_SteelWall_Tris_8x8_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StingerAlpha_C]: {
    name: GameItemsEnum.Desc_StingerAlpha_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StingerElite_C]: {
    name: GameItemsEnum.Desc_StingerElite_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StingerSmall_C]: {
    name: GameItemsEnum.Desc_StingerSmall_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StorageBlueprint_C]: {
    name: GameItemsEnum.Desc_StorageBlueprint_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StorageContainerMk1_C]: {
    name: GameItemsEnum.Desc_StorageContainerMk1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StorageContainerMk2_C]: {
    name: GameItemsEnum.Desc_StorageContainerMk2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StorageHazard_C]: {
    name: GameItemsEnum.Desc_StorageHazard_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StorageIntegrated_C]: {
    name: GameItemsEnum.Desc_StorageIntegrated_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StorageMedkit_C]: {
    name: GameItemsEnum.Desc_StorageMedkit_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StoragePlayer_C]: {
    name: GameItemsEnum.Desc_StoragePlayer_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_StreetLight_C]: {
    name: GameItemsEnum.Desc_StreetLight_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_ToolBelt_C]: {
    name: GameItemsEnum.Desc_ToolBelt_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_TrainPlatformEmpty_02_C]: {
    name: GameItemsEnum.Desc_TrainPlatformEmpty_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_TrainPlatformEmpty_C]: {
    name: GameItemsEnum.Desc_TrainPlatformEmpty_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_TreeGiftProducer_C]: {
    name: GameItemsEnum.Desc_TreeGiftProducer_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Valve_C]: {
    name: GameItemsEnum.Desc_Valve_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Vines_C]: {
    name: GameItemsEnum.Desc_Vines_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_VolcanicGas_C]: {
    name: GameItemsEnum.Desc_VolcanicGas_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_WalkwayCross_C]: {
    name: GameItemsEnum.Desc_WalkwayCross_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_WalkwayRamp_C]: {
    name: GameItemsEnum.Desc_WalkwayRamp_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_WalkwayStraight_C]: {
    name: GameItemsEnum.Desc_WalkwayStraight_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_WalkwayTurn_C]: {
    name: GameItemsEnum.Desc_WalkwayTurn_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_WalkwayT_C]: {
    name: GameItemsEnum.Desc_WalkwayT_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_WallSet_Steel_Angular_8x4_C]: {
    name: GameItemsEnum.Desc_WallSet_Steel_Angular_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_WallSet_Steel_Angular_8x8_C]: {
    name: GameItemsEnum.Desc_WallSet_Steel_Angular_8x8_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_8x4_01_C]: {
    name: GameItemsEnum.Desc_Wall_8x4_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_8x4_02_C]: {
    name: GameItemsEnum.Desc_Wall_8x4_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x1_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x1_FlipTris_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x1_FlipTris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x1_Tris_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x1_Tris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x2_FlipTris_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x2_FlipTris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x2_Tris_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x2_Tris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_ConveyorHole_01_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_ConveyorHole_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_ConveyorHole_02_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_ConveyorHole_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_ConveyorHole_03_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_ConveyorHole_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_Corner_01_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_Corner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_Corner_2_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_Corner_2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_FlipTris_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_FlipTris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_Tris_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_Tris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_Window_01_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_Window_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_Window_02_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_Window_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_Window_03_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_Window_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x4_Window_04_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x4_Window_04_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x8_Corner_01_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x8_Corner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x8_Corner_2_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x8_Corner_2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x8_FlipTris_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x8_FlipTris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_8x8_Tris_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_8x8_Tris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_Angular_8x4_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_Angular_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_Angular_8x8_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_Angular_8x8_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_CDoor_8x4_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_CDoor_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_Gate_8x4_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_Gate_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Concrete_SDoor_8x4_C]: {
    name: GameItemsEnum.Desc_Wall_Concrete_SDoor_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Conveyor_8x4_01_C]: {
    name: GameItemsEnum.Desc_Wall_Conveyor_8x4_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Conveyor_8x4_01_Steel_C]: {
    name: GameItemsEnum.Desc_Wall_Conveyor_8x4_01_Steel_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Conveyor_8x4_02_C]: {
    name: GameItemsEnum.Desc_Wall_Conveyor_8x4_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Conveyor_8x4_02_Steel_C]: {
    name: GameItemsEnum.Desc_Wall_Conveyor_8x4_02_Steel_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Conveyor_8x4_03_C]: {
    name: GameItemsEnum.Desc_Wall_Conveyor_8x4_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Conveyor_8x4_03_Steel_C]: {
    name: GameItemsEnum.Desc_Wall_Conveyor_8x4_03_Steel_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Conveyor_8x4_04_C]: {
    name: GameItemsEnum.Desc_Wall_Conveyor_8x4_04_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Conveyor_8x4_04_Steel_C]: {
    name: GameItemsEnum.Desc_Wall_Conveyor_8x4_04_Steel_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Door_8x4_01_C]: {
    name: GameItemsEnum.Desc_Wall_Door_8x4_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Door_8x4_01_Steel_C]: {
    name: GameItemsEnum.Desc_Wall_Door_8x4_01_Steel_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Door_8x4_03_C]: {
    name: GameItemsEnum.Desc_Wall_Door_8x4_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Door_8x4_03_Steel_C]: {
    name: GameItemsEnum.Desc_Wall_Door_8x4_03_Steel_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Frame_01_C]: {
    name: GameItemsEnum.Desc_Wall_Frame_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Gate_8x4_01_C]: {
    name: GameItemsEnum.Desc_Wall_Gate_8x4_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x1_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x1_FlipTris_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x1_FlipTris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x1_Tris_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x1_Tris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x2_FlipTris_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x2_FlipTris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x2_Tris_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x2_Tris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x4_Corner_01_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x4_Corner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x4_Corner_02_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x4_Corner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x4_FlipTris_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x4_FlipTris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x4_Tris_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x4_Tris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x8_Corner_01_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x8_Corner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x8_Corner_02_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x8_Corner_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x8_FlipTris_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x8_FlipTris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_8x8_Tris_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_8x8_Tris_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_Angular_8x4_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_Angular_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Orange_Angular_8x8_C]: {
    name: GameItemsEnum.Desc_Wall_Orange_Angular_8x8_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Steel_8x4_Corner_01_C]: {
    name: GameItemsEnum.Desc_Wall_Steel_8x4_Corner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Steel_8x4_Corner_2_C]: {
    name: GameItemsEnum.Desc_Wall_Steel_8x4_Corner_2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Steel_8x8_Corner_01_C]: {
    name: GameItemsEnum.Desc_Wall_Steel_8x8_Corner_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Steel_8x8_Corner_2_C]: {
    name: GameItemsEnum.Desc_Wall_Steel_8x8_Corner_2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Window_8x4_01_C]: {
    name: GameItemsEnum.Desc_Wall_Window_8x4_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Window_8x4_02_C]: {
    name: GameItemsEnum.Desc_Wall_Window_8x4_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Window_8x4_03_C]: {
    name: GameItemsEnum.Desc_Wall_Window_8x4_03_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Window_8x4_03_Steel_C]: {
    name: GameItemsEnum.Desc_Wall_Window_8x4_03_Steel_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Window_8x4_04_C]: {
    name: GameItemsEnum.Desc_Wall_Window_8x4_04_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Window_Thin_8x4_01_C]: {
    name: GameItemsEnum.Desc_Wall_Window_Thin_8x4_01_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wall_Window_Thin_8x4_02_C]: {
    name: GameItemsEnum.Desc_Wall_Window_Thin_8x4_02_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Wildcard_C]: {
    name: GameItemsEnum.Desc_Wildcard_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_WorkBenchIntegrated_C]: {
    name: GameItemsEnum.Desc_WorkBenchIntegrated_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_WreathDecor_C]: {
    name: GameItemsEnum.Desc_WreathDecor_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_XmasBall1_C]: {
    name: GameItemsEnum.Desc_XmasBall1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_XmasBall2_C]: {
    name: GameItemsEnum.Desc_XmasBall2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_XmasBall3_C]: {
    name: GameItemsEnum.Desc_XmasBall3_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_XmasBall4_C]: {
    name: GameItemsEnum.Desc_XmasBall4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_XmasBallCluster_C]: {
    name: GameItemsEnum.Desc_XmasBallCluster_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_XmasBow_C]: {
    name: GameItemsEnum.Desc_XmasBow_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_XmasBranch_C]: {
    name: GameItemsEnum.Desc_XmasBranch_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_XmasLights_C]: {
    name: GameItemsEnum.Desc_XmasLights_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_xmassLights_C]: {
    name: GameItemsEnum.Desc_xmassLights_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_XmasStar_C]: {
    name: GameItemsEnum.Desc_XmasStar_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_XMassTree_C]: {
    name: GameItemsEnum.Desc_XMassTree_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_XmasWreath_C]: {
    name: GameItemsEnum.Desc_XmasWreath_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Desc_Zipline_C]: {
    name: GameItemsEnum.Desc_Zipline_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGAmmoType]: {
    name: GameItemsEnum.FGAmmoType,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGAmmoTypeHoming]: {
    name: GameItemsEnum.FGAmmoTypeHoming,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGAmmoTypeHomingBase]: {
    name: GameItemsEnum.FGAmmoTypeHomingBase,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGAmmoTypeInstantHit]: {
    name: GameItemsEnum.FGAmmoTypeInstantHit,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGAmmoTypeLaser]: {
    name: GameItemsEnum.FGAmmoTypeLaser,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGAmmoTypeProjectile]: {
    name: GameItemsEnum.FGAmmoTypeProjectile,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGAmmoTypeSpreadshot]: {
    name: GameItemsEnum.FGAmmoTypeSpreadshot,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGAnyUndefinedDescriptor]: {
    name: GameItemsEnum.FGAnyUndefinedDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGBlueprintDescriptor]: {
    name: GameItemsEnum.FGBlueprintDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGBuildDescriptor]: {
    name: GameItemsEnum.FGBuildDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGBuildingDescriptor]: {
    name: GameItemsEnum.FGBuildingDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGConsumableDescriptor]: {
    name: GameItemsEnum.FGConsumableDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGCreatureDescriptor]: {
    name: GameItemsEnum.FGCreatureDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGDecorationDescriptor]: {
    name: GameItemsEnum.FGDecorationDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGDecorDescriptor]: {
    name: GameItemsEnum.FGDecorDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGEquipmentDescriptor]: {
    name: GameItemsEnum.FGEquipmentDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGFactoryCustomizationDescriptor]: {
    name: GameItemsEnum.FGFactoryCustomizationDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGFactoryCustomizationDescriptor_Material]: {
    name: GameItemsEnum.FGFactoryCustomizationDescriptor_Material,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGFactoryCustomizationDescriptor_Pattern]: {
    name: GameItemsEnum.FGFactoryCustomizationDescriptor_Pattern,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGFactoryCustomizationDescriptor_Skin]: {
    name: GameItemsEnum.FGFactoryCustomizationDescriptor_Skin,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGFactoryCustomizationDescriptor_Swatch]: {
    name: GameItemsEnum.FGFactoryCustomizationDescriptor_Swatch,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGItemDescriptorBiomass]: {
    name: GameItemsEnum.FGItemDescriptorBiomass,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGItemDescriptorNuclearFuel]: {
    name: GameItemsEnum.FGItemDescriptorNuclearFuel,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGNoneDescriptor]: {
    name: GameItemsEnum.FGNoneDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGOverflowDescriptor]: {
    name: GameItemsEnum.FGOverflowDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGPoleDescriptor]: {
    name: GameItemsEnum.FGPoleDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGResourceDescriptor]: {
    name: GameItemsEnum.FGResourceDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGResourceDescriptorGeyser]: {
    name: GameItemsEnum.FGResourceDescriptorGeyser,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGResourceSinkCreditDescriptor]: {
    name: GameItemsEnum.FGResourceSinkCreditDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGVehicleDescriptor]: {
    name: GameItemsEnum.FGVehicleDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.FGWildCardDescriptor]: {
    name: GameItemsEnum.FGWildCardDescriptor,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.file]: {
    name: GameItemsEnum.file,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Foundation_ConcretePolished_8x2_C]: {
    name: GameItemsEnum.Foundation_ConcretePolished_8x2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.Foundation_ConcretePolished_8x4_C]: {
    name: GameItemsEnum.Foundation_ConcretePolished_8x4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_All_C]: {
    name: GameItemsEnum.MaterialDesc_All_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Foundation_Asphalt_C]: {
    name: GameItemsEnum.MaterialDesc_Foundation_Asphalt_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Foundation_Concrete_C]: {
    name: GameItemsEnum.MaterialDesc_Foundation_Concrete_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Foundation_Default_C]: {
    name: GameItemsEnum.MaterialDesc_Foundation_Default_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Foundation_Glass_C]: {
    name: GameItemsEnum.MaterialDesc_Foundation_Glass_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Foundation_GripMetal_C]: {
    name: GameItemsEnum.MaterialDesc_Foundation_GripMetal_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Foundation_PolishedConcrete_C]: {
    name: GameItemsEnum.MaterialDesc_Foundation_PolishedConcrete_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Invisible_C]: {
    name: GameItemsEnum.MaterialDesc_Invisible_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Remover_C]: {
    name: GameItemsEnum.MaterialDesc_Remover_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Roof_Ficsit_C]: {
    name: GameItemsEnum.MaterialDesc_Roof_Ficsit_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Roof_Glass_C]: {
    name: GameItemsEnum.MaterialDesc_Roof_Glass_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Roof_Metal_C]: {
    name: GameItemsEnum.MaterialDesc_Roof_Metal_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Roof_Tar_C]: {
    name: GameItemsEnum.MaterialDesc_Roof_Tar_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Wall_Concrete_C]: {
    name: GameItemsEnum.MaterialDesc_Wall_Concrete_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Wall_Glass_C]: {
    name: GameItemsEnum.MaterialDesc_Wall_Glass_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Wall_Orange_C]: {
    name: GameItemsEnum.MaterialDesc_Wall_Orange_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.MaterialDesc_Wall_Steel_C]: {
    name: GameItemsEnum.MaterialDesc_Wall_Steel_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_ArrowBack_C]: {
    name: GameItemsEnum.PatternDesc_ArrowBack_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_ArrowLeft_C]: {
    name: GameItemsEnum.PatternDesc_ArrowLeft_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_ArrowRight_C]: {
    name: GameItemsEnum.PatternDesc_ArrowRight_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_ArrowStraight_C]: {
    name: GameItemsEnum.PatternDesc_ArrowStraight_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_DottedCentreCorner_C]: {
    name: GameItemsEnum.PatternDesc_DottedCentreCorner_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_DottedCentre_C]: {
    name: GameItemsEnum.PatternDesc_DottedCentre_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_DottedCross_C]: {
    name: GameItemsEnum.PatternDesc_DottedCross_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_DottedDouble_C]: {
    name: GameItemsEnum.PatternDesc_DottedDouble_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_DottedSideCorner_C]: {
    name: GameItemsEnum.PatternDesc_DottedSideCorner_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_DottedSide_C]: {
    name: GameItemsEnum.PatternDesc_DottedSide_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_DottedSplit_C]: {
    name: GameItemsEnum.PatternDesc_DottedSplit_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_FullZebra_C]: {
    name: GameItemsEnum.PatternDesc_FullZebra_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_Cart_C]: {
    name: GameItemsEnum.PatternDesc_Icon_Cart_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_Explorer_C]: {
    name: GameItemsEnum.PatternDesc_Icon_Explorer_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_Factory_C]: {
    name: GameItemsEnum.PatternDesc_Icon_Factory_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_Liquid_C]: {
    name: GameItemsEnum.PatternDesc_Icon_Liquid_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_Nuclear_C]: {
    name: GameItemsEnum.PatternDesc_Icon_Nuclear_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_Parking_C]: {
    name: GameItemsEnum.PatternDesc_Icon_Parking_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_Pioneer_C]: {
    name: GameItemsEnum.PatternDesc_Icon_Pioneer_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_Power_C]: {
    name: GameItemsEnum.PatternDesc_Icon_Power_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_StopCross_C]: {
    name: GameItemsEnum.PatternDesc_Icon_StopCross_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_Storage_C]: {
    name: GameItemsEnum.PatternDesc_Icon_Storage_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_Tractor_C]: {
    name: GameItemsEnum.PatternDesc_Icon_Tractor_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Icon_Truck_C]: {
    name: GameItemsEnum.PatternDesc_Icon_Truck_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_LineCentreCorner_C]: {
    name: GameItemsEnum.PatternDesc_LineCentreCorner_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_LineCentre_C]: {
    name: GameItemsEnum.PatternDesc_LineCentre_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_LineCross_C]: {
    name: GameItemsEnum.PatternDesc_LineCross_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_LineDouble_C]: {
    name: GameItemsEnum.PatternDesc_LineDouble_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_LineSideCorner_C]: {
    name: GameItemsEnum.PatternDesc_LineSideCorner_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_LineSide_C]: {
    name: GameItemsEnum.PatternDesc_LineSide_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_LineSplit_C]: {
    name: GameItemsEnum.PatternDesc_LineSplit_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_NO_ArrowLeft_C]: {
    name: GameItemsEnum.PatternDesc_NO_ArrowLeft_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_NO_ArrowRight_C]: {
    name: GameItemsEnum.PatternDesc_NO_ArrowRight_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_NO_ArrowStraight_C]: {
    name: GameItemsEnum.PatternDesc_NO_ArrowStraight_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_NO_Cart_C]: {
    name: GameItemsEnum.PatternDesc_NO_Cart_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_NO_Parking_C]: {
    name: GameItemsEnum.PatternDesc_NO_Parking_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_NO_Pioneer_C]: {
    name: GameItemsEnum.PatternDesc_NO_Pioneer_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Number0_C]: {
    name: GameItemsEnum.PatternDesc_Number0_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Number1_C]: {
    name: GameItemsEnum.PatternDesc_Number1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Number2_C]: {
    name: GameItemsEnum.PatternDesc_Number2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Number3_C]: {
    name: GameItemsEnum.PatternDesc_Number3_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Number4_C]: {
    name: GameItemsEnum.PatternDesc_Number4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Number5_C]: {
    name: GameItemsEnum.PatternDesc_Number5_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Number6_C]: {
    name: GameItemsEnum.PatternDesc_Number6_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Number7_C]: {
    name: GameItemsEnum.PatternDesc_Number7_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Number8_C]: {
    name: GameItemsEnum.PatternDesc_Number8_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Number9_C]: {
    name: GameItemsEnum.PatternDesc_Number9_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_PathCart_C]: {
    name: GameItemsEnum.PatternDesc_PathCart_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_PathCorner_C]: {
    name: GameItemsEnum.PatternDesc_PathCorner_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_PathCross_C]: {
    name: GameItemsEnum.PatternDesc_PathCross_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_PathPioneer_C]: {
    name: GameItemsEnum.PatternDesc_PathPioneer_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_PathSplit_C]: {
    name: GameItemsEnum.PatternDesc_PathSplit_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_PathStraight_C]: {
    name: GameItemsEnum.PatternDesc_PathStraight_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_PathZebra_C]: {
    name: GameItemsEnum.PatternDesc_PathZebra_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Remover_Arrows_C]: {
    name: GameItemsEnum.PatternDesc_Remover_Arrows_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Remover_C]: {
    name: GameItemsEnum.PatternDesc_Remover_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Remover_Icons_C]: {
    name: GameItemsEnum.PatternDesc_Remover_Icons_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Remover_Lines_C]: {
    name: GameItemsEnum.PatternDesc_Remover_Lines_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Remover_Numbers_C]: {
    name: GameItemsEnum.PatternDesc_Remover_Numbers_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Remover_Paths_C]: {
    name: GameItemsEnum.PatternDesc_Remover_Paths_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Remover_Zones_C]: {
    name: GameItemsEnum.PatternDesc_Remover_Zones_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test0_C]: {
    name: GameItemsEnum.PatternDesc_Test0_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test10_C]: {
    name: GameItemsEnum.PatternDesc_Test10_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test11_C]: {
    name: GameItemsEnum.PatternDesc_Test11_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test12_C]: {
    name: GameItemsEnum.PatternDesc_Test12_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test13_C]: {
    name: GameItemsEnum.PatternDesc_Test13_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test14_C]: {
    name: GameItemsEnum.PatternDesc_Test14_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test15_C]: {
    name: GameItemsEnum.PatternDesc_Test15_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test16_C]: {
    name: GameItemsEnum.PatternDesc_Test16_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test17_C]: {
    name: GameItemsEnum.PatternDesc_Test17_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test1_C]: {
    name: GameItemsEnum.PatternDesc_Test1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test2_C]: {
    name: GameItemsEnum.PatternDesc_Test2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test3_C]: {
    name: GameItemsEnum.PatternDesc_Test3_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test4_C]: {
    name: GameItemsEnum.PatternDesc_Test4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test5_C]: {
    name: GameItemsEnum.PatternDesc_Test5_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test6_C]: {
    name: GameItemsEnum.PatternDesc_Test6_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test7_C]: {
    name: GameItemsEnum.PatternDesc_Test7_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test8_C]: {
    name: GameItemsEnum.PatternDesc_Test8_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_Test9_C]: {
    name: GameItemsEnum.PatternDesc_Test9_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_ZoneFull_C]: {
    name: GameItemsEnum.PatternDesc_ZoneFull_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_ZoneHalf_C]: {
    name: GameItemsEnum.PatternDesc_ZoneHalf_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_ZoneLine_C]: {
    name: GameItemsEnum.PatternDesc_ZoneLine_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.PatternDesc_ZoneQuarter_C]: {
    name: GameItemsEnum.PatternDesc_ZoneQuarter_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SkinDesc_Ficsmas_Default_C]: {
    name: GameItemsEnum.SkinDesc_Ficsmas_Default_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SkinDesc_Ficsmas_Premium_C]: {
    name: GameItemsEnum.SkinDesc_Ficsmas_Premium_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SkinDesc_Remover_C]: {
    name: GameItemsEnum.SkinDesc_Remover_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SkinDesc_Test0_C]: {
    name: GameItemsEnum.SkinDesc_Test0_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SkinDesc_Test1_C]: {
    name: GameItemsEnum.SkinDesc_Test1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Concrete_C]: {
    name: GameItemsEnum.SwatchDesc_Concrete_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Custom_C]: {
    name: GameItemsEnum.SwatchDesc_Custom_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_FoundationOverride_C]: {
    name: GameItemsEnum.SwatchDesc_FoundationOverride_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot0_C]: {
    name: GameItemsEnum.SwatchDesc_Slot0_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot10_C]: {
    name: GameItemsEnum.SwatchDesc_Slot10_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot11_C]: {
    name: GameItemsEnum.SwatchDesc_Slot11_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot12_C]: {
    name: GameItemsEnum.SwatchDesc_Slot12_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot13_C]: {
    name: GameItemsEnum.SwatchDesc_Slot13_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot14_C]: {
    name: GameItemsEnum.SwatchDesc_Slot14_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot15_C]: {
    name: GameItemsEnum.SwatchDesc_Slot15_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot16_C]: {
    name: GameItemsEnum.SwatchDesc_Slot16_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot17_C]: {
    name: GameItemsEnum.SwatchDesc_Slot17_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot1_C]: {
    name: GameItemsEnum.SwatchDesc_Slot1_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot2_C]: {
    name: GameItemsEnum.SwatchDesc_Slot2_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot3_C]: {
    name: GameItemsEnum.SwatchDesc_Slot3_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot4_C]: {
    name: GameItemsEnum.SwatchDesc_Slot4_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot5_C]: {
    name: GameItemsEnum.SwatchDesc_Slot5_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot6_C]: {
    name: GameItemsEnum.SwatchDesc_Slot6_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot7_C]: {
    name: GameItemsEnum.SwatchDesc_Slot7_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot8_C]: {
    name: GameItemsEnum.SwatchDesc_Slot8_C,
    category: GameItemsCategoryEnum.Default,
  },
  [GameClassNamesEnum.SwatchDesc_Slot9_C]: {
    name: GameItemsEnum.SwatchDesc_Slot9_C,
    category: GameItemsCategoryEnum.Default,
  },
};
