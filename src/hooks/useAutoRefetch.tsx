import { useEffect, useState } from "react";

import { defaultSettingsData } from "../constants/defaultSettingsData";
import { FetchMethodsEnum } from "../enums/fetchMethods.enum";
import { fetcherHelper } from "../helpers/fetcher.helper";
import type { FetchResponse } from "../types/fetchResponse";
import type { SettingsData } from "../types/settingsData";
import { useLocalStorage } from "./localStorage";

export const useAutoRefetch = <T,>(endPoint: string) => {
  const { value: settings } = useLocalStorage<SettingsData>(
    "rmd_settings",
    defaultSettingsData,
  );
  const [responseState, setResponseState] = useState<FetchResponse<T>>();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (isMounted) {
        setResponseState(
          await fetcherHelper<T>({
            apiUrl: `http://${settings.ip}:${settings.port}`,
            endPoint: `/${endPoint}`,
            method: FetchMethodsEnum.GET,
          }),
        );
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
  }, [endPoint, settings]);

  return responseState?.data;
};
