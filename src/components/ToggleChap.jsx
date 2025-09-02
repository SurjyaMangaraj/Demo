import { useState } from "react"

function ToggleChap(){

    const [display,setDisplay]=useState(true)
    const[count, setCount]=useState(1)
    return(
        <div>
           <h1>Toggle in React</h1>
           <button onClick={()=>setDisplay(!display)}>Toggle</button>
           {
            display? <h1>Surjya</h1> :null
        }
       <h1>{count}</h1>
       <button onClick={()=>setCount(count+1)}>Counter</button>
       {
        count==0?<h1>Condition 0</h1>
        :count==1?<h1>Banana</h1>
        :count==2?<h1>Apple</h1>
        :count==3?<h1>Graps</h1>
        :count==4?<h1>Onion</h1>
        :count==5?<h1>Hangu</h1>
        :null
       }

        </div>
        
    )
}
export default ToggleChap