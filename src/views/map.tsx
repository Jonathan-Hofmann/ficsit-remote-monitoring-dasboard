import { MapContainer, useMap } from 'react-leaflet';
import {
  CRS,
  Icon,
  LatLng,
  Marker,
  LayerGroup,
  Popup,
  imageOverlay,
  Map,
} from 'leaflet';
import React from 'react';
import Typography from '@mui/material/Typography/Typography';
import Box from '@mui/material/Box/Box';
import ReactDOMServer from 'react-dom/server';
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';
import Button from '@mui/material/Button/Button';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import Card from '@mui/material/Card/Card';
import ListItem from '@mui/material/ListItem/ListItem';
import List from '@mui/material/List/List';
import CardContent from '@mui/material/CardContent/CardContent';
import { BsDash, BsLayers, BsPerson, BsPlus } from 'react-icons/bs';

const playerGroup = new LayerGroup();
const droneGroup = new LayerGroup();
const droneStationGroup = new LayerGroup();
const trainGroup = new LayerGroup();
const trainStationGroup = new LayerGroup();
const vehicleGroup = new LayerGroup();
const radarTowerGroup = new LayerGroup();
const powerSlugGroup = new LayerGroup();
const truckStationGroup = new LayerGroup();
const spaceElevatorGroup = new LayerGroup();

