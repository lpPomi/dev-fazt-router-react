
import { useNavigate } from 'react-router-dom'


function Dashboard() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>by click on Logout navigate to home</p>
            <button onClick={handleClick} >Logout</button>
        </div>
    )
}

export default Dashboard