
import { useNavigate, Link, Outlet } from 'react-router-dom'


function Dashboard() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (

        <>
            <main>
                <h2 className="pageFound">Welcome to the Dashboard page!</h2>
            </main>
            <div>
                {/* here comes the output from the subcomponent */}
                {/* <Outlet /> */}
                <p>by click on Logout navigate to home</p>
                <button onClick={handleClick} >Logout</button>

                {/*      <Route path="welcome" element={<New_Component/>} /> */}
                {/* <Routes>
                <Route path="welcome" element={<p>in the Dashboard welcome</p>} />
            </Routes> */}

                <nav>
                    <br />
                    <Link to='welcome'>Goto Welcome</Link>
                    <br />
                    <Link to='goodby'>Goto Goodby</Link>
                </nav>

                {/* here comes the output from the subcomponent */}
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard