function StateChap(){
    let fruit="apple"

    const handleFruit=()=>{
        fruit="banana"
    }

    return (
        <div>
            <h1>State in React JS</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change fruit name </button>
        </div>
    )
}

export default StateChap