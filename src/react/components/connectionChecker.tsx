import { Alert, Button, Container } from "@mui/joy";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";

import { EndpointEnum } from "../../enums/endpoint.enum";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import type { PlayerDto } from "../../types/apis/dataTransferObject/playerDto";
import type { PlayerFm } from "../../types/apis/frontModel/playerFm";

type Props = {
  children: React.ReactElement;
};

export const ConnectionChecker: React.FC<Props> = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [skip, setSkip] = useState(false);

  const response = useAutoRefetch<PlayerDto[], PlayerFm[]>(
    EndpointEnum.PLAYER,
    skip,
  );

  useEffect(() => {
    if (response.success) {
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  }, [response]);

  if (!showAlert) return children;

  return (
    <>
      <Container sx={{ paddingTop: "30px" }}>
        <Alert
          startDecorator={<BsExclamationTriangleFill />}
          endDecorator={
            <Button
              onClick={() => {
                setSkip(true);
                setTimeout(() => setSkip(false), 10);
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
      {children}
    </>
  );
};
