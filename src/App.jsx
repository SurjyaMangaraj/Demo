import ArrayChap from './components/ArrayChap'
import Clock from './components/Clock'
import Collage from './components/Collage'
import CollageArray from './components/CollageArray'
import Counter from './components/Counter'
import HooksChap from './components/HooksChap'
import PropChap, { User } from './components/PropChap'
import StateChap from './components/StateChap'
import ToggleChap from './components/ToggleChap'
import Headers,{Nav} from './Header'
const App =()=>{

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

  return(
    <>
    <div>
        {/* <StateChap /> */}
      {/* <HooksChap /> */}
      {/* <Counter/>
      <ToggleChap/>
      <propChap/> */}
      {/* <PropChap user={userObj}/> */}
      {/* <CollageArray names={collageName}/> */}
      {/* <ArrayChap /> */}
      {/* <Clock/> */}
      {
      collageData.map((collage,index)=>(
            <div key={index}>
              <Collage collage={collage}/>
              
            </div>
      ))
    }

    </div>
    
      {/* <User name='SURJYA'/>
      <User  /> */}
     
    </>
  )
}
export default App