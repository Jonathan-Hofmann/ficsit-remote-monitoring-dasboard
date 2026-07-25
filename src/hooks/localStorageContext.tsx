import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

type StorageContextType = {
    get<T>(key: string, defaultValue: T): T;
    set<T>(key: string, value: T): void;
};

const StorageContext = createContext<StorageContextType | null>(null);

export function StorageProvider({ children }: { children: ReactNode }) {
    const [storage, setStorage] = useState<Record<string, unknown>>(() => {
        const values: Record<string, unknown> = {};

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            if (!key) continue;

            try {
                values[key] = JSON.parse(localStorage.getItem(key)!);
            } catch {
                values[key] = localStorage.getItem(key);
            }
        }

        return values;
    });

    const get = <T,>(key: string, defaultValue: T): T => {
        return (storage[key] as T) ?? defaultValue;
    };

    const set = <T,>(key: string, value: T) => {
        localStorage.setItem(key, JSON.stringify(value));

        setStorage(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <StorageContext.Provider value={{ get, set }}>
            {children}
        </StorageContext.Provider>
    );
}

export function useStorage() {
    const context = useContext(StorageContext);

    if (!context) {
        throw new Error("StorageProvider missing");
    }

    return context;
}