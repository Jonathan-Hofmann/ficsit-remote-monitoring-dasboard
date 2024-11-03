import { Card, CardContent, Chip, Grid, Typography } from "@mui/joy";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { BsChevronBarUp, BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
  factorys: any[];
};

export const FactoryTypeCol: React.FC<Props> = (props) => {
  return (
    <Grid
      xs={12}
      md={6}
      lg={4}
      xl={4}
    >
      <Card sx={{ padding: "20px" }}>
        <CardContent>
          <Grid
            container
            display="flex"
            alignItems="center"
            sx={{ marginBottom: "15px" }}
          >
            <Grid xs>
              <Typography level="h5">{props.factorys[0].building} </Typography>
            </Grid>
            <Grid>
              <Typography>{props.factorys.length}</Typography>
            </Grid>
          </Grid>
          <Accordion
            sx={{
              shadow: "none",
              boxShadow: "none",
              padding: "0",
              backgroundColor: "var(--joy-palette-background-surface)",
              backgroundImage: "none",
            }}
          >
            <AccordionSummary
              sx={{ padding: "0" }}
              expandIcon={<BsChevronDown size="20px" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>See all {props.factorys[0].building}s</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "0" }}>
              {props.factorys.map((factory: any, i: number) => {
                return (
                  <Link
                    to="/building"
                    state={{ data: factory }}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      variant="outlined"
                      sx={{ padding: "15px", marginBottom: "10px" }}
                    >
                      <Grid
                        container
                        display="flex"
                        alignItems="center"
                        sx={{ marginBottom: "15px" }}
                      >
                        <Grid xs>
                          <Typography fontWeight={600}>
                            {factory.building} #{i + 1}
                          </Typography>
                        </Grid>
                        <Grid>
                          {factory.IsConfigured === true &&
                          factory.IsProducing === true &&
                          factory.IsPaused === false ? (
                            <Chip
                              size="sm"
                              color="success"
                            >
                              ON
                            </Chip>
                          ) : (
                            <Chip
                              size="sm"
                              color="danger"
                            >
                              OFF
                            </Chip>
                          )}
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        display="flex"
                        alignItems="center"
                      >
                        <Grid xs>
                          <Typography level="body2">Producing:</Typography>
                        </Grid>
                        <Grid>
                          <Typography level="body2">
                            {factory.Recipe}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Link>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Grid>
  );
};
