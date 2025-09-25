import { useState } from 'react'
import ArrayChap from './components/ArrayChap'
import Clock from './components/Clock'
import Collage from './components/Collage'
import CollageArray from './components/CollageArray'
import Counter from './components/Counter'
import HooksChap from './components/HooksChap'
import PropChap, { User } from './components/PropChap'
import StateChap from './components/StateChap'
import ToggleChap from './components/ToggleChap'
import UseEffectChap from './components/UseEffectChap'
import Headers,{Nav} from './Header'
import { Uncontrolled } from './components/Uncontrolled'
import DrivedComponent from './components/DrivedComponent'
import LiftingUserA from './components/LiftingUserA'
import LiftingUserB from './components/LiftingUserB'
const App =()=>{
  

  const [count,setCount]=useState(0);
  const [data, setData]=useState(0);
  const [display, setDisplay]=useState(true);
  const [user,setUser]=useState('')

  const collageData=[
    {
      name:"CEB",
      city: "bbsr",
      website: "www.ceb.com",
      student: [{
        name: "surjya",
        age: 22,
        email: "surjya@gmail.com"
      },{
        name: "surjya",
        age: 22,
        email: "surjya@gmail.com"
      }]
    }, {
      name:"KIIT",
      city: "bbsr",
      website: "www.kiit.com",
      student: [{
        name: "anil",
        age: 22,
        email: "anil@gmail.com"
      },{
        name: "surjya",
        age: 22,
        email: "surjya@gmail.com"
      }]
    }
  ]

  const userData=[
    {
        name: "surjya",
        id:1,
        email: "surjya.com",
        age : 22
    },
    {
        name: "anil",
        id:2,
        email: "anil.com",
        age : 22
    },
    {
        name: "ak",
        id:3,
        email: "ak.com",
        age : 22
    }
]

  let userObj={
    name:"surjya",
    age:44,
    email:"wsefwef"
  }

  let collageName=["SSS","JSG","KKI","CEB"]

  {/*----------- pass function as component as props --------------*/}
        const displayName=(name)=>{
          alert(name);
        }

        const getUser=()=>{
             alert("get user function called")
        }

  {/*----------- pass function as component as props  END --------------*/}

  return(
    <>
    <div>
        {/* <StateChap /> */}
      {/* <HooksChap /> */}
       {/* <Counter/> */}
     {/* <ToggleChap/>
      <propChap/> */}
      {/* <PropChap user={userObj}/> */}
      {/* <CollageArray names={collageName}/> */}
      {/* <ArrayChap /> */}
      {/* <Clock/> */}
      {/* {
      collageData.map((collage,index)=>(
            <div key={index}>
              <Collage collage={collage}/>
              
            </div>
      ))
    } */}
    {/* <UseEffectChap/> */}

    </div>
    
      {/* <User name='SURJYA'/>
      <User  /> */}

      {/*----------- lifecycle of React --------------*/}
      {/* {
        display? <Counter count={count} data={data} />:null
      }
         <button onClick={()=>setCount(count+1)}>Counter</button>
         <button onClick={()=>setData(data+1)}>Data</button>
         <button onClick={()=>setDisplay(!display)}>Toggle</button> */}
           {/*----------- lifecycle of React End --------------*/}
       {/* <Uncontrolled/> */}

       {/*----------- pass function as component as props --------------*/}
         {/* <h1>Call Parent component function from child component</h1>
         <User displayName={displayName} name='Surjya' onClick={getUser}/>
         <User displayName={displayName} name='Papi' onClick={getUser}/>
         <User displayName={displayName} name='Anil' onClick={getUser}/>
         <User displayName={displayName} name='Dilu' onClick={getUser}/> */}

       {/*----------- pass function as component as props  END --------------*/}

       <DrivedComponent/>

       {/*----------- Lifting State Up in React js   --------------*/}
             <LiftingUserA setUser={setUser}/>
             <LiftingUserB user={user}/>
       {/*----------- Lifting State Up in React js  END --------------*/}


       
    </>
  )
}
export default App