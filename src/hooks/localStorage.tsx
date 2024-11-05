import { useEffect, useState } from "react";

export const useLocalStorage = <T,>(storageKey: string, defaultValue: T) => {
  const storedValue: string | null = localStorage.getItem(storageKey);
  const parsedStoredValue = storedValue
    ? (JSON.parse(storedValue) as T)
    : undefined;

  const [value, setValue] = useState<T>(parsedStoredValue ?? defaultValue);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return {
    value,
    setValue,
  };
};
