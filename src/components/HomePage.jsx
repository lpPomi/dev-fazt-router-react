
import { Link } from "react-router-dom";

function HomePage() {

    var userId = 'lpomi'
    return (
        <>
            <main>
                <h2 className="pageFound">Welcome to the home page!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link className='navStyle' to="/about">About</Link>
                {/* link to a certain page w.g. users/100 */}
                <Link className='navStyle' to={`/user/${userId}`}>To User</Link>
            </nav>
        </>
    );
}
export default HomePage