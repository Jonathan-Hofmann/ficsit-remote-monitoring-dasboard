import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { BsArrowBarLeft, BsGearFill, BsGridFill, BsLightningFill, BsSearch, BsTruck } from 'react-icons/bs';
import { Button, Stack, Grid, IconButton,Box, Tooltip, Divider, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import { GiCargoCrate, GiDeliveryDrone, GiFactory, GiMineTruck, GiPowerGenerator } from 'react-icons/gi';
import { TbDrone, TbTrain } from 'react-icons/tb';
import { BsList } from 'react-icons/bs';
import { MdTrain } from 'react-icons/md';
import { FaBoxes, FaTruck } from 'react-icons/fa';
import { useState } from 'react';

export const Sidebar = () => {

  const [isFullsize, setIsFullsize] = useState(false);

  return (
    <>
      {isFullsize ? 
        <Box sx={{
          width: '180px',
          height: '100vh',
          position: 'sticky',
          top: '0px',
          bottom: '0px',
          Left: '0px',
          backgroundColor: 'var(--joy-palette-background-surface)',
          padding: '16px'
        }}>
          <Stack spacing={2}>
            <Grid container display={'flex'} alignItems={'center'}>
              <Grid xs>
                <Typography level='h6'>FRM Dashboard</Typography>
              </Grid>
              <Grid>
                <IconButton onClick={()=>{setIsFullsize(false)}} color="neutral" variant='plain'>
                  <BsList/>
                </IconButton>
              </Grid>
            </Grid>
    
            <Link style={{textDecoration: 'none'}} to="/">
              <Button fullWidth color='neutral' variant='soft' sx={{display: 'flex', justifyContent: 'flex-start'}} startDecorator={<BsGridFill/>}>
                Overview
              </Button>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/power">
              <Button fullWidth color='neutral' variant='soft' sx={{display: 'flex', justifyContent: 'flex-start'}} startDecorator={<BsLightningFill/>}>
                Power Screen
              </Button>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/production">
              <Button fullWidth color='neutral' variant='soft' sx={{display: 'flex', justifyContent: 'flex-start'}} startDecorator={<GiFactory/>}>
                Production
              </Button>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/drones">
              <Button fullWidth color='neutral' variant='soft' sx={{display: 'flex', justifyContent: 'flex-start'}} startDecorator={<TbDrone/>}>
                Drones
              </Button>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/trains">
              <Button fullWidth color='neutral' variant='soft' sx={{display: 'flex', justifyContent: 'flex-start'}} startDecorator={<MdTrain/>}>
                Trains
              </Button>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/vehicles">
              <Button fullWidth color='neutral' variant='soft' sx={{display: 'flex', justifyContent: 'flex-start'}} startDecorator={<FaTruck/>}>
                Vehicles
              </Button>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/storageView">
              <Button fullWidth color='neutral' variant='soft' sx={{display: 'flex', justifyContent: 'flex-start'}} startDecorator={<FaBoxes/>}>
                Storage View
              </Button>
            </Link>

            
            <Link style={{textDecoration: 'none', marginTop: '50px'}} to="/settings">
              <Button fullWidth color='neutral' variant='soft' sx={{display: 'flex', justifyContent: 'flex-start'}} startDecorator={<BsGearFill/>}>
                Settings
              </Button>
            </Link>
          </Stack>
        </Box>
      :
        <Box sx={{
          // width: '180px',
          height: '100vh',
          position: 'fixed',
          top: '0px',
          bottom: '0px',
          Left: '0px',
          backgroundColor: 'var(--joy-palette-background-surface)',
          padding: '15px'
        }}>
          <Stack spacing={1} alignItems={'center'}>
            <Tooltip placement='right' title="Expand Menu">
              <IconButton size="lg" onClick={()=>{setIsFullsize(true)}} color="neutral" variant='plain'>
                <BsList/>
              </IconButton>
            </Tooltip>
    
            <Tooltip placement='right' title="Overview">
              <Link style={{textDecoration: 'none'}} to="/">
                <IconButton size="lg" color='neutral' variant='plain'>
                  <BsGridFill/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip placement='right' title="Power Grids">
              <Link style={{textDecoration: 'none'}} to="/power">
                <IconButton size="lg" color='neutral' variant='plain'>
                  <BsLightningFill/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip placement='right' title="All Factories">
              <Link style={{textDecoration: 'none'}} to="/production">
                <IconButton size="lg" color='neutral' variant='plain'>
                  <GiFactory/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip placement='right' title="Drones">
              <Link style={{textDecoration: 'none'}} to="/drones">
                <IconButton size="lg" color='neutral' variant='plain'>
                  <TbDrone/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip placement='right' title="Trains">
              <Link style={{textDecoration: 'none'}} to="/trains">
                <IconButton size="lg" color='neutral' variant='plain'>
                  <MdTrain/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip placement='right' title="Vehicles">
              <Link style={{textDecoration: 'none'}} to="/vehicles">
                <IconButton size="lg" color='neutral' variant='plain' >
                  <FaTruck/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip placement='right' title="Storage View">
              <Link style={{textDecoration: 'none'}} to="/storageView">
                <IconButton size="lg" color='neutral' variant='plain'>
                  <FaBoxes/>
                </IconButton>
              </Link>
            </Tooltip>

            <Divider/>

            <Tooltip placement='right' title="Settings">
              <Link style={{textDecoration: 'none'}} to="/settings">
                <IconButton size="lg" color='neutral' variant='plain'>
                  <BsGearFill/>
                </IconButton>
              </Link>
            </Tooltip>
          </Stack>
        </Box>
      }
    </>
  );
}
