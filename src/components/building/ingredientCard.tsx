import { Card, CardContent, Grid, Typography } from "@mui/joy";
import React from "react";

export const IngredientCard:React.FC<{product:any, itemRefs:any}> = (props) => {
    return(
        <Card variant="outlined" sx={{padding: '3px'}}>
            <CardContent>
                <Grid spacing={2} container>
                    <Grid>
                        <img src={"/assets/"+props.itemRefs[props.product.Name]?.image ?? null} alt={props.product.Name} style={{height: '30px', width: '30px'}}></img>
                    </Grid>
                    <Grid xs>
                        <Grid spacing={0} container sx={{paddingTop:0}}>
                            <Grid xs>
                                <Typography level="body2">Current Consume</Typography>
                            </Grid>
                            <Grid>
                                {props.product.CurrentConsumed}
                            </Grid>
                        </Grid>
                        <Grid spacing={0} container sx={{paddingTop:0}}>
                            <Grid xs>
                                <Typography level="body2">Max. Consume</Typography>
                            </Grid>
                            <Grid>
                                {props.product.MaxConsumed}
                            </Grid>
                        </Grid>
                        <Grid spacing={0} container sx={{paddingTop:0}}>
                            <Grid xs>
                                <Typography level="body2">Efficency Consume</Typography>
                            </Grid>
                            <Grid>
                                {Math.floor(props.product.ConsPercent)} %
                            </Grid>
                        </Grid>
                        <Grid spacing={0} container sx={{paddingY:0}}>
                            <Grid xs>
                                <Typography level="body2">Input Inventory</Typography>
                            </Grid>
                            <Grid>
                                {props.product.Inventory}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
} 