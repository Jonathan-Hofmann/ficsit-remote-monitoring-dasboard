import { Grid, List, ListDivider, ListItem, ListItemDecorator, Modal, ModalClose, ModalDialog, TextField, Typography, Chip, ListItemContent, IconButton, Divider, Tooltip, FormControl, FormLabel, Input, Button, Alert, Container } from "@mui/joy";
import { CircularProgress, Stack  } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { createContext, useEffect, useMemo, useCallback, useState } from "react";
import { BsCheckCircleFill, BsExclamationTriangleFill, BsFileRichtext, BsFileRuled, BsHammer, BsInfoCircle, BsInfoCircleFill, BsRecordCircle, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";


export type Info = {
    msInterval: number
}

export const defaultValues: Info = {
    msInterval: 1000
}


export const ConnectionCheckerContext = createContext(defaultValues);

export const ConnectionCheckerProvider:React.FC<any> = (props) => {
    const [showAlert, setShowAlert] = useState(false);
    let timeout:NodeJS.Timeout;

    
    const [msInterval, setMsInterval] = useState(1000);
    const [loop, setLooping] = useState(true);

    const checkConnectionToFRM = async () => {

        axios.get("http://localhost:8080/getDoggo").then(()=>{
            console.log("[ConnectionChecker] Got data")
            setShowAlert(false);
        }).catch(()=>{
            setShowAlert(true);
        })  

        timeout = setTimeout(() => {
            if(loop){
                checkConnectionToFRM();
            }
        }, 5000);

    }

    useEffect(()=>{
        setShowAlert(false);
        checkConnectionToFRM();
    }, [])

    const state = useMemo(() => ({
        msInterval: msInterval
    }), [msInterval]);

    return(
        <ConnectionCheckerContext.Provider value={state}>
            {showAlert === true && 
                <Container sx={{paddingTop: '30px'}}>
                    <Alert startDecorator={<BsExclamationTriangleFill/>} endDecorator={<Button onClick={()=>{
                        setShowAlert(false);
                        clearTimeout(timeout);
                        checkConnectionToFRM();
                    }} variant="outlined">Retry</Button>}>Could not connect to Satisfactory through <Box sx={{textDecoration: 'underline', fontWeight: 400, marginX: '5px'}}>Ficsit Remote Monitoring</Box> Mod.</Alert>
                </Container>
            }
            {props.children}
        </ConnectionCheckerContext.Provider>
    )
}