function Map_Comp() {
  const [map, setMap] = React.useState<null|Map>(null);
  const [playersShown, setPlayersShown] = React.useState(true);

  const train = new Icon({
    iconUrl: '/assets/Map/train.png',
  });

  const train_station = new Icon({
    iconUrl: '/assets/Map/train_station.png',
  });

  const player = new Icon({
    iconUrl: '/assets/Map/player.png',
  });

  const player_dead = new Icon({
    iconUrl: '/assets/Map/player_dead.png',
  });

  const truck = new Icon({
    iconUrl: '/assets/Map/truck.png',
  });

  const truck_station = new Icon({
    iconUrl: '/assets/Map/truck_station.png',
  });

  const explorer = new Icon({
    iconUrl: '/assets/Map/explorer.png',
  });

  const tractor = new Icon({
    iconUrl: '/assets/Map/tractor.png',
  });

  const drone = new Icon({
    iconUrl: '/assets/Map/drone.png',
  });

  const drone_station = new Icon({
    iconUrl: '/assets/Map/drone_station.png',
  });

  const power_slug = new Icon({
    iconUrl: '/assets/Map/power_slug.png',
  });

  const radar_tower = new Icon({
    iconUrl: '/assets/Map/radar_tower.png',
  });

  const space_elevator = new Icon({
    iconUrl: '/assets/Map/space_elevator.png',
  });

  const bounds: L.LatLngBoundsExpression = [
    [-375e3, -324698.832031],
    [375e3, 425301.832031],
  ];

  const layer = imageOverlay('/assets/Map/map.png', bounds);

  async function createRealtimeLayer(
    url: RequestInfo | URL,
    type: string,
    map: any
  ) {
    const response = await fetch('http://127.0.0.1:8080/' + url);
    const data = await response.text();
    const getGeo = JSON.parse(data);


    for (let i = 0; i < getGeo.length; i++) {
      try {
        const lat = (getGeo[i].location.y | getGeo[i].location.Y) * -1;
        const lon = getGeo[i].location.x | getGeo[i].location.X;
        const markerLocation = new LatLng(lat, lon);

        const marker = new Marker(markerLocation);
        let popupContent: () => JSX.Element | null = () => (
          <Card>
            <CardContent>
              <Typography variant="h2" gutterBottom>
                Sample Text
              </Typography>
            </CardContent>
          </Card>
        );

        switch (type) {
          case 'Player':
            console.log("Placing Player...");
            popupContent = () => (
              <Box>
                <Typography variant="h2" gutterBottom>
                  Player: {getGeo[i].PlayerName}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Ping Time: {getGeo[i].PingTime} ms
                </Typography>
              </Box>
            );

            if (getGeo[i].Dead) {
              marker.setIcon(player_dead);
            } else {
              marker.setIcon(player);
            }
            break;
          case 'Drone':
            popupContent = () => (
              <Box>
                <Typography variant="h2" gutterBottom>
                  Destination: {getGeo[i].CurrentDestination}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Flying Mode: {getGeo[i].CurrentFlyingMode}
                </Typography>
              </Box>
            );
            marker.setIcon(drone);
            break;
          case 'Trains':
            popupContent = () => (
              <Box>
                <Typography variant="h2" gutterBottom>
                  Train Name: {getGeo[i].Name}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Speed: {getGeo[i].ForwardSpeed}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Derailed: {getGeo[i].Derailed.toString()}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Train Station: {getGeo[i].TrainStation}
                </Typography>
              </Box>
            );
            marker.setIcon(train);
            break;
          case 'Vehicles':
            popupContent = () => (
              <Box>
                <Typography variant="h2" gutterBottom>
                  Vehicle Type: {getGeo[i].Name}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  AutoPilot: {getGeo[i].AutoPilot.toString()}
                </Typography>
              </Box>
            );

            switch (getGeo[i].Name) {
              case 'Explorer':
                marker.setIcon(explorer);
                break;
              case 'Truck':
                marker.setIcon(truck);
                break;
              case 'Tractor':
                marker.setIcon(tractor);
                break;
              default:
                marker.setIcon(explorer);
                break;
            }
            break;
          case 'Drone Station':
            popupContent = () => (
              <Box>
                <Typography variant="h2" gutterBottom>
                  Name: {getGeo[i].Name}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Paired Station: {getGeo[i].PairedStation}
                </Typography>
              </Box>
            );
            marker.setIcon(drone_station);
            break;
          case 'Train Stations':
            popupContent = () => (
              <Box>
                <Typography variant="h2" gutterBottom>
                  Name: {getGeo[i].Name}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  LoadingStatus: {getGeo[i].LoadingStatus}
                </Typography>
              </Box>
            );
            marker.setIcon(train_station);
            break;
          case 'Radar Tower':
            popupContent = () => (
              <Box>
                <Typography variant="h2" gutterBottom>
                  Name: {getGeo[i].Name}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  X: {getGeo[i].location.X.toString()}
                  Y: {getGeo[i].location.Y.toString()}
                  Z: {getGeo[i].location.Z.toString()}
                </Typography>
              </Box>
            );
            marker.setIcon(radar_tower);
            break;
          case 'Power Slug':
            popupContent = () => (
              <Box>
                <Typography variant="h2" gutterBottom>
                  Slug Type: {getGeo[i].SlugType}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  X: {getGeo[i].location.x.toString()}
                  Y: {getGeo[i].location.y.toString()}
                  Z: {getGeo[i].location.z.toString()}
                </Typography>
              </Box>
            );
            marker.setIcon(power_slug);
            break;
          case 'Truck Station':
            popupContent = () => (
              <Box>
                <Typography variant="h2" gutterBottom>
                  Name: {getGeo[i].Name}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Load Mode: {getGeo[i].LoadMode}
                </Typography>
              </Box>
            );
            marker.setIcon(truck_station);
            break;
          case 'Space Elevator':
            popupContent = () => (
              <Box>
                <Typography variant="h2" gutterBottom>
                  Name: {getGeo[i].Name}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Fully Upgraded: {getGeo[i].FullyUpgraded.toString()}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Upgrade Ready: {getGeo[i].UpgradeReady.toString()}
                </Typography>
              </Box>
            );
            marker.setIcon(space_elevator);
        }

        const markerOptions = { autoClose: false };
        const popup = new Popup(markerOptions).setContent(
          ReactDOMServer.renderToString(popupContent() || <></>)
        );
        marker.bindPopup(popup);
        marker.addTo(map);
      } catch {
        console.log(getGeo[i]);
      }
    }
  }

  function InitMap(map: any) {
    layer.addTo(map);
    playerGroup.addTo(map);
    droneGroup.addTo(map);
    droneStationGroup.addTo(map);
    trainGroup.addTo(map);
    trainStationGroup.addTo(map);
    vehicleGroup.addTo(map);
    radarTowerGroup.addTo(map);
    powerSlugGroup.addTo(map);
    truckStationGroup.addTo(map);
    spaceElevatorGroup.addTo(map);
    map.setView([0, 0], -13);

    updateMap(map);
  }

  function updateMap(map: any): void {
    if (map) {
      playerGroup.clearLayers();
    //   droneGroup.clearLayers();
    //   droneStationGroup.clearLayers();
    //   trainGroup.clearLayers();
    //   trainStationGroup.clearLayers();
    //   vehicleGroup.clearLayers();
    //   radarTowerGroup.clearLayers();
    //   powerSlugGroup.clearLayers();
    //   truckStationGroup.clearLayers();
    //   spaceElevatorGroup.clearLayers();

      createRealtimeLayer('getPlayer', 'Player', playerGroup);
    //   createRealtimeLayer('getDrone', 'Drone', droneGroup);
    //   createRealtimeLayer(
    //     'getDroneStation',
    //     'Drone Station',
    //     droneStationGroup
    //   );
    //   createRealtimeLayer('getTrains', 'Trains', trainGroup);
    //   createRealtimeLayer(
    //     'getTrainStation',
    //     'Train Stations',
    //     trainStationGroup
    //   );
    //   createRealtimeLayer('getVehicles', 'Vehicles', vehicleGroup);
    //   createRealtimeLayer('getRadarTower', 'Radar Tower', radarTowerGroup);
    //   createRealtimeLayer('getPowerSlug', 'Power Slug', powerSlugGroup);
    //   createRealtimeLayer(
    //     'getTruckStation',
    //     'Truck Station',
    //     truckStationGroup
    //   );
    //   createRealtimeLayer(
    //     'getSpaceElevator',
    //     'Space Elevator',
    //     spaceElevatorGroup
    //   );
    }
  }

  function MainMap() {
    setMap(useMap()); React.useEffect(() => {
    if (!map) return;
    InitMap(map);

    //   const interval = setInterval(() => {
    //     updateMap(map);
    //   }, 2500);
        updateMap(map);
    //   return () => clearInterval(interval);
    }, [map]);
    return null
  }

 

  function handleZoom(type:string) {
    if(!map)return;
    if (type == '+') {
      map.setZoom(map.getZoom() + 1);
    }
    if (type == '-') {
      map.setZoom(map.getZoom() - 1);
    }
  }

  function ZoomCtrl() {
    return (
      <Box
        sx={{
          top: 10,
          left: 10,
          position: 'absolute',
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          <Button
            id="+"
            onClick={() => {
              handleZoom('+');
            }}
          >
            <BsPlus />
          </Button>
          <Button
            id="-"
            onClick={() => {
              handleZoom('-');
            }}
          >
            <BsDash />
          </Button>
        </ButtonGroup>
      </Box>
    );
  }

  function handleLayer(e:any) {
    const layer = e.target.name;
    const enabled = e.target.checked;
    if(!map)return;
    switch (layer) {
      case 'playerGroup':
        if (enabled) {
          playerGroup.addTo(map);
        }
        if (!enabled) {
          playerGroup.removeFrom(map);
        }
        break;
      case 'droneGroup':
        if (enabled) {
          droneGroup.addTo(map);
        }
        if (!enabled) {
          droneGroup.removeFrom(map);
        }
        break;
      case 'droneStationGroup':
        if (enabled) {
          droneStationGroup.addTo(map);
        }
        if (!enabled) {
          droneStationGroup.removeFrom(map);
        }
        break;
      case 'trainGroup':
        if (enabled) {
          trainGroup.addTo(map);
        }
        if (!enabled) {
          trainGroup.removeFrom(map);
        }
        break;
      case 'trainStationGroup':
        if (enabled) {
          trainStationGroup.addTo(map);
        }
        if (!enabled) {
          trainStationGroup.removeFrom(map);
        }
        break;
      case 'vehicleGroup':
        if (enabled) {
          vehicleGroup.addTo(map);
        }
        if (!enabled) {
          vehicleGroup.removeFrom(map);
        }
        break;
      case 'radarTowerGroup':
        if (enabled) {
          radarTowerGroup.addTo(map);
        }
        if (!enabled) {
          radarTowerGroup.removeFrom(map);
        }
        break;
      case 'powerSlugGroup':
        if (enabled) {
          powerSlugGroup.addTo(map);
        }
        if (!enabled) {
          powerSlugGroup.removeFrom(map);
        }
        break;
      case 'truckStationGroup':
        if (enabled) {
          truckStationGroup.addTo(map);
        }
        if (!enabled) {
          truckStationGroup.removeFrom(map);
        }
        break;
      case 'spaceElevatorGroup':
        if (enabled) {
          spaceElevatorGroup.addTo(map);
        }
        if (!enabled) {
          spaceElevatorGroup.removeFrom(map);
        }
    }
  }

  function LayerCtrl() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <Box
        sx={{
          top: 10,
          right: 10,
          position: 'absolute',
        }}
      >
        <Button variant="contained" onClick={handleClick}>
          <BsLayers/>
        </Button>

        <Card
          sx={{
            position: 'absolute',
            right: 0,
          }}
          hidden={!open}
        >
          <List>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onClick={handleLayer}
                    name="playerGroup"
                    color="primary"
                  />
                }
                label="Player"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onClick={handleLayer}
                    name="droneGroup"
                    color="primary"
                  />
                }
                label="Drone"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onClick={handleLayer}
                    name="droneStationGroup"
                    color="primary"
                  />
                }
                label="Drone Station"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onClick={handleLayer}
                    name="trainGroup"
                    color="primary"
                  />
                }
                label="Train"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onClick={handleLayer}
                    name="trainStationGroup"
                    color="primary"
                  />
                }
                label="Train Station"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onClick={handleLayer}
                    name="vehicleGroup"
                    color="primary"
                  />
                }
                label="Vehicle"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onClick={handleLayer}
                    name="radarTowerGroup"
                    color="primary"
                  />
                }
                label="Radar Tower"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onClick={handleLayer}
                    name="powerSlugGroup"
                    color="primary"
                  />
                }
                label="Power Slug"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onClick={handleLayer}
                    name="truckStationGroup"
                    color="primary"
                  />
                }
                label="Truck Station"
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onClick={handleLayer}
                    name="spaceElevatorGroup"
                    color="primary"
                  />
                }
                label="Space Elevator"
              />
            </ListItem>
          </List>
        </Card>
      </Box>
    );
  }

  function PlayersCtrl() {
    const handleClick = () => {
      setPlayersShown(!playersShown);
    };

    return (
      <Box
        sx={{
          top: 50,
          right: 10,
          position: 'absolute',
        }}
      >
        <Button variant="contained" onClick={handleClick}>
          <BsPerson/>
        </Button>
      </Box>
    );
  }

  function Players() {
    const [players, setPlayers] = React.useState([]);

    React.useEffect(() => {
      const interval = setInterval(() => {
        fetch('http://localhost:8080/getPlayer')
          .then((res) => res.json())
          .then((data) => {
            const players = data.map((player:any) => {
              return {
                ID: player.ID,
                Name: player.PlayerName,
                X: player.location.x,
                Y: player.location.y,
                Z: player.location.z,
              };
            });
            setPlayers(players);
          });
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <Box
        sx={{
          position: 'fixed',
          top: '0',
          left: '25%',
          width: '50%',
          right: '25%',
        }}
        hidden={playersShown}
      >
        <Card>
          {/* <DataGrid
            rows={players}
            columns={[
              { field: 'ID', headerName: 'ID', width: 70 },
              { field: 'Name', headerName: 'Name', width: 150 },
              { field: 'X', headerName: 'X', width: 150 },
              { field: 'Y', headerName: 'Y', width: 150 },
              { field: 'Z', headerName: 'Z', width: 150 },
            ]}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            getRowId={(row) => row['ID']}
          /> */}
        </Card>
      </Box>
    );
  }

  return (
    <Box>
      <ZoomCtrl />
      <LayerCtrl />
      <PlayersCtrl />
      <Players />
      <MapContainer
        minZoom={-10}
        maxZoom={18}
        zoom={-2}
        center={[0, 0]}
        crs={CRS.Simple}
        style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          left: 0,
          zIndex: -1,
          background: 'red',
        }}
        zoomControl={false}
      >
        <MainMap />
      </MapContainer>
    </Box>
  );
}

export default Map_Comp;