function User({displayName,name,onClick}){
  return (
    <div>
       {/* <h3>Name: <span style={{color:'green'}}>{data.name}</span></h3>
       <h3>Age: <span style={{color:'green'}}>{data.name}</span></h3>
       <h3>Email: <span style={{color:'green'}}>{data.name}</span></h3> */}

       <button onClick={()=>displayName(name)}>Display Name</button>
       <button onClick={()=>onClick()}>Get User</button>

       
    </div>
  )
}

export default User