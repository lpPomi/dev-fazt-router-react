import { useParams } from 'react-router-dom'


function UserPage() {

    //const params = useParams()
    //console.log(params)
    // here only the parameter id from the params object
    const { id } = useParams()

    return (
        <>
            <main>
                <h2>Welcome to the User page!</h2>
            </main>
            <div>
                {/*  User: <h3>{params.id} </h3> */}
                User: <h3>{id} </h3>
            </div>
        </>
    )
}

export default UserPage