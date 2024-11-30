// import { useColorScheme } from "@mui/joy";
// import type React from "react";
// import { useEffect } from "react";

// type Props = {
//   children: React.ReactElement;
// };

// export const ToggleTheme: React.FC<Props> = ({ children }) => {
//   const { setMode } = useColorScheme();

//   useEffect(() => {
//     setMode("dark");
//   }, [setMode]);

//   return children;
// };

import { CssVarsProvider, extendTheme, useColorScheme } from "@mui/joy/styles";
import Typography from "@mui/joy/Typography";
import * as React from "react";

const theme = extendTheme({ cssVarPrefix: "demo" });

const Identifier = () => {
  const { systemMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <Typography
        component="div"
        sx={{ fontSize: "lg", opacity: 0 }}
      >
        Calculating…
      </Typography>
    );
  }
  return (
    <Typography
      component="div"
      sx={{ fontSize: "lg" }}
    >
      Your system is in{" "}
      <Typography
        variant="outlined"
        sx={{
          fontSize: "md",
          boxShadow: "sm",
          fontFamily: "code",
          bgcolor: "background.level1",
        }}
      >
        {systemMode}
      </Typography>{" "}
      mode.
    </Typography>
  );
};

type Props = {
  children: React.ReactElement;
};

export const IdentifySystemMode: React.FC<Props> = ({ children }) => {
  return (
    <CssVarsProvider
      theme={theme}
      modeStorageKey="demo_identify-system-mode"
    >
      <Identifier />
      {children}
    </CssVarsProvider>
  );
};
