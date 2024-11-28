export const getCorrectCoordinateOnMap = (x:number, y:number) => {

    const gameWidth = 7500;
    const mapWidth = 238.5;
    const mapHeight = 247.5;

    /**
     * 0,0 = -3246, -3750
     * 250,250 = 4253, 3750
     */

    let _x = x
    let _y = y

    const unit = mapHeight/gameWidth
    const unit_x = (mapWidth)/gameWidth

    // console.log("CALCULATION:\tUnitY: "+unit)
    // console.log("CALCULATION:\tUnitX: "+unit_x)
    // console.log("CALCULATION:\tX:"+_x)
    // console.log("CALCULATION:\tY:"+_y)

    const rel_x = (_x * unit_x)*1.07;
    const rel_y = (_y * unit);

    const offset_x = -3246 * unit_x;
    const offset_y = -3750 * unit

    const tmp_x = (rel_x - offset_x);
    const tmp_y = (((rel_y - offset_y)-8.4)*-1)*1.05;

    // console.log("CALCULATION:\tOffsett X:"+offset_x)
    // console.log("CALCULATION:\tOffset Y:"+offset_y)
    // console.log("CALCULATION:\tX:"+tmp_x)
    // console.log("CALCULATION:\tY:"+tmp_y)

    return({
        x: tmp_x,
        y: tmp_y
    })

}

function calculateCentroid(polygon: [number, number][]): [number, number] {
    let xSum = 0, ySum = 0;
    const n = polygon.length;

    polygon.forEach(([x, y]) => {
        xSum += x;
        ySum += y;
    });

    return [xSum / n, ySum / n];
}

function rotatePoint(
    point: [number, number],
    center: [number, number],
    angle: number
): [number, number] {
    const [px, py] = point;
    const [cx, cy] = center;

    // Translate point to the origin (centroid)
    const translatedX = px - cx;
    const translatedY = py - cy;

    // Perform the rotation
    const radians = (Math.PI / 180) * angle; // Convert angle to radians
    const rotatedX = translatedX * Math.cos(radians) - translatedY * Math.sin(radians);
    const rotatedY = translatedX * Math.sin(radians) + translatedY * Math.cos(radians);

    // Translate point back
    const finalX = rotatedX + cx;
    const finalY = rotatedY + cy;

    return [finalX, finalY];
}

// Function to rotate a polygon
export const rotatePolygon = (
    polygon: [number, number][],
    angle: number
): [number, number][] => {
    // Step 1: Calculate the centroid
    const centroid = calculateCentroid(polygon);

    // Step 2: Rotate each point around the centroid
    return polygon.map((point) => rotatePoint(point, centroid, angle));
}

const getMapUnits = ():{x:number,y:number} => {
    return {
        x:0,
        y:0
    }
}