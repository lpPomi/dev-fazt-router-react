
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <main>
                <h2>Page not found 404 ! </h2>
                <p>You can return to home</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    )
}

export default NotFoundPage