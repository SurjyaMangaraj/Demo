import { useEffect, useState } from "react";

function UseEffectChap(){
    const [counter, setCounter]=useState(0);
    const [data,setData]=useState(0);

    useEffect(()=>{
        callOnes();
    },[])
       function callOnes(){
        console.log("call once function ones called");
       }

       

    return(
        <div>
            <h1>useEffect Hooks</h1>
            <button onClick={()=>setCounter(counter+1)}>Counter{counter}</button>
            <button onClick={()=>setData(data+1)}>Data{data}</button>
        </div>
    )
}
export default UseEffectChap;