"use client"

// import { SatisfacoryMapTest } from "@/components/map/test";
import { getCorrectCoordinateOnMap } from "@/helper/coordinates.helper";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const SatisfacoryMapTest = dynamic(() => import('@/components/map/test'), {
    ssr: false,
});
  
const Page = () => {

    return(
        <div className="bg-red-500">
            <SatisfacoryMapTest/>
        </div>
    )
}

export default Page;