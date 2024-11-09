import { useEffect, useState } from "react";

import { defaultSettingsData } from "../constants/defaultSettingsData";
import { endPointDictionnary } from "../dictionnaries/endPoint.dictionnary";
import type { EndpointEnum } from "../enums/endpoint.enum";
import { FetchMethodsEnum } from "../enums/fetchMethods.enum";
import { fetcherHelper } from "../helpers/fetcher.helper";
import type { MapperFunction } from "../types/endpoint";
import type { FetchResponse } from "../types/fetchResponse";
import type { SettingsData } from "../types/settingsData";
import { useLocalStorage } from "./localStorage";

export const useAutoRefetch = <Dto, Fm>(
  endPoint: EndpointEnum,
): FetchResponse<Fm> => {
  const mapper = endPointDictionnary[endPoint] as MapperFunction<Dto, Fm>;
  const { value: settings } = useLocalStorage<SettingsData>(
    "rmd_settings",
    defaultSettingsData,
  );
  const [responseState, setResponseState] = useState<FetchResponse<Fm>>({
    status: "",
    success: true,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (isMounted) {
        const response = await fetcherHelper<Dto>({
          apiUrl: `http://${settings.ip}:${settings.port}`,
          endPoint: `/${endPoint}`,
          method: FetchMethodsEnum.GET,
        });
        setResponseState({
          ...response,
          data: response.data && mapper(response.data),
        });
      }
    };

    const refetchLoop = () => {
      fetchData().catch((error) => console.error(error));
      setTimeout(refetchLoop, settings.interval);
    };

    refetchLoop();

    return () => {
      isMounted = false;
    };
  }, [endPoint, mapper, settings]);

  return responseState;
};
