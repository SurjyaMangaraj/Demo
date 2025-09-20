import { useEffect, useState } from "react";

    const Counter=({count,data})=>{

        useEffect(()=>{
            console.log("mounting phase only")
        },[])

        useEffect(()=>{
            console.log("updating phase only")
        },[count])

        useEffect(()=>{
            console.log("unmounting phase only")
        },[data,count])

   
    return(
        <div>
            
             <h1>Counter value{count}</h1>
             <h2>Data Valu{data}</h2>
        </div>
    )
}

export default Counter;