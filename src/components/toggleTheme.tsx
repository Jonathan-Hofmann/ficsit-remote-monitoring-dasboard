import { useColorScheme } from "@mui/joy";
import { useEffect } from "react";

export const ToggleTheme: React.FC<any> = (props) => {
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode("dark");
  }, []);

  return <>{props.children}</>;
};
