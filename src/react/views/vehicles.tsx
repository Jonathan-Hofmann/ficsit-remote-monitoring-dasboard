import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/joy";
import React from "react";
import { BsQuestionCircle, BsXCircle } from "react-icons/bs";

import { EndpointEnum } from "../../enums/endpoint.enum";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import type { VehicleDto } from "../../types/apis/dataTransferObject/vehicleDto";
import type { VehicleFm } from "../../types/apis/frontModel/vehicleFm";

export const Vehicles: React.FC = () => {
  const { data: vehicles } = useAutoRefetch<VehicleDto[], VehicleFm[]>(
    EndpointEnum.VEHICLE,
  );

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
                All Vehicles
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {vehicles ? (
        <>
          <Grid
            container
            spacing={3}
            sx={{ marginBottomY: "30px" }}
            display="flex"
            alignItems="center"
          >
            {vehicles.map((vehicle) => {
              return (
                <Grid
                  key={vehicle.id}
                  xs={3}
                >
                  <a
                    href={`#${vehicle.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      variant="outlined"
                      sx={{
                        "position": "relative",
                        "paddingY": 0,
                        "&:hover": {
                          borderColor: "var(--joy-palette-neutral-700)",
                        },
                        "cursor": "pointer",
                      }}
                    >
                      <CardContent>
                        <Grid
                          container
                          spacing={4}
                          sx={{ paddingX: 0 }}
                        >
                          <Grid>
                            <img
                              src={`/assets/Vehicle/${vehicle.name}.png`}
                              alt={`Satisfactory ${vehicle.name} vehicle illustration`}
                              style={{ height: "70px", width: "70px" }}
                            />
                          </Grid>

                          <Grid xs>
                            <Box sx={{ marginBottom: "10px" }}>
                              {vehicle.autopilot === false ? (
                                <Chip
                                  color="primary"
                                  size="sm"
                                  variant="outlined"
                                  sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    borderColor: "rgba(255, 255, 255, 0.1)",
                                  }}
                                >
                                  Manual
                                </Chip>
                              ) : (
                                <Chip
                                  color="neutral"
                                  size="sm"
                                  variant="outlined"
                                  sx={{
                                    backgroundColor: "rgba(47, 128, 237, 0.1)",
                                    borderColor: "rgba(47, 128, 237, 0.1)",
                                  }}
                                >
                                  Autopilot
                                </Chip>
                              )}
                            </Box>
                            <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                              Speed: {vehicle.speed} km/h
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </a>
                </Grid>
              );
            })}
          </Grid>

          {/* Show all vehicles that are in manual drive mode */}
          <Typography
            level="h2"
            fontWeight={600}
            marginTop="40px"
            marginBottom="20px"
          >
            Manual Vehicles
          </Typography>

          <Grid
            container
            spacing={3}
            sx={{ marginBottomY: "30px" }}
            display="flex"
            alignItems="center"
          >
            {vehicles.map((vehicle) => {
              if (vehicle.autopilot) return null;
              return (
                <Grid
                  key={vehicle.id}
                  xs={4}
                >
                  <div id={vehicle.id} />
                  <Card
                    sx={{ position: "relative", paddingBottom: 0 }}
                    variant="outlined"
                  >
                    <CardContent>
                      <Stack
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                      >
                        <img
                          src={`/assets/Vehicle/${vehicle.name}.png`}
                          alt={`Satisfactory ${vehicle.name} vehicle illustration`}
                          style={{ height: "100px", width: "100px" }}
                        />
                        <Box sx={{ position: "relative" }}>
                          <Grid
                            container
                            spacing={1}
                            display="flex"
                            alignItems="center"
                          >
                            <Grid>
                              {vehicle.airborne === false ? (
                                <Chip
                                  color="success"
                                  size="sm"
                                  variant="outlined"
                                  sx={{
                                    backgroundColor: "rgba(33, 150, 83, 0.1)",
                                    borderColor: "rgba(33, 150, 83, 0.1)",
                                  }}
                                >
                                  No Problems
                                </Chip>
                              ) : (
                                <Chip
                                  color="danger"
                                  size="sm"
                                  variant="outlined"
                                  sx={{
                                    backgroundColor: "rgba(235, 87, 87, 0.12)",
                                    borderColor: "rgba(235, 87, 87, 0.12)",
                                  }}
                                >
                                  Airborne
                                </Chip>
                              )}
                            </Grid>
                            <Grid>
                              {vehicle.autopilot ? (
                                <Chip
                                  color="neutral"
                                  size="sm"
                                  variant="outlined"
                                  sx={{
                                    backgroundColor: "rgba(47, 128, 237, 0.1)",
                                    borderColor: "rgba(47, 128, 237, 0.1)",
                                  }}
                                >
                                  Autopilot
                                </Chip>
                              ) : (
                                <Chip
                                  color="primary"
                                  size="sm"
                                  variant="outlined"
                                  sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    borderColor: "rgba(255, 255, 255, 0.1)",
                                  }}
                                >
                                  Manual
                                </Chip>
                              )}
                            </Grid>
                          </Grid>
                        </Box>
                        <Typography
                          marginLeft="5px"
                          level="body-md"
                        >
                          VehicleID: #{vehicle.id}
                        </Typography>
                      </Stack>

                      <Grid
                        container
                        spacing={2}
                        sx={{ paddingX: 0 }}
                      >
                        <Grid xs>
                          <Grid container>
                            <Grid xs>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.5)" }}
                              >
                                Speed
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.9)" }}
                              >
                                {vehicle.speed / 30} km/h
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid xs>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.5)" }}
                              >
                                Gear
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.9)" }}
                              >
                                {vehicle.currentGear}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid xs>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.5)" }}
                              >
                                Engine RPM
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.9)" }}
                              >
                                {Math.max(0, vehicle.engineRPM)} RPM
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid xs>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.5)" }}
                              >
                                Fuel Amount
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.9)" }}
                              >
                                {vehicle.fuel?.[0]?.amount}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid xs>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.5)" }}
                              >
                                Fuel Type
                              </Typography>
                            </Grid>
                            <Grid>
                              <img
                                src={`/assets/Resource/${
                                  vehicle.fuel?.[0]?.name
                                }.png`}
                                alt="Satisfactory Tractor fuel illustration"
                                style={{ height: "30px", width: "30px" }}
                              />
                              {/* <BsXCircle
                                color="red"
                                size="25px"
                              /> */}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          {/* Show all vehicles that are in autopilot */}
          <Typography
            level="h2"
            fontWeight={600}
            marginTop="40px"
            marginBottom="20px"
          >
            Autopiloted Vehicles
          </Typography>
          <Grid
            container
            spacing={3}
          >
            {vehicles.map((vehicle, index: number) => {
              if (!vehicle.autopilot) return null;
              return (
                <Grid
                  key={vehicle.id}
                  xs={4}
                >
                  <div id={index.toString()} />
                  <Card
                    sx={{ position: "relative", paddingBottom: 0 }}
                    variant="outlined"
                  >
                    <CardContent>
                      <Stack
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                      >
                        <img
                          src={`/assets/Vehicle/${vehicle.name}.png`}
                          alt={`Satisfactory ${vehicle.name} vehicle illustration`}
                          style={{ height: "100px", width: "100px" }}
                        />
                        <Box sx={{ position: "relative" }}>
                          <Grid
                            container
                            spacing={1}
                            display="flex"
                            alignItems="center"
                          >
                            <Grid>
                              {vehicle.airborne === false ? (
                                <Chip
                                  color="success"
                                  size="sm"
                                  variant="outlined"
                                  sx={{
                                    backgroundColor: "rgba(33, 150, 83, 0.1)",
                                    borderColor: "rgba(33, 150, 83, 0.1)",
                                  }}
                                >
                                  No Problems
                                </Chip>
                              ) : (
                                <Chip
                                  color="danger"
                                  size="sm"
                                  variant="outlined"
                                  sx={{
                                    backgroundColor: "rgba(235, 87, 87, 0.12)",
                                    borderColor: "rgba(235, 87, 87, 0.12)",
                                  }}
                                >
                                  Airborne
                                </Chip>
                              )}
                            </Grid>
                            <Grid>
                              {vehicle.autopilot ? (
                                <Chip
                                  color="primary"
                                  size="sm"
                                  variant="outlined"
                                  sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    borderColor: "rgba(255, 255, 255, 0.1)",
                                  }}
                                >
                                  Manual
                                </Chip>
                              ) : (
                                <Chip
                                  color="neutral"
                                  size="sm"
                                  variant="outlined"
                                  sx={{
                                    backgroundColor: "rgba(47, 128, 237, 0.1)",
                                    borderColor: "rgba(47, 128, 237, 0.1)",
                                  }}
                                >
                                  Autopilot
                                </Chip>
                              )}
                            </Grid>
                          </Grid>
                        </Box>
                        <Typography
                          marginLeft="5px"
                          level="body-md"
                        >
                          VehicleID: #{vehicle.id}
                        </Typography>
                      </Stack>

                      <Grid
                        container
                        spacing={2}
                        sx={{ paddingX: 0 }}
                      >
                        <Grid xs>
                          <Grid container>
                            <Grid xs>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.5)" }}
                              >
                                Speed
                              </Typography>
                            </Grid>
                            <Grid>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{ color: "rgba(255,255,255,0.9)" }}
                                >
                                  {vehicle.speed / 30} km/h
                                </Typography>
                                {vehicle.speed === 0 &&
                                  Math.max(0, vehicle.engineRPM) > 0 && (
                                    <Tooltip title="If the vehicle is too far away from player the speed cannot be read.">
                                      <IconButton
                                        sx={{ marginLeft: "10px" }}
                                        size="sm"
                                        color="neutral"
                                        variant="plain"
                                      >
                                        <BsQuestionCircle />
                                      </IconButton>
                                    </Tooltip>
                                  )}
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid xs>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.5)" }}
                              >
                                Gear
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.9)" }}
                              >
                                {vehicle.currentGear}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid xs>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.5)" }}
                              >
                                Engine RPM
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.9)" }}
                              >
                                {Math.max(0, vehicle.engineRPM)} RPM
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid xs>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.5)" }}
                              >
                                Fuel Inventory
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.9)" }}
                              >
                                {vehicle.fuel?.[0]?.amount}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid xs>
                              <Typography
                                sx={{ color: "rgba(255,255,255,0.5)" }}
                              >
                                Fuel Type
                              </Typography>
                            </Grid>
                            <Grid>
                              <img
                                src={`/assets/Resource/${
                                  vehicle.fuel?.[0]?.name
                                }.png`}
                                alt="Satisfactory Tractor fuel illustration"
                                style={{ height: "30px", width: "30px" }}
                              />
                              <BsXCircle
                                color="red"
                                size="25px"
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        <>
          <Grid
            container
            spacing={3}
            sx={{ marginBottomY: "30px", opacity: 0.5 }}
            display="flex"
            alignItems="center"
          >
            <Grid xs={3}>
              <Card
                variant="outlined"
                sx={{}}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={4}
                    sx={{ paddingX: 0 }}
                  >
                    <Grid>
                      <Skeleton
                        variant="circular"
                        height="50px"
                        width="50px"
                      />
                    </Grid>

                    <Grid xs>
                      <Box sx={{ marginBottom: "10px" }}>
                        <Skeleton
                          variant="rectangular"
                          height="20px"
                          width="70px"
                        />
                      </Box>
                      <Skeleton
                        variant="text"
                        width="50px"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card
                variant="outlined"
                sx={{}}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={4}
                    sx={{ paddingX: 0 }}
                  >
                    <Grid>
                      <Skeleton
                        variant="circular"
                        height="50px"
                        width="50px"
                      />
                    </Grid>

                    <Grid xs>
                      <Box sx={{ marginBottom: "10px" }}>
                        <Skeleton
                          variant="rectangular"
                          height="20px"
                          width="70px"
                        />
                      </Box>
                      <Skeleton
                        variant="text"
                        width="50px"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography
            level="h2"
            fontWeight={600}
            marginTop="40px"
            marginBottom="20px"
          >
            Manual Vehicles
          </Typography>

          <Grid
            container
            spacing={3}
            sx={{ marginBottomY: "30px", opacity: 0.5 }}
            display="flex"
            alignItems="center"
          >
            <Grid xs={4}>
              <Card
                sx={{ position: "relative", paddingBottom: 0 }}
                variant="outlined"
              >
                <CardContent>
                  <Stack
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Skeleton
                      variant="circular"
                      height="100px"
                      width="100px"
                    />
                    <Box sx={{ position: "relative" }}>
                      <Grid
                        container
                        spacing={1}
                        display="flex"
                        alignItems="center"
                      >
                        <Grid>
                          <Skeleton
                            variant="rectangular"
                            height="20px"
                            width="70px"
                          />
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="rectangular"
                            height="20px"
                            width="90px"
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Skeleton
                      variant="text"
                      width="50px"
                    />
                  </Stack>

                  <Grid
                    container
                    spacing={2}
                    sx={{ paddingX: 0 }}
                  >
                    <Grid xs>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Speed
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="120px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Gear
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="100px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Engine RPM
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="80px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Fuel Inventory
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="110px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Fuel Type
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="50px"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card
                sx={{ position: "relative", paddingBottom: 0 }}
                variant="outlined"
              >
                <CardContent>
                  <Stack
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Skeleton
                      variant="circular"
                      height="100px"
                      width="100px"
                    />
                    <Box sx={{ position: "relative" }}>
                      <Grid
                        container
                        spacing={1}
                        display="flex"
                        alignItems="center"
                      >
                        <Grid>
                          <Skeleton
                            variant="rectangular"
                            height="20px"
                            width="70px"
                          />
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="rectangular"
                            height="20px"
                            width="90px"
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Skeleton
                      variant="text"
                      width="50px"
                    />
                  </Stack>

                  <Grid
                    container
                    spacing={2}
                    sx={{ paddingX: 0 }}
                  >
                    <Grid xs>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Speed
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="120px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Gear
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="100px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Engine RPM
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="80px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Fuel Inventory
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="110px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Fuel Type
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="50px"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography
            level="h2"
            fontWeight={600}
            marginTop="40px"
            marginBottom="20px"
          >
            Autopiloted Vehicles
          </Typography>

          <Grid
            container
            spacing={3}
            sx={{ marginBottomY: "30px", opacity: 0.5 }}
            display="flex"
            alignItems="center"
          >
            <Grid xs={4}>
              <Card
                sx={{ position: "relative", paddingBottom: 0 }}
                variant="outlined"
              >
                <CardContent>
                  <Stack
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    <Skeleton
                      variant="circular"
                      height="100px"
                      width="100px"
                    />
                    <Box sx={{ position: "relative" }}>
                      <Grid
                        container
                        spacing={1}
                        display="flex"
                        alignItems="center"
                      >
                        <Grid>
                          <Skeleton
                            variant="rectangular"
                            height="20px"
                            width="70px"
                          />
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="rectangular"
                            height="20px"
                            width="90px"
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Skeleton
                      variant="text"
                      width="50px"
                    />
                  </Stack>

                  <Grid
                    container
                    spacing={2}
                    sx={{ paddingX: 0 }}
                  >
                    <Grid xs>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Speed
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="120px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Gear
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="100px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Engine RPM
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="80px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Fuel Inventory
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="110px"
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Fuel Type
                          </Typography>
                        </Grid>
                        <Grid>
                          <Skeleton
                            variant="text"
                            width="50px"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};
