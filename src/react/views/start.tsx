import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
} from "@mui/joy";
import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import { BsExclamationCircle, BsExclamationTriangleFill } from "react-icons/bs";

import { fullRefs } from "../../constants/refs";
import { EndpointEnum } from "../../enums/endpoint.enum";
import { useLocalStorage } from "../../hooks/localStorage";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import type { WorldInvDto } from "../../types/apis/dataTransferObject/worldInvDto";
import type { WorldInvFm } from "../../types/apis/frontModel/worldInvFm";
import { AwesomeSink } from "../components/awesomeSink";

export const Start: React.FC = () => {
  const { value: itemSelection, setValue: setItemSelection } = useLocalStorage<
    string[]
  >("srmd_ItemList", ["Concrete", "Iron Ingot", "Copper Ingot", "Coal"]);

  const { data: worldInv } = useAutoRefetch<WorldInvDto[], WorldInvFm[]>(
    EndpointEnum.WORLD_INV,
  );

  const [editItemSelection, setEditItemSelection] = useState(false);

  const [tmpItemSelection, setTmpItemSelection] = useState<string[]>([]);

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Typography
        marginBottom="10px"
        level="h1"
      >
        Welcome Pioneer!
      </Typography>
      <Typography
        marginBottom="50px"
        level="h5"
        color="neutral"
        fontWeight={400}
      >
        Satisfactory Remote Monitoring Dashboard Version 1.0
      </Typography>

      <Grid
        spacing={3}
        container
        sx={{ height: "100%", position: "relative" }}
      >
        <Grid xs={6}>
          {itemSelection && (
            <>
              <Modal
                open={editItemSelection}
                onClose={() => {
                  setEditItemSelection(false);
                }}
              >
                <ModalDialog sx={{ maxWidth: "450px" }}>
                  <ModalClose />
                  <Typography level="h5">Edit Favorite Items List</Typography>

                  <Autocomplete
                    sx={{ marginY: "20px" }}
                    onChange={(_e, v) => {
                      setTmpItemSelection(v);
                    }}
                    multiple
                    defaultValue={tmpItemSelection}
                    options={Object.keys(fullRefs)}
                  />

                  <Button
                    sx={{ marginBottom: "15px" }}
                    fullWidth
                    onClick={() => {
                      setItemSelection(tmpItemSelection);
                      setEditItemSelection(false);
                    }}
                  >
                    Save changes
                  </Button>
                  <Button
                    color="neutral"
                    variant="plain"
                    fullWidth
                    onClick={() => {
                      setEditItemSelection(false);
                    }}
                  >
                    Cancel
                  </Button>
                </ModalDialog>
              </Modal>
              <Card
                sx={{ marginBottom: "20px" }}
                variant="outlined"
              >
                <CardContent>
                  <Grid
                    container
                    padding={0}
                  >
                    <Grid xs>
                      <Typography level="h5">
                        {itemSelection.length} Favorite Items
                      </Typography>
                      <Typography
                        my="5px"
                        startDecorator={<BsExclamationCircle />}
                        level="body2"
                      >
                        Only shows stored and available items.
                      </Typography>
                      <Typography
                        startDecorator={<BsExclamationTriangleFill />}
                        level="body2"
                      >
                        Players Inventory is not taken into account.
                      </Typography>
                    </Grid>
                    <Grid>
                      <Button
                        onClick={() => {
                          setTmpItemSelection(itemSelection);
                          setEditItemSelection(true);
                        }}
                        variant="outlined"
                        color="neutral"
                        size="sm"
                      >
                        Edit Favorites
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              {itemSelection && (
                <>
                  <Typography>{itemSelection.length}</Typography>
                  {worldInv ? (
                    <Grid
                      container
                      paddingY={0}
                      px={0}
                      spacing={2}
                    >
                      {worldInv.map((item) => {
                        if (itemSelection.includes(item.name)) {
                          return (
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
                                  <img
                                    src={`./assets/${
                                      fullRefs[item.name]?.category
                                    }/${item.name}.png`}
                                    alt=""
                                    style={{ height: "70px", width: "70px" }}
                                  />
                                  <Typography
                                    marginBottom="5px"
                                    textAlign="center"
                                  >
                                    {item.name}
                                  </Typography>
                                  <Typography level="body2">
                                    {item.amount} Items
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          );
                        }
                        return null;
                      })}
                    </Grid>
                  ) : (
                    <Grid
                      container
                      paddingY={0}
                      px={0}
                      spacing={2}
                      sx={{ opacity: 0.5 }}
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
                              sx={{}}
                              width="70px"
                              height="70px"
                            />

                            <Skeleton
                              variant="rounded"
                              sx={{ marginTop: "20px", marginBottom: "10px" }}
                              width="120px"
                              height="20px"
                            />
                            <Skeleton width="60px" />
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
                              sx={{}}
                              width="70px"
                              height="70px"
                            />

                            <Skeleton
                              variant="rounded"
                              sx={{ marginTop: "20px", marginBottom: "10px" }}
                              width="120px"
                              height="20px"
                            />
                            <Skeleton width="60px" />
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
                              sx={{}}
                              width="70px"
                              height="70px"
                            />

                            <Skeleton
                              variant="rounded"
                              sx={{ marginTop: "20px", marginBottom: "10px" }}
                              width="120px"
                              height="20px"
                            />
                            <Skeleton width="60px" />
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
                              sx={{}}
                              width="70px"
                              height="70px"
                            />

                            <Skeleton
                              variant="rounded"
                              sx={{ marginTop: "20px", marginBottom: "10px" }}
                              width="120px"
                              height="20px"
                            />
                            <Skeleton width="60px" />
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  )}
                </>
              )}
            </>
          )}
        </Grid>
        <Grid xs={6}>
          <AwesomeSink />
        </Grid>
      </Grid>
    </Container>
  );
};
