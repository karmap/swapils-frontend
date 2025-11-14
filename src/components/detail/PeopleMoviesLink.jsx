import { Link } from 'react-router'
import getLastSegment from '../../helpers/general'
import { useQueries } from '@tanstack/react-query'
import { getDetail } from '../../helpers/swapi'

const PeopleMoviesLink = ({ filmUrls }) => {

  const movieQueries = useQueries({
    queries: filmUrls.map((url) => {
      const id = getLastSegment(url)
      return {
        queryKey: ["movies", id],
        queryFn: () => getDetail("movies", id),
        enabled: !!id,
        staleTime: 1000 * 60 * 30,
      }
    }),
  })

  const allLoaded =
    movieQueries.length > 0 &&
    movieQueries.every((q) => q.data)

  if (!allLoaded) {
    return <div>Loading movies...</div>
  }

  return (
    <div>
      {movieQueries.map((q, index) => {
        const url = filmUrls[index]
        const id = getLastSegment(url)
        const title = q.data.title
        const isLast = index === movieQueries.length - 1;

        return (
          <span key={id}>
            <Link to={`/movie/${id}`}>{title}</Link>
            {!isLast && ", "}
          </span>
        )
      })}
    </div>
  )
}

export default PeopleMoviesLink