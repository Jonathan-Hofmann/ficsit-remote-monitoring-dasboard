import { Button, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import {
  GiCargoCrate,
  GiDeliveryDrone,
  GiFactory,
  GiMineTruck,
  GiPowerGenerator,
} from "react-icons/gi";
import { TbTrain } from "react-icons/tb";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  "position": "relative",
  "borderRadius": theme.shape.borderRadius,
  "backgroundColor": alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  "marginLeft": 0,
  "width": "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "color": "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      "width": "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchAppBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ borderRadius: 0 }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Ficsit Remote Monitoring
          </Typography>

          <Stack
            display="flex"
            flexDirection="row"
          >
            <Link
              style={{ textDecoration: "none", marginRight: "10px" }}
              to="/power"
            >
              <Button
                color="primary"
                startIcon={<GiPowerGenerator />}
              >
                Power Screen
              </Button>
            </Link>
            <Link
              style={{ textDecoration: "none", marginRight: "10px" }}
              to="/production"
            >
              <Button startIcon={<GiFactory />}>Production</Button>
            </Link>
            <Link
              style={{ textDecoration: "none", marginRight: "10px" }}
              to="/drones"
            >
              <Button startIcon={<GiDeliveryDrone />}>Drones</Button>
            </Link>
            <Link
              style={{ textDecoration: "none", marginRight: "10px" }}
              to="/trains"
            >
              <Button startIcon={<TbTrain />}>Trains</Button>
            </Link>
            <Link
              style={{ textDecoration: "none", marginRight: "10px" }}
              to="/vehicles"
            >
              <Button startIcon={<GiMineTruck />}>Vehicles</Button>
            </Link>
            <Link
              style={{ textDecoration: "none", marginRight: "10px" }}
              to="/storageView"
            >
              <Button startIcon={<GiCargoCrate />}>Storage View</Button>
            </Link>
          </Stack>

          {/* <Search>
            <SearchIconWrapper>
              <BsSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
