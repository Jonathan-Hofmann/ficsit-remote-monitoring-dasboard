import { useEffect, useState } from "react";

import type { SettingsData } from "../types/settingsData";

export const useLocalStorage = (
  storageKey: string,
  defaultSettings: SettingsData,
) => {
  const storedValue: string | null = localStorage.getItem(storageKey);
  const parsedStoredValue: SettingsData | undefined = storedValue
    ? (JSON.parse(storedValue) as SettingsData)
    : undefined;

  const [value, setValue] = useState<SettingsData>(
    parsedStoredValue ?? defaultSettings,
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
