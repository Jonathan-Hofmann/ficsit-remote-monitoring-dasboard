import { useStorage } from "./localStorageContext";

export function useLocalStorage<T>(
    key: string,
    defaultValue: T
) {
    const storage = useStorage();

    return {
        value: storage.get(key, defaultValue),
        setValue: (value: T) => storage.set(key, value),
    };
}