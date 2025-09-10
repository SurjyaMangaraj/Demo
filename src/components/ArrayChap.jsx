function ArrayChap(){
    const userData=[
        {
            name: "surjya",
            id:1,
            email: "surjya.com",
            age : 22
        },
        {
            name: "surjya",
            id:2,
            email: "surjya.com",
            age : 22
        },
        {
            name: "surjya",
            id:3,
            email: "surjya.com",
            age : 22
        }
    ]
    return(
        <div>
            <h1>Loop in jsx in map function</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                    
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ArrayChap;