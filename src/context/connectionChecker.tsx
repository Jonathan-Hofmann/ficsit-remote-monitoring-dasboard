import {
  Alert,
  Button,
  Chip,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  Input,
  List,
  ListDivider,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Modal,
  ModalClose,
  ModalDialog,
  TextField,
  Tooltip,
  Typography,
} from "@mui/joy";
import { CircularProgress, Stack } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  BsCheckCircleFill,
  BsExclamationTriangleFill,
  BsFileRichtext,
  BsFileRuled,
  BsHammer,
  BsInfoCircle,
  BsInfoCircleFill,
  BsRecordCircle,
  BsSearch,
} from "react-icons/bs";
import { Link } from "react-router-dom";

import { useLocalStorage } from "../hooks/localStorage";
import { defaultSettingsData } from "../views/settings";

export type Info = {
  msInterval: number;
  checkConnectionToFRM: Function;
};

export const defaultValues: Info = {
  msInterval: 1000,
  checkConnectionToFRM: () => {},
};

export const ConnectionCheckerContext = createContext(defaultValues);

export const ConnectionCheckerProvider: React.FC<any> = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  let timeout: NodeJS.Timeout;

  // const [settings, _] = useLocalStorage("rmd_settings", defaultSettingsData);

  const [msInterval, setMsInterval] = useState(1000);
  const [loop, setLooping] = useState(true);

  const checkConnectionToFRM = async () => {
    clearTimeout(timeout);

    axios
      .get(
        `http://${
          JSON.parse(
            localStorage.getItem("rmd_settings") ??
              JSON.stringify(defaultSettingsData),
          ).ip
        }:${
          JSON.parse(
            localStorage.getItem("rmd_settings") ??
              JSON.stringify(defaultSettingsData),
          ).port
        }/getDoggo`,
      )
      .then(() => {
        console.log("[ConnectionChecker] Got data");
        setShowAlert(false);
      })
      .catch(() => {
        setShowAlert(true);
      });

    timeout = setTimeout(() => {
      if (loop) {
        checkConnectionToFRM();
      }
    }, 3000);
  };

  useEffect(() => {
    setShowAlert(false);
    checkConnectionToFRM();
  }, []);

  const state = useMemo(
    () => ({
      msInterval,
      checkConnectionToFRM,
    }),
    [msInterval],
  );

  return (
    <ConnectionCheckerContext.Provider value={state}>
      {showAlert === true && (
        <Container sx={{ paddingTop: "30px" }}>
          <Alert
            startDecorator={<BsExclamationTriangleFill />}
            endDecorator={
              <Button
                onClick={() => {
                  setShowAlert(false);
                  clearTimeout(timeout);
                  checkConnectionToFRM();
                }}
                variant="outlined"
              >
                Retry
              </Button>
            }
          >
            Could not connect to Satisfactory through{" "}
            <Box
              sx={{
                textDecoration: "underline",
                fontWeight: 400,
                marginX: "5px",
              }}
            >
              Ficsit Remote Monitoring
            </Box>{" "}
            Mod.
          </Alert>
        </Container>
      )}
      {props.children}
    </ConnectionCheckerContext.Provider>
  );
};
