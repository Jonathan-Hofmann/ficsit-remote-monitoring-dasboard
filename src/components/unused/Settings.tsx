import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
} from "@mui/joy";
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BsHammer } from "react-icons/bs";

type Info = {
  msInterval: number;
};

const defaultValues: Info = {
  msInterval: 1000,
};

const SettingsContext = createContext(defaultValues);

type Props = {
  children: React.ReactElement;
};

const SettingsProvider: React.FC<Props> = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);

  const [msInterval, setMsInterval] = useState(1000);

  // handle what happens on key press
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    console.log(`Key pressed: ${event.key}`);
    console.log(`Second Key: ${event.ctrlKey}`);
    if (event.code === "Space" && event.ctrlKey) {
      setShowSettings(true);
    }
    if (event.code === "Escape" && showSettings) {
      setShowSettings(false);
    }
  }, []);

  const state = useMemo(
    () => ({
      msInterval,
    }),
    [msInterval],
  );

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <SettingsContext.Provider value={state}>
      <Modal
        open={showSettings}
        onClose={() => {
          setShowSettings(false);
        }}
      >
        <ModalDialog sx={{ width: "100%", maxWidth: "350px" }}>
          <ModalClose />
          <Typography
            level="h6"
            marginBottom="15px"
          >
            Global Settings
          </Typography>
          <FormControl>
            <FormLabel>Interval for updates (in ms)</FormLabel>
            <Input
              value={msInterval}
              onChange={(e) => {
                setMsInterval(parseInt(e.target.value));
              }}
            />
          </FormControl>
        </ModalDialog>
      </Modal>
      {showSettings === false && (
        <Button
          onClick={() => {
            setShowSettings(true);
          }}
          sx={{ position: "fixed", right: "20px", bottom: "20px" }}
          startDecorator={<BsHammer />}
          color="neutral"
          variant="soft"
        >
          Open Global Settings
        </Button>
      )}
      {children}
    </SettingsContext.Provider>
  );
};
