import { useState } from "react";

const Counter=()=>{
    const[count,setCount]=useState(0)
    const[rcount,setRcount]=useState(10)
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