import { useActionState } from "react";

function UseActionState(){

    const handleSubmit=(previousData,formData)=>{
           let name=formData.get('name');
           let password=formData.get('password');
           console.log("handleSubmit called",name,password);
    }

    const [data,action,pending]=useActionState(handleSubmit,undefined)
    return(
        <div>
             <h1>useActionState Hook in React Js</h1>
             <form action={action}>
                <input type="text" name="name" placeholder="enter name" />
                <br /><br />
                <input type="password" name="password" placeholder="enter password" />
                <br /><br />
                <button>Submit</button>
             </form>
        </div>
    )
}

export default UseActionState;