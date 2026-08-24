import { useMemo } from "react";

import { EndpointEnum } from "../enums/endpoint.enum";
import type { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import type { FactoryDto } from "../types/apis/dataTransferObject/factoryDto";
import type { FactoryFm } from "../types/apis/frontModel/factoryFm";
import { useAutoRefetch } from "./useAutoRefetch";

type ItemProducers = {
  // Every machine type that currently produces at least one item, sorted.
  machines: string[];
  // Item class name -> the machine types producing it. An item can have more
  // than one producer, for example Wire from both Constructors and Assemblers.
  producersByItem: Map<GameClassNamesEnum, Set<string>>;
};

const EMPTY_PRODUCERS: ItemProducers = {
  machines: [],
  producersByItem: new Map(),
};

/**
 * Aggregates the per-machine production reported by every factory endpoint
 * into an item -> machine types lookup.
 *
 * Each factory endpoint returns exactly one machine class, so the endpoint
 * itself identifies the machine type. Extractors are deliberately not included:
 * they live on a separate endpoint that is not part of EndpointEnum, so raw
 * ores have no producing machine here.
 *
 * Fetching all of these is expensive (~1.8 MB across roughly 1300 machines), so
 * callers should pass skip while the data is not on screen.
 */
export const useItemProducers = (skip?: boolean): ItemProducers => {
  // One call per endpoint: hooks cannot be called from a loop.
  const assemblers = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.ASSEMBLER,
    skip,
  );
  const blenders = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.BLENDER,
    skip,
  );
  const constructors = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.CONSTRUCTOR,
    skip,
  );
  const converters = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.CONVERTER,
    skip,
  );
  const encoders = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.QUANTUM_ENCODER,
    skip,
  );
  const foundries = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.FOUNDRY,
    skip,
  );
  const manufacturers = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.MANUFACTURER,
    skip,
  );
  const packagers = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.PACKAGER,
    skip,
  );
  const particleAccelerators = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.PARTICLE_ACCELERATOR,
    skip,
  );
  const refineries = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.REFINERY,
    skip,
  );
  const smelters = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.SMELTER,
    skip,
  );

  return useMemo((): ItemProducers => {
    if (skip) return EMPTY_PRODUCERS;

    const factoryLists = [
      assemblers.data,
      blenders.data,
      constructors.data,
      converters.data,
      encoders.data,
      foundries.data,
      manufacturers.data,
      packagers.data,
      particleAccelerators.data,
      refineries.data,
      smelters.data,
    ];

    const producersByItem = new Map<GameClassNamesEnum, Set<string>>();
    const machines = new Set<string>();

    factoryLists.forEach((factories) => {
      factories?.forEach((factory) => {
        factory.products.forEach((product) => {
          machines.add(factory.name);

          const producers =
            producersByItem.get(product.className) ?? new Set<string>();
          producers.add(factory.name);
          producersByItem.set(product.className, producers);
        });
      });
    });

    return { machines: [...machines].sort(), producersByItem };
  }, [
    skip,
    assemblers.data,
    blenders.data,
    constructors.data,
    converters.data,
    encoders.data,
    foundries.data,
    manufacturers.data,
    packagers.data,
    particleAccelerators.data,
    refineries.data,
    smelters.data,
  ]);
};
