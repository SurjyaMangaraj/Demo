import React, { useRef } from 'react'

export const Uncontrolled = () => {
     
    const userRef=useRef();
    const passwordRef=useRef();

    const handleForm=(event)=>{
        event.preventDefault();
        const user=document.querySelector("#user").value;
        const password=document.querySelector("#password").value;
        console.log(user,password)
    }

    const handleFormRef=(event)=>{
        event.preventDefault();
        const user=userRef.current.value;
        const password=passwordRef.current.value;
        console.log("handleFormRef",user);
    }
  return (
    <div>
        <h1>Uncontrolled Component</h1>
        <form action="" method='get' onSubmit={handleForm}>
            <input type="text" id='user' placeholder='enter username' />
            <br /><br />
            <input type="text" id='password' placeholder='enter password' />
            <br /><br />
            <button>Submit</button>
        </form>
        <hr />
        <h1>Uncontrolled Component with useRef</h1>
        <form action="" method='get' onSubmit={handleFormRef}>
            <input type="text" ref={userRef} id='userRef' placeholder='enter username' />
            <br /><br />
            <input type="text" ref={passwordRef} id='passwordRef' placeholder='enter password' />
            <br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}
