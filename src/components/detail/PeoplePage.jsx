import { Link, useParams } from 'react-router';
import { useDetailQuery } from '../../hooks/useDetailQuery';
import AppLayout from '../layouts/AppLayout';
import PeopleMoviesLink from './PeopleMoviesLink';
import TwoColumnsLayout from '../layouts/TwoColumnsLayout';

export const PeoplePage = () => {
  const { id } = useParams();
  const detail = useDetailQuery("people", id);
  const data = detail.data;
  
  if (detail.isLoading) return <div>Loading...</div>;
  if (detail.error) return <div>Error: {detail.error.message}</div>;

  const detailColumnContent = (
    <>
      <h3>Details</h3>
      <div>Birth Year: {data.birth_year}</div>
      <div>Gender: {data.gender}</div>
      <div>Eye Color: {data.eye_color}</div>
      <div>Hair Color: {data.hair_color}</div>
      <div>Height: {data.height}</div>
      <div>Mass: {data.mass}</div>
      <br></br>
      <Link to="/" className="link-button">BACK TO SEARCH</Link>
    </>
  )

  const linksColumnContent = (
    <>
      <h3>Movies</h3>
      <PeopleMoviesLink filmUrls={data.films} />
    </>
  )

  return (
    <AppLayout>
      <TwoColumnsLayout
        title={data.name}
        colA={detailColumnContent}
        colB={linksColumnContent}
      />
    </AppLayout>
  );
};