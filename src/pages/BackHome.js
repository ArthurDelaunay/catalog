import { Link } from "react-router-dom"

const BackHome = () => {
    return (
        <nav>
            <Link to={`/`}>
                <p>Home</p>
            </Link>
        </nav>
    )
}
export default BackHome
