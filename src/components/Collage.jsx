const Collage=({collage})=>{
    return(
        <div>
          <h1>Name: {collage.name}</h1>
          <ul>
            <li>
               <h3>City: {collage.city}</h3>
            </li>
            <li>
                <h3>Website: {collage.website}</h3>
            </li>
            {
                collage.student.map((student)=>(
                    <div>
                       <li> <h4>{student.name}</h4></li>
                    </div>
                ))
            }
          </ul>
        </div>
    )
}
export default Collage;