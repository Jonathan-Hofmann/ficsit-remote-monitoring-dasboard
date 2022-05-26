import { Accordion, AccordionDetails, AccordionSummary, Card, CardHeader, Chip, Grid, Paper, Typography } from "@mui/material"
import { BsChevronBarUp, BsChevronDown } from "react-icons/bs"
import { Link } from "react-router-dom"


interface Props {
    factorys: any[]
}

export const FactoryTypeCol:React.FC<Props> = (props) => {
    return(
        <Grid item xs={12} md={6} lg={4} xl={4}>
            <Paper elevation={1} sx={{padding:'20px'}}>
                <Grid container display={'flex'} alignItems={'center'} sx={{marginBottom: '15px'}}>
                    <Grid item xs>
                        <Typography variant="h5">{props.factorys[0].building} </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color={'text.secondary'}>{props.factorys.length}</Typography>
                    </Grid>
                </Grid>
                <Accordion elevation={1} sx={{shadow: 'none', boxShadow: 'none', padding: '0'}}>
                    <AccordionSummary
                    sx={{padding: '0'}}
                    expandIcon={<BsChevronDown size={'20px'} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>See all {props.factorys[0].building}s</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                    sx={{padding: '0'}}>
                        {props.factorys.map((factory:any, i:number)=>{
                            return(
                                <Link to={"/building"} state={{data: factory}} style={{textDecoration: 'none'}}>
                                    <Card variant="outlined" sx={{padding: '15px', marginBottom: '10px'}}>
                                        <Grid container display={'flex'} alignItems={'center'} sx={{marginBottom: '15px'}}>
                                            <Grid item xs>
                                                <Typography fontWeight={600}>{factory.building} #{i+1}</Typography>
                                            </Grid>
                                            <Grid item>
                                                {factory.IsConfigured === true && factory.IsProducing === true && factory.IsPaused === false ? <Chip size="small" color="success" label="ON"/> : <Chip size="small" color="error" label="OFF"/>}
                                            </Grid>
                                        </Grid>
                                        <Grid container display={'flex'} alignItems={'center'}>
                                            <Grid item xs>
                                                <Typography color={'text.secondary'} variant="body2">Producing:</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography color={'text.secondary'} variant="body2">{factory.Recipe}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Link>
                            )
                        })}
                    </AccordionDetails>
                </Accordion>
                
            </Paper>
        </Grid>
    )
}