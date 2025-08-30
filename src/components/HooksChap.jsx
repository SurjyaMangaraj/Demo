import { useState } from "react"

function HooksChap(){
    const[fruit,setFruit]=useState("Apple")

    const handleFruit=()=>{
        setFruit("Banana")
    }

    return(
        <div>
            <h1>Hooks in React JS</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change fruit name</button>
        </div>
    )
}

export default HooksChap