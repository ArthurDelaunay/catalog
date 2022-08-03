import { useParams } from "react-router-dom"
import movies from "../movies.json"

const Film = () => {
    const params = useParams()
    const currentMovie = movies.find((movie) => {
        return movie.id === Number(params.id)
    })

    return (
        <div>
            <img src={currentMovie.image} alt={currentMovie.title} />
            <h2>{currentMovie.title}</h2>
            <p>by {currentMovie.director}</p>
            <ul>
                with
                {currentMovie.stars.map((star) => {
                    return <li key={star}>{star}</li>
                })}
            </ul>
            <p>{currentMovie.description}</p>
        </div>
    )
}
export default Film
