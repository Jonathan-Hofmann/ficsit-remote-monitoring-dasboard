import { Box, Button, Typography } from "@mui/joy"
import React, { useEffect, useState } from "react"
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const SocketTestSite:React.FC = (props) => {
    
    const [socketUrl, setSocketUrl] = useState('ws://localhost:8081/');
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    const [messageHistory, setMessageHistory] = useState<any[]>([]);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];
    
    useEffect(() => {
        if (lastMessage !== null) {
            console.log(lastMessage);
            
        }
    }, [lastMessage, setMessageHistory]);
    
    return(
        <Box>
            <div>
                <Button onClick={()=>{sendMessage(JSON.stringify({
                "command":"getDoggo",
                // "arguments":{
                //     "argument1": "string1",
                //     "argument2": 1234
                // }
                }
                ))}}>send command</Button>
                <Typography>The WebSocket is currently {connectionStatus}</Typography>
                {lastMessage ? <Typography>Last message: {lastMessage.data}</Typography> : null}
            </div>
        </Box>
    )
}