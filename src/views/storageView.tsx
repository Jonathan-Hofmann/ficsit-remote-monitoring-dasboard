// noinspection JSIgnoredPromiseFromCall

import { Card, CardContent, Container, Grid, Typography } from "@mui/joy";
import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

import { fullRefs } from "../constants/refs";
import { useLocalStorage } from "../hooks/localStorage";
import { defaultSettingsData } from "./settings";

export const StorageView: React.FC = () => {
  const [doLoadData] = useState(true);
  const [worldInv, setWorldInv] = useState<undefined | any>(undefined);
  const [prodStats, setProdStats] = useState<undefined | any>(undefined);
  const [items, setItems] = useState<undefined | any>(undefined);
  const [settings] = useLocalStorage("rmd_settings", defaultSettingsData);

  const loadData = async () => {
    if (doLoadData) {
      const response = await axios.get(
        `http://${settings.ip}:${settings.port}/getWorldInv`,
      );
      const response_extra = await axios.get(
        `http://${settings.ip}:${settings.port}/getProdStats`,
      );

      // console.info(response);
      setWorldInv(response.data);
      setProdStats(response_extra.data);

      setTimeout(() => {
        loadData();
      }, settings.interval);
    }
  };

  const prepItems = async () => {
    const temp = [];
    for (let index = 0; index < worldInv.length; index++) {
      let found = false;
      const item = worldInv[index];
      for (let i = 0; i < prodStats.length; i++) {
        const prodStat = prodStats[i];
        if (item.Name === prodStat.Name) {
          temp.push({ item, prodStat });
          found = true;
        }
      }
      if (!found) {
        temp.push({
          item,
          prodStat: { ProdPerMin: "P:0.0/min - C: 0.0/min" },
        });
      }
    }
    setItems(temp);
  };

  function getImage(item: any): any {
    let value = null;
    if (item != null) {
      value = `./assets/${fullRefs[item].category}/${item}.png`;
    }
    return value;
  }

  useEffect(() => {
    prepItems();
  });

  useEffect(() => {
    loadData();
  });

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Card
        variant="outlined"
        sx={{ paddingBottom: "0px", marginBottom: "30px" }}
      >
        <CardContent>
          <Grid
            container
            display="flex"
            alignItems="center"
            marginBottom="20px"
          >
            <Grid xs>
              <Typography
                level="h2"
                fontWeight={600}
              >
                All Items in World
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {items ? (
        <Grid
          container
          paddingY={0}
          px={0}
          spacing={2}
        >
          {items.map((data: any, index: number) => {
            return (
              <Grid
                xs={4}
                key={index}
              >
                <Card
                  variant="outlined"
                  sx={{
                    padding: "3px",
                    borderColor:
                      Math.floor(data.prodStat.CurrentConsumed) >
                      Math.floor(data.prodStat.CurrentProd)
                        ? "var(--joy-palette-warning-main)"
                        : "var(--joy-palette-neutral-outlinedBorder)",
                    borderWidth:
                      Math.floor(data.prodStat.CurrentConsumed) >
                      Math.floor(data.prodStat.CurrentProd)
                        ? "3px"
                        : "1px",
                  }}
                >
                  {/* <Card variant="outlined" sx={{height: '100%', padding:0}}> */}
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "16px",
                    }}
                  >
                    {fullRefs[data.item.Name] !== undefined && (
                      <img
                        src={getImage(data.item.Name) ?? null}
                        alt=""
                        style={{ height: "70px", width: "70px" }}
                      />
                    )}
                    {fullRefs[data.item.Name] === undefined && (
                      <HiOutlineQuestionMarkCircle size="70px" />
                    )}
                    <Typography marginBottom="5px">{data.item.Name}</Typography>
                    <Typography level="body2">
                      Total: {data.item.Amount}
                    </Typography>
                    <Typography level="body2">
                      {data.prodStat.ProdPerMin}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Grid
          container
          paddingY={0}
          px={0}
          spacing={2}
        >
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", padding: 0 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <Skeleton
                  variant="circular"
                  height="70px"
                  width="70px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="80px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton
                  width="50px"
                  sx={{ marginBottom: "10px" }}
                />
                <Skeleton width="150px" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
