import { getCorrectCoordinateOnMap, rotatePolygon } from "@/helper/coordinates.helper";
import L, { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const MarkAssemblersSimple = ({pos, angle}:{pos:{x:number,y:number}, angle:number}) => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const t_l = [pos.x-5, pos.y+3]
        const t_r = [pos.x+5, pos.y+3]
        const b_l = [pos.x-5, pos.y-3]
        const b_r = [pos.x+5, pos.y-3]

        const t_l_point = getCorrectCoordinateOnMap(t_l[0], t_l[1])
        const t_r_point = getCorrectCoordinateOnMap(t_r[0], t_r[1])
        const b_l_point = getCorrectCoordinateOnMap(b_l[0], b_l[1])
        const b_r_point = getCorrectCoordinateOnMap(b_r[0], b_r[1])

        const polyLines:[number, number][] = [
            [t_l_point.y, t_l_point.x],
            [t_r_point.y, t_r_point.x],
            [b_r_point.y, b_r_point.x],
            [b_l_point.y, b_l_point.x]
        ]

        const points = rotatePolygon(polyLines, angle);
    
        const p = L.polygon(points as unknown as LatLngExpression[], {color: "red", weight: 2}).addTo(map);
    }, [map]);

    return(null)
}

export const MarkConstructorsSimple = ({pos, angle}:{pos:{x:number,y:number}, angle:number}) => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const t_l = [pos.x-3, pos.y+3]
        const t_r = [pos.x+3, pos.y+3]
        const b_l = [pos.x-3, pos.y-3]
        const b_r = [pos.x+3, pos.y-3]

        const t_l_point = getCorrectCoordinateOnMap(t_l[0], t_l[1])
        const t_r_point = getCorrectCoordinateOnMap(t_r[0], t_r[1])
        const b_l_point = getCorrectCoordinateOnMap(b_l[0], b_l[1])
        const b_r_point = getCorrectCoordinateOnMap(b_r[0], b_r[1])

        const polyLines:[number, number][] = [
            [t_l_point.y, t_l_point.x],
            [t_r_point.y, t_r_point.x],
            [b_r_point.y, b_r_point.x],
            [b_l_point.y, b_l_point.x]
        ]

        const points = rotatePolygon(polyLines, angle);
    
        const p = L.polygon(points as unknown as LatLngExpression[], {color: "green", weight: 2}).addTo(map);
    }, [map]);

    return(null)
}

export const MarkSmelterSimple = ({pos, angle}:{pos:{x:number,y:number}, angle:number}) => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const t_l = [pos.x-2.5, pos.y+1.5]
        const t_r = [pos.x+2.5, pos.y+1.5]
        const b_l = [pos.x-2.5, pos.y-1.5]
        const b_r = [pos.x+2.5, pos.y-1.5]

        const t_l_point = getCorrectCoordinateOnMap(t_l[0], t_l[1])
        const t_r_point = getCorrectCoordinateOnMap(t_r[0], t_r[1])
        const b_l_point = getCorrectCoordinateOnMap(b_l[0], b_l[1])
        const b_r_point = getCorrectCoordinateOnMap(b_r[0], b_r[1])

        const polyLines:[number, number][] = [
            [t_l_point.y, t_l_point.x],
            [t_r_point.y, t_r_point.x],
            [b_r_point.y, b_r_point.x],
            [b_l_point.y, b_l_point.x]
        ]

        const points = rotatePolygon(polyLines, angle);
    
        const p = L.polygon(points as unknown as LatLngExpression[], {color: "black", weight: 2}).addTo(map);
    }, [map]);

    return(null)
}