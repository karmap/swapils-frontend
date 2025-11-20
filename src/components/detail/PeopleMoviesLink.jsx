import { Link } from 'react-router'

const PeopleMoviesLink = ({ films }) => {
  return (
    <div>
      {films.map((film, index) => {
        const isLast = index === films.length - 1;

        return (
          <span key={film.id}>
            <Link to={`/movie/${film.id}`}>{film.name}</Link>
            {!isLast && ", "}
          </span>
        )
      })}
    </div>
  )
}

export default PeopleMoviesLink