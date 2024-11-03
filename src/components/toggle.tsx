// @ts-ignore
import { Button, useColorScheme } from "@mui/joy";
import React, { useEffect } from "react";
import ts from "typescript";

export const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  // const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  useEffect(() => {
    // setMode('dark')
  }, []);

  return <></>;
};
