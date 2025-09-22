import { useRef } from "react";

function UseRef(){
      
    const inputRef=useRef(null);
    const inputHandler=()=>{
          console.log("this is input handler")
    }

    return(
        <div>
           <h1>useRef</h1>
           <input  type="text" placeholder="enter anything" />
           <button onClick={inputHandler}>Focus on input field</button>
        </div>
    )
}

export default UseRef;