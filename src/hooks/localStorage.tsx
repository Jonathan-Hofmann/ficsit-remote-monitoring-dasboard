import React from "react";

export const useLocalStorage = (storageKey:string, fallbackState:string[]) => {
    const [value, setValue] = React.useState(
      JSON.parse(localStorage.getItem(storageKey) as string) ?? ["Iron Ingot", "Iron Plates", "Iron Rods", "Copper Ingot", "Concrete", "Coal"]
    );
  
    React.useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);
  
    return [value, setValue];
};