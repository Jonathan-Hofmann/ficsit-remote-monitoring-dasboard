import { CardContent, FormLabel, Input } from "@mui/joy";
import { Box, Button, FormControl, Card, TextField, Typography } from "@mui/joy";
import React, { useState } from "react";
import { BsArrowRight, BsArrowRightCircle, BsArrowRightCircleFill, BsArrowRightShort } from "react-icons/bs";

export const Start:React.FC = (props) => {
    const [port, setPort] = useState(8080);
    return(
        <Box display={'flex'} style={{height: '80vh'}} justifyContent={'center'} alignItems={'center'}>
            <Card sx={{padding: '40px'}}>
                <CardContent>
                    <Typography textAlign={'center'} level="h3">Welcome Pioneer!</Typography>
                    <Typography textAlign={'center'} level="body1" sx={{marginTop:'20px'}}>To start please enter the PORT on which the Ficsit Remote Monitoring is set. <br/>(Default 8080)</Typography>
                    <FormControl sx={{marginTop:'30px'}}>
                        <FormLabel>Port number</FormLabel>
                        <Input
                        onChange={(e)=>setPort(parseInt(e.target.value))}
                        defaultValue={port}
                        type={'number'}
                        />
                    </FormControl>
                    <Button disabled={isNaN(port)} endDecorator={<BsArrowRightCircle size={'20px'}/>} sx={{marginTop:'30px'}} fullWidth>
                        {isNaN(port) ? "PORT IS REQUIRED" : "Using Port "+port}
                    </Button>
                </CardContent>
            </Card>
        </Box>
    )
}