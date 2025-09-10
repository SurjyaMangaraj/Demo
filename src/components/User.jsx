import React from 'react'

const User = ({data}) => {
  return (
    <div>
       <h3>Name: <span style={{color:'green'}}>{data.name}</span></h3>
       <h3>Age: <span style={{color:'green'}}>{data.name}</span></h3>
       <h3>Email: <span style={{color:'green'}}>{data.name}</span></h3>
       
    </div>
  )
}

export default User