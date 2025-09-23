import { useState } from "react"

function DrivedComponent(){
    const [users,setUsers]=useState([]);
    const [user,setUser]=useState('');

    const handleAddUser=()=>{
        setUsers([...users,user])
    }

    const total=users.length;
    const last=users[users.length-1];
    const unique=[...new Set(users)].length;

    return(
        <div>
            <h2>Total User: {total}</h2>
            <h2>Last User:{last}</h2>
            <h2>Unique User:{unique}</h2>
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="enter your name" />
            <button onClick={handleAddUser}>Add User</button>
            {
                users.map((item,index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            }
        </div>
    )

}

export default DrivedComponent