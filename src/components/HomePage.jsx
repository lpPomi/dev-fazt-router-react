
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <main>
                <h2>Welcome to the home page!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}
export default HomePage