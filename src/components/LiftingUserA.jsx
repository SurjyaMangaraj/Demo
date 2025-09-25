function LiftingUserA({setUser}){
      
    return(
        <div>
            <h1>Add User</h1>
            <input type="text" onChange={(event)=>setUser(event.target.value)}  placeholder="enter names"/>
            <hr />
        </div>
    )
}

export default LiftingUserA;