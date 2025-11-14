import { Link } from 'react-router'
import getLastSegment from '../../helpers/general'
import { useQueries } from '@tanstack/react-query'
import { getDetail } from '../../helpers/swapi'

const MoviesPeopleLinks = ({ peopleUrls }) => {

  const peopleQueries = useQueries({
    queries: peopleUrls.map((url) => {
      const id = getLastSegment(url)
      return {
        queryKey: ["people", id],
        queryFn: () => getDetail("people", id),
        enabled: !!id,
        staleTime: 1000 * 60 * 30,
      }
    }),
  })

  const allLoaded =
    peopleQueries.length > 0 &&
    peopleQueries.every((q) => q.data)

  if (!allLoaded) {
    return <div>Loading people...</div>
  }

  return (
    <div>
      {peopleQueries.map((q, index) => {
        const url = peopleUrls[index]
        const id = getLastSegment(url)
        const name = q.data.name
        const isLast = index === peopleQueries.length - 1;

        return (
          <span key={id}>
            <Link to={`/people/${id}`}>{name}</Link>
            {!isLast && ", "}
          </span>
        )
      })}
    </div>
  )
}

export default MoviesPeopleLinks