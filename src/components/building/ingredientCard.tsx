import { Card, CardContent, Grid, Typography } from "@mui/joy";
import React from "react";

export const IngredientCard:React.FC<{product:any, fullRefs:any}> = (props) => {
    let exists = false
    if(props.fullRefs[props.product.Name]!=null){
        exists = true
    }
    return(
        <Card variant="outlined" sx={{padding: '3px', borderColor: Math.floor(props.product.Amount) === 0 ? "var(--joy-palette-error-main)": "var(--joy-palette-neutral-outlinedBorder)", borderWidth: Math.floor(props.product.Inventory) === 0 ? "3px": "1px"}}>
            <CardContent>
                <Typography level="body1" alignSelf="center" sx={{paddingTop: '3px', paddingBottom:'2px'}}>{props.product.Name}</Typography>
                <Grid spacing={2} sx={{paddingTop:'2px'}} container>
                    <Grid>
                        <img src={exists ? "/assets/"+props.fullRefs[props.product.Name].category+"/"+props.product.Name+".png" : undefined} alt={props.product.Name} style={{height: '30px', width: '30px'}}></img>
                    </Grid>
                    <Grid xs>
                        <Grid spacing={0} container sx={{paddingTop:0}}>
                            <Grid xs>
                                <Typography level="body2">Current Consumed</Typography>
                            </Grid>
                            <Grid>
                                <Typography>{(exists ? (props.fullRefs[props.product.Name].type === 'l' ? Math.round(props.product.CurrentConsumed / 10) / 100 + ' m³' : props.product.CurrentConsumed.toFixed(2)) : props.product.CurrentConsumed.toFixed(2))+'/min'}</Typography>
                            </Grid>
                        </Grid>
                        <Grid spacing={0} container sx={{paddingTop:0}}>
                            <Grid xs>
                                <Typography level="body2">Max Consumed</Typography>
                            </Grid>
                            <Grid>
                                <Typography>{(exists ? (props.fullRefs[props.product.Name].type === 'l' ? Math.round(props.product.MaxConsumed / 10) / 100 + ' m³' : props.product.MaxConsumed.toFixed(2)) : props.product.MaxConsumed.toFixed(2))+'/min'}</Typography>
                            </Grid>
                        </Grid>
                        <Grid spacing={0} container sx={{paddingTop:0}}>
                            <Grid xs>
                                <Typography level="body2">Efficency Consume</Typography>
                            </Grid>
                            <Grid>
                                <Typography>{props.product.ConsPercent.toFixed(2)} %</Typography>
                            </Grid>
                        </Grid>
                        <Grid spacing={0} container  sx={{color: Math.floor(props.product.Amount) === 0 ? "var(--joy-palette-error-main)": "var(--joy-palette-text-main)", paddingY:0}}>
                            <Grid xs>
                                <Typography level="body2">Input Inventory</Typography>
                            </Grid>
                            <Grid>
                                {exists ? (props.fullRefs[props.product.Name].type === 'l' ? Math.round(props.product.Amount / 10) / 100 + ' m³' : props.product.Amount) : props.product.Amount}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
} 