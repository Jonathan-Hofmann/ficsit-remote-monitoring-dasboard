import { Card, CardContent, Grid, Typography } from "@mui/joy";
import React from "react";

export const ProductionCard:React.FC<{product:any, itemRefs:any}> = (props) => {
    return(
        <Card variant="outlined" sx={{padding: '3px', borderColor: Math.floor(props.product.Inventory) > 50 ? "var(--joy-palette-warning-main)": "var(--joy-palette-neutral-outlinedBorder)", borderWidth: Math.floor(props.product.Inventory) > 50 ? "3px": "1px"}}>
            <CardContent>
                <Grid spacing={2} container>
                    <Grid>
                        <img src={"/assets/"+props.itemRefs[props.product.Name]?.image ?? null} alt={props.product.Name} style={{height: '30px', width: '30px'}}></img>
                    </Grid>
                    <Grid xs>
                        <Grid spacing={0} container sx={{paddingTop:0}}>
                            <Grid xs>
                                <Typography level="body2">Current Production</Typography>
                            </Grid>
                            <Grid>
                                <Typography>{props.product.CurrentProd}</Typography>
                            </Grid>
                        </Grid>
                        <Grid spacing={0} container sx={{paddingTop:0}}>
                            <Grid xs>
                                <Typography level="body2">Max. Production</Typography>
                            </Grid>
                            <Grid>
                                <Typography>{props.product.MaxProd}</Typography>
                            </Grid>
                        </Grid>
                        <Grid spacing={0} container sx={{paddingTop:0}}>
                            <Grid xs>
                                <Typography level="body2">Efficency Production</Typography>
                            </Grid>
                            <Grid>
                                <Typography>{Math.floor(props.product.ProdPercent)} %</Typography>
                            </Grid>
                        </Grid>
                        <Grid spacing={0} container sx={{paddingY:0}}>
                            <Grid xs>
                                <Typography level="body2">Output Inventory</Typography>
                            </Grid>
                            <Grid>
                                <Typography sx={{color: Math.floor(props.product.Inventory) > 50 ? "var(--joy-palette-warning-main)": "var(--joy-palette-text-main)"}}>{props.product.Inventory}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
} 