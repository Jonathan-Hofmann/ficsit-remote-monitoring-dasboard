import { Box, Button, FormControl, Paper, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useState } from "react";
import { BsArrowRight, BsArrowRightCircle, BsArrowRightCircleFill, BsArrowRightShort } from "react-icons/bs";

export const Start:React.FC = (props) => {
    const theme = useTheme();
    const [port, setPort] = useState(8080);
    return(
        <Box display={'flex'} style={{height: '80vh'}} justifyContent={'center'} alignItems={'center'}>
            <Paper sx={{padding: '40px'}}>
                <Typography textAlign={'center'} variant="h3">Welcome Pioneer!</Typography>
                <Typography textAlign={'center'} variant="body1" sx={{marginTop:'20px'}}>To start please enter the PORT on which the Ficsit Remote Monitoring is set. <br/>(Default 8080)</Typography>
                <FormControl sx={{marginTop:'30px'}} fullWidth>
                    <TextField
                    onChange={(e)=>setPort(parseInt(e.target.value))}
                    size="small"
                    id="outlined-required"
                    label="Port number"
                    defaultValue={port}
                    type={'number'}
                    />
                </FormControl>
                <Button disabled={isNaN(port)} endIcon={<BsArrowRightCircle size={'20px'}/>} variant="contained" size="large" sx={{marginTop:'30px'}} fullWidth>
                    {isNaN(port) ? "PORT IS REQUIRED" : "Using Port "+port}
                </Button>
            </Paper>
        </Box>
    )
}