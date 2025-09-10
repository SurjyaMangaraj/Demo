import ArrayChap from './components/ArrayChap'
import CollageArray from './components/CollageArray'
import Counter from './components/Counter'
import HooksChap from './components/HooksChap'
import PropChap, { User } from './components/PropChap'
import StateChap from './components/StateChap'
import ToggleChap from './components/ToggleChap'
import Headers,{Nav} from './Header'
const App =()=>{

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
      <ArrayChap />

    </div>
    
      {/* <User name='SURJYA'/>
      <User  /> */}
     
    </>
  )
}
export default App