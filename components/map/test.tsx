"use client"

import L, { LatLng, LatLngBounds } from 'leaflet'
import 'leaflet-textpath';
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import { ImageOverlay, MapContainer, TileLayer, useMapEvent, useMapEvents } from 'react-leaflet'
import { MapTestInner } from './test.inner'
import { v4 } from 'uuid'
import { AssemblersOnMap } from './assembler';
import { BeltsOnMap } from './belts';
import { ConstructorsOnMap } from './constructors';
import { SmeltersOnMap } from './smelter';

const SatisfacoryMapTest = () => {
    // const bounds = [[-3246,-3750], [4253,3750]]
    const bounds = [[0,0], [-240.5,249]]

    return(
        <div className='w-[calc(100vw_-_70px)] h-screen bg-red-500'>
            <MapContainer
                key={v4()}
                className=" w-[calc(100vw_-_70px)] h-screen"
                bounds={bounds as unknown as LatLngBounds}
                maxBounds={bounds as unknown as LatLngBounds}
                center={[-64,183]}
                zoom={6}
                minZoom={0}
                maxZoom={7}
                scrollWheelZoom={true}
                crs={L.CRS.Simple}
            >
                <TileLayer className=""
                    url="/map/v1/{z}/{x}/{y}.png"
                />

                {/* <MapTestInner/> */}

                <AssemblersOnMap/>
                <BeltsOnMap/>
                <ConstructorsOnMap/>
                <SmeltersOnMap/>

            </MapContainer>
        </div>
    )
}

export default SatisfacoryMapTest