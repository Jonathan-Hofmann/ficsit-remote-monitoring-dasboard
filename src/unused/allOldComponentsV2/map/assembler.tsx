import axios from "axios";
import { useEffect, useState } from "react";
import { MarkAssemblersSimple } from "./factory.marking";

export const AssemblersOnMap = () => {
    
    const [assemblers, setAssemblers] = useState<{
        location:{
            x: number,
            y: number,
            rotation: number
        }
    }[]>()

    const handleLoadAssemblers = async () => {
        const data:any[] = [];
        const resp = await axios.get("http://localhost:8080/getAssembler");

        console.log(resp.data);

        for (let i = 0; i < resp.data.length; i++) {
            const assembler = resp.data[i];
            
            data.push(assembler)
        }

        setAssemblers(data);
    }

    useEffect(()=>{
        handleLoadAssemblers()
    }, [])

    return(
        <>
            {assemblers && 
                <>
                    {assemblers.map((assembler)=>{
                        return(<MarkAssemblersSimple pos={{x:assembler.location.x/100, y:assembler.location.y/100}} angle={assembler.location.rotation}/>)
                    })}
                </>
            }
        </>
    )
}