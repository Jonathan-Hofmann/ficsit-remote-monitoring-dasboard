import {
  Card,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/joy";
import { useTheme } from "@mui/system";
import React, { useEffect, useState } from "react";

import { FactoryTypeCol } from "../react/components/production/col_type";
import { useLocalStorage } from "../hooks/localStorage";
import { defaultSettingsData } from "../constants/defaultSettingsData";
import type { SettingsData } from "../types/settingsData";

const Factorys: React.FC = () => {
  const [doLoadData, setLoadData] = useState(true);
  const [factorys, setFactorys] = useState<undefined | any>(undefined);
  const [allFactorys, setAllFactorys] = useState<undefined | any>(undefined);
  const [loadingText, setLoadingText] = useState("Data is being loaded ...");
  const { value: settings } = useLocalStorage<SettingsData>(
    "rmd_settings",
    defaultSettingsData,
  );
  const theme = useTheme();

  let intervalVar: any;

  const loadData = async () => {
    // setLoadingText("Data is being loaded ...");
    intervalVar = setInterval(async () => {
      // const response = await fetch(
      //   `http://${settings.ip}:${settings.port}/getFactory`,
      // );
      // const data = await response.text();
      // const getPower = JSON.parse(data);
      // console.info(getPower);
      // setFactorys(getPower);
    }, 5000);
  };

  useEffect(() => {
    loadData();

    return function cleanup() {
      console.error("CLEANUP!");
      clearInterval(intervalVar);
    };
  }, []);

  useEffect(() => {
    if (factorys != undefined) {
      setLoadingText("Sorting Data ...");
      const tmp: any = [[], [], [], [], [], []];

      for (let i = 0; i < factorys.length; i++) {
        const factory: any = factorys[i];
        switch (factory.building) {
          case "Constructor":
            tmp[0].push(factory);
            break;
          case "Assembler":
            tmp[1].push(factory);
            break;
          case "Manufacturer":
            tmp[2].push(factory);
            break;
          case "Refinery":
            tmp[3].push(factory);
            break;
          case "Blender":
            tmp[4].push(factory);
            break;
          case "Particle Accelerator":
            tmp[5].push(factory);
            break;

          default:
            console.log("ERROR");
            break;
        }
      }

      setAllFactorys(tmp);
    }
  }, [factorys]);

  return (
    <Container>
      <Typography
        level="h3"
        sx={{ marginTop: "30px", marginBottom: "30px" }}
      >
        All Factorys
      </Typography>

      <Divider sx={{ marginBottom: "50px" }} />

      {factorys && allFactorys ? (
        <>
          <Grid
            container
            spacing={2}
            sx={{ marginBottom: "30px" }}
          >
            <Grid xs>
              <Card>
                {/* <CardHeader title={factorys.length} subheader="Total Number of Factorys"></CardHeader> */}
                <Typography level="h3">{factorys.length}</Typography>
                <Typography level="body-md">Total Number of Factorys</Typography>
              </Card>
            </Grid>
            <Grid xs>
              <Card>
                {/* <CardHeader title={ " MW"} subheader="Total Power Production"></CardHeader> */}
                <Typography level="h3">{factorys.length} MW</Typography>
                <Typography level="body-md">Total Number of Factorys</Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
          >
            {allFactorys.map((factory: any, i: number) => {
              if (factory.length > 0) {
                return <FactoryTypeCol factorys={factory} />;
              }
              return <></>;
            })}
          </Grid>
        </>
      ) : (
        <Stack
          sx={{ width: "100%", height: "300px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
          <Typography sx={{ marginTop: "20px" }}>{loadingText}</Typography>
        </Stack>
      )}
    </Container>
  );
};
