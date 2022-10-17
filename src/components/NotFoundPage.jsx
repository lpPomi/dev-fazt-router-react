
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <main>
                <h2 className="pageNotFound">Page not found 404 ! </h2>
                <p>You can return to home</p>
            </main>
            <nav>
                <Link className='navStyle' to="/">Home</Link>
            </nav>
        </>
    )
}

export default NotFoundPage