import { Link } from 'react-router'

const MoviesPeopleLinks = ({ characters }) => {
  return (
    <div>
      {characters.map((character, index) => {
        const isLast = index === characters.length - 1;

        return (
          <span key={character.id}>
            <Link to={`/people/${character.id}`}>{character.name}</Link>
            {!isLast && ", "}
          </span>
        )
      })}
    </div>
  )
}

export default MoviesPeopleLinks