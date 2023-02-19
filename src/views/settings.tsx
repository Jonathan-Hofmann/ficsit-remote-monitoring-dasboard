import { Card, CardContent, Container, Typography } from "@mui/joy";
import React from "react";

export const Settings:React.FC = (props) => {
    return(
        <Container>
            <Card>
                <CardContent>
                    <Typography level="h3">
                        Settings
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}