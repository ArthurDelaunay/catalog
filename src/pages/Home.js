import movies from "../movies.json"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <main>
            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.title}>
                            <Link to={`/film/${movie.id}`}>{movie.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
export default Home
