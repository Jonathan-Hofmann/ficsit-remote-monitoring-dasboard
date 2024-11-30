import { getCorrectCoordinateOnMap } from "@/helper/coordinates.helper";
import { useEffect, useState } from "react";
import { Circle, Marker, Popup, useMapEvents } from "react-leaflet";
import { TestBelt, BeltWithDirectionArrow, TestMark } from "./test.markings";
import axios from "axios";

export const MapTestInner = () => {

    const locations = [
        {
            x: -3246,
            y: -3750
        },
        {
            x: 2292.9658036,
            y: -1765.1982641
        },
        {
            x: 2358.8021008,
            y: -1871.3938866
        },
        {
            x: 1207.8120070,
            y: -1380.9154896
        },
        {
            x: -239.0912482,
            y: -1868.3075596
        },
        {
            x: -1251.8822135,
            y: -1061.9555770
        }
    ]

    const [pos, setPos] = useState<any>({lat:0, lng:0})
    const [beltsPos, setBeltsPos] = useState<any[]>()

    useMapEvents({
        mousemove: (ev)=>{
            setPos(ev.latlng);
        }
    })

    const handleLoadBelts = async () => {
        const belts:any[] = [];
        const resp = await axios.get("http://localhost:8080/getBelts");

        console.log(resp.data);

        for (let i = 0; i < resp.data.length; i++) {
            const belt = resp.data[i];
            
            const startPos = {x:belt.features.geometry.coordinates.x/100, y:belt.features.geometry.coordinates.y/100};
            let endPos = {x:0, y:0};

            // if(belt.location1.X === 0 || belt.location1.Y === 0){
            //     // Belt is on Foundation & on world grid.


            // } else {
            //     // Belt is positioned by Hand
            //     endPos = {x:belt.location1.x, y:belt.location1.y}
            // }
            endPos = {x:(belt.features.geometry.coordinates.x + belt.location1.x)/100, y:(belt.features.geometry.coordinates.y + belt.location1.y)/100}

            console.log({
                start: startPos,
                end: endPos
            })

            belts.push({
                start: startPos,
                end: endPos
            })
        }

        setBeltsPos(belts);
    }

    useEffect(()=>{
        handleLoadBelts()
    },[])

    return(
        <>
        
            <div className="absolute top-2 right-2 z-[999999]">
                <p className="text-black">{pos.lat} - {pos.lng}</p>
            </div>

            {locations.map((pos)=>{
                return(<TestMark pos={pos}/>)
            })}

            {beltsPos && 
                <>
                    {beltsPos.map((belt)=>{
                        return(<BeltWithDirectionArrow start={belt.start} end={belt.end}/>)
                    })}
                </>
            }

        </>
    )
}