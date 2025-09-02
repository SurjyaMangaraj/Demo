import React from 'react'

function PropChap ({user}) {
  return (
    <div>
      <hr />
      <h2>Name:{user.name}</h2>
      <h2>Age:{user.age}</h2>
      <h2>Email:{user.email}</h2>
    </div>
  )
}

export function User({name="User"}){
  return(
    <div>
      <h1>hii , {name}</h1>
    </div>
  )
}

export default PropChap

