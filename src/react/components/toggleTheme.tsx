import { useColorScheme } from "@mui/joy";
import type React from "react";
import { useEffect } from "react";

type Props = {
  children: React.ReactElement;
};

export const ToggleTheme: React.FC<Props> = ({ children }) => {
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode("dark");
  }, []);

  return children;
};
