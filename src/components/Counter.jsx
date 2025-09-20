import { useEffect, useState } from "react";

const Counter=()=>{
    const Counter=({count,data})=>{

        useEffect(()=>{
            console.log("mounting phase only")
        },[])

        useEffect(()=>{
            console.log("updating phase only")
        },[count])

        useEffect(()=>{
            
        })

    }
    return(
        <div>
             <h1>Counter:{count}</h1>
             <h1>RCount:{rcount}</h1>
             <button onClick={()=>setCount(count+1)}>Update Count</button>
             <button onClick={()=>setRcount(rcount-1)}>Update Rcount</button>
        </div>
    )
}

export default Counter;