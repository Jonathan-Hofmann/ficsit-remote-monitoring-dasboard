import { getCorrectCoordinateOnMap, rotatePolygon } from "@/helper/coordinates.helper";
import L, { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { Circle, Polyline, useMap } from "react-leaflet";

export const TestMark = ({pos}:{pos:any}) => {
    const [markerPos, setMarkerPos] = useState<any>(null)
    useEffect(()=>{
        const tmp = getCorrectCoordinateOnMap(pos.x, pos.y)

        console.log(tmp);

        setMarkerPos([tmp.y, tmp.x])
    }, [])
    return(
        <>
            {markerPos && <Circle center={markerPos} pathOptions={{color: "limegreen"}} radius={1} />}
        </>
    )
}

export const TestBelt = ({start, end}:{start:any, end:any}) => {
    const [markerPosStart, setMarkerPosStart] = useState<any>(null)
    const [markerPosEnd, setMarkerPosEnd] = useState<any>(null)
    useEffect(()=>{
        const tmpStart = getCorrectCoordinateOnMap(start.x, start.y)
        const tmpEnd = getCorrectCoordinateOnMap(end.x, end.y)

        console.log(tmpStart);
        console.log(tmpEnd);

        setMarkerPosStart([tmpStart.y, tmpStart.x])
        setMarkerPosEnd([tmpEnd.y, tmpEnd.x])
    }, [])
    return(
        <>
            {(markerPosStart && markerPosEnd) && <Polyline pathOptions={{
                color: "black",
            }} positions={[
                markerPosStart,
                markerPosEnd
            ]} />}
        </>
    )
}

export const BeltWithDirectionArrow = ({start, end}:{start:any, end:any}) => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const tmpStart = getCorrectCoordinateOnMap(start.x, start.y)
        const tmpEnd = getCorrectCoordinateOnMap(end.x, end.y)
    
        const p = L.polyline([[tmpStart.y, tmpStart.x], [tmpEnd.y, tmpEnd.x]], {color: "black", weight: 3}).addTo(map);  // added color property
        // @ts-ignore
        // p.setText('  ►  ', {repeat: true, attributes: {fill: 'orange'}});
    }, [map]);

    return(null)
}
