import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { BsSearch } from 'react-icons/bs';
import { Button, Stack, Grid, IconButton,Box, Tooltip } from '@mui/joy';
import { Link } from 'react-router-dom';
import { GiCargoCrate, GiDeliveryDrone, GiFactory, GiMineTruck, GiPowerGenerator } from 'react-icons/gi';
import { TbTrain } from 'react-icons/tb';
import { BsList } from 'react-icons/bs';
import { useState } from 'react';

export const Sidebar = () => {

  const [isFullsize, setIsFullsize] = useState(false);

  return (
    <>
    <Box sx={{width: '180px', position: 'relative'}}></Box>
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
            <Grid container>
              <Grid xs>
    
              </Grid>
              <Grid>
                <IconButton onClick={()=>{setIsFullsize(false)}} color="neutral" variant='plain'>
                  <BsList/>
                </IconButton>
              </Grid>
            </Grid>
    
            <Link style={{textDecoration: 'none', marginRight:'10px'}} to="/power">
              <Button fullWidth variant='soft' startDecorator={<GiPowerGenerator/>}>
                Power Screen
              </Button>
            </Link>
            <Link style={{textDecoration: 'none', marginRight:'10px'}} to="/production">
              <Button fullWidth variant='soft' startDecorator={<GiFactory/>}>
                Production
              </Button>
            </Link>
            <Link style={{textDecoration: 'none', marginRight:'10px'}} to="/drones">
              <Button fullWidth variant='soft' startDecorator={<GiDeliveryDrone/>}>
                Drones
              </Button>
            </Link>
            <Link style={{textDecoration: 'none', marginRight:'10px'}} to="/trains">
              <Button fullWidth variant='soft' startDecorator={<TbTrain/>}>
                Trains
              </Button>
            </Link>
            <Link style={{textDecoration: 'none', marginRight:'10px'}} to="/vehicles">
              <Button fullWidth variant='soft' startDecorator={<GiMineTruck/>}>
                Vehicles
              </Button>
            </Link>
            <Link style={{textDecoration: 'none', marginRight:'10px'}} to="/storageView">
              <Button fullWidth variant='soft' startDecorator={<GiCargoCrate/>}>
                Storage View
              </Button>
            </Link>
            <Link style={{textDecoration: 'none', marginRight:'10px'}} to="/awesomeSink">
              <Button fullWidth variant='soft' startDecorator={<GiCargoCrate/>}>
                Awesome Sink
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
          <Stack spacing={2} alignItems={'center'}>
            <Tooltip placement='right' title="Expand Menu">
              <IconButton onClick={()=>{setIsFullsize(true)}} color="neutral" variant='plain'>
                <BsList/>
              </IconButton>
            </Tooltip>
    
            <Tooltip placement='right' title="Power Grids">
              <Link style={{textDecoration: 'none'}} to="/power">
                <IconButton variant='plain'>
                  <GiPowerGenerator/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip placement='right' title="All Factories">
              <Link style={{textDecoration: 'none'}} to="/production">
                <IconButton variant='plain'>
                  <GiFactory/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip placement='right' title="Drones">
              <Link style={{textDecoration: 'none'}} to="/drones">
                <IconButton variant='plain'>
                  <GiDeliveryDrone/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip placement='right' title="Trains">
              <Link style={{textDecoration: 'none'}} to="/trains">
                <IconButton variant='plain'>
                  <TbTrain/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip placement='right' title="Vehicles">
              <Link style={{textDecoration: 'none'}} to="/vehicles">
                <IconButton variant='plain' >
                  <GiMineTruck/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip placement='right' title="Storage View">
              <Link style={{textDecoration: 'none'}} to="/storageView">
                <IconButton variant='plain'>
                  <GiCargoCrate/>
                </IconButton>
              </Link>
            </Tooltip>
          </Stack>
        </Box>
      }
    </>


    /**
     * 
     * 
     */
  );
}
