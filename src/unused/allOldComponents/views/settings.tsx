import {
  Card,
  CardContent,
  Container,
  Grid,
  Input,
  Option,
  Select,
  Typography,
} from "@mui/joy";
import React from "react";
import { BsExclamationCircle } from "react-icons/bs";

import { defaultSettingsData } from "../../constants/defaultSettingsData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import type { SettingsData } from "../../types/settingsData";

export const Settings: React.FC = () => {
  const { value: settings, setValue: setSettings } =
    useLocalStorage<SettingsData>("rmd_settings", defaultSettingsData);

  return (
    <Container>
      <Card
        variant="outlined"
        sx={{ marginTop: "40px", marginBottom: "30px" }}
      >
        <CardContent>
          <Grid container>
            <Grid xs>
              <Typography level="h3">Settings</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid
        container
        spacing={2}
        sx={{ marginBottom: "30px" }}
      >
        <Grid xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography level="h4">Connection</Typography>

              <Input
                sx={{ marginTop: "15px" }}
                value={settings.ip}
                onChange={(e) => {
                  setSettings({ ...settings, ip: e.target.value });
                }}
                startDecorator="http://"
                placeholder="127.0.0.1"
              />
              <Input
                sx={{ marginTop: "15px" }}
                value={settings.port}
                onChange={(e) => {
                  setSettings({ ...settings, port: e.target.value });
                }}
                startDecorator={`http://${settings.ip}:`}
                placeholder="8080"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography level="h4">Data Interval Speed</Typography>

              <Select
                sx={{ marginTop: "15px" }}
                value={settings.interval}
                onChange={(_e, value) => {
                  setSettings({
                    ...settings,
                    interval: value ?? 10000,
                  });
                }}
              >
                <Option value={500}>500 ms (VERY fast - Warning)</Option>
                <Option value={1000}>1 seconde (Fast - Warning)</Option>
                <Option value={5000}>5 secondes</Option>
                <Option value={10000}>10 secondes (Default)</Option>
                <Option value={30000}>30 secondes</Option>
                <Option value={60000}>1 minute</Option>
                <Option value={300000}>5 minutes</Option>
              </Select>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography level="h4">Preferences</Typography>

              <Typography
                level="body-md"
                marginTop="15px"
              >
                More preferences coming soon.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Card variant="outlined">
        <CardContent>
          <Typography
            startDecorator={<BsExclamationCircle />}
            level="body-sm"
          >
            All Changes have immidiate effect.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
