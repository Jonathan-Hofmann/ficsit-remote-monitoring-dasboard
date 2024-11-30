import axios from "axios";
import { useEffect, useState } from "react";
import { BeltWithDirectionArrow } from "./test.markings";

export const BeltsOnMap = () => {
    
    const [beltsPos, setBeltsPos] = useState<any[]>()

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