import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/joy";
import React, { type ReactElement, useState } from "react";
import {
  BsGearFill,
  BsGridFill,
  BsLightningFill,
  BsList,
} from "react-icons/bs";
import { FaBoxes, FaTruck } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { MdTrain } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { TbDrone } from "react-icons/tb";
import { Link } from "react-router-dom";

type LinksGroup = {
  path: string;
  label: string;
  icon: ReactElement;
  isDisabled: boolean;
};

export const Sidebar: React.FC = () => {
  const [isFullsize, setIsFullsize] = useState(false);

  const linksGroup: LinksGroup[][] = [
    [
      {
        path: "/",
        label: "Overview",
        icon: <BsGridFill />,
        isDisabled: false,
      },
      {
        path: "/power",
        label: "Power Screen",
        icon: <BsLightningFill />,
        isDisabled: false,
      },
      {
        path: "/production",
        label: "Production",
        icon: <GiFactory />,
        isDisabled: false,
      },
      {
        path: "/vehicles",
        label: "Vehicles",
        icon: <FaTruck />,
        isDisabled: false,
      },
      {
        path: "/drones",
        label: "Drones",
        icon: <TbDrone />,
        isDisabled: false,
      },
      {
        path: "/trains",
        label: "Trains",
        icon: <MdTrain />,
        isDisabled: false,
      },
      {
        path: "/storageView",
        label: "Storage View",
        icon: <FaBoxes />,
        isDisabled: false,
      },
      {
        path: "/awesomeSink",
        label: "Awesome Sink",
        icon: <RiCoupon2Fill />,
        isDisabled: false,
      },
    ],
    [
      {
        path: "/settings",
        label: "Settings",
        icon: <BsGearFill />,
        isDisabled: false,
      },
    ],
  ];

  return (
    <Box
      sx={{
        width: isFullsize ? "180px" : undefined,
        height: "100vh",
        position: "sticky",
        top: "0px",
        bottom: "0px",
        left: "0px",
        backgroundColor: "var(--joy-palette-background-surface)",
        padding: "12px",
      }}
    >
      <Stack spacing={isFullsize ? 2 : 1}>
        {isFullsize ? (
          <Grid
            container
            display="flex"
            alignItems="center"
          >
            <Grid marginRight="6px">
              <IconButton
                onClick={() => {
                  setIsFullsize(false);
                }}
                color="neutral"
                variant="plain"
              >
                <BsList />
              </IconButton>
            </Grid>
            <Grid xs>
              <Typography level="h4">FRM Dashboard</Typography>
            </Grid>
          </Grid>
        ) : (
          <Tooltip
            placement="right"
            title="Expand Menu"
          >
            <IconButton
              size="lg"
              onClick={() => {
                setIsFullsize(true);
              }}
              color="neutral"
              variant="plain"
            >
              <BsList />
            </IconButton>
          </Tooltip>
        )}
        {linksGroup.map((group) => {
          return (
            <React.Fragment key={crypto.randomUUID()}>
              <Divider />
              {group.map((link) => {
                if (link.isDisabled) return null;
                if (isFullsize) {
                  return (
                    <Link
                      key={link.path}
                      style={{ textDecoration: "none" }}
                      to={link.path}
                    >
                      <Button
                        fullWidth
                        color="neutral"
                        variant="soft"
                        sx={{ display: "flex", justifyContent: "flex-start" }}
                        startDecorator={link.icon}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Tooltip
                    key={link.path}
                    placement="right"
                    title={link.label}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to={link.path}
                    >
                      <IconButton
                        size="lg"
                        color="neutral"
                        variant="plain"
                      >
                        {link.icon}
                      </IconButton>
                    </Link>
                  </Tooltip>
                );
              })}
            </React.Fragment>
          );
        })}
      </Stack>
    </Box>
  );
};
