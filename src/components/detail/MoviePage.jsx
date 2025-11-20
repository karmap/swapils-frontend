import AppLayout from '../layouts/AppLayout';
import { Link, useParams } from 'react-router';
import { useDetailQuery } from '../../hooks/useDetailQuery';
import MoviesPeopleLinks from './MoviesPeopleLinks';
import TwoColumnsLayout from '../layouts/TwoColumnsLayout';

export const MoviePage = () => {
  const { id } = useParams();
  const detail = useDetailQuery("movies", id);
  const data = detail.data

  if (detail.isLoading) return <div>Loading...</div>;
  if (detail.error) return <div>Error: {detail.error.message}</div>;

  const detailColumnContent = (
    <>
      <h3>Opening Crawl</h3>
      <p style={{ whiteSpace: "pre-wrap" }}>{data.opening_crawl}</p>
      <br></br>
      <Link to="/" className="link-button">BACK TO SEARCH</Link>
    </>
  );

  const linksColumnContent = (
    <>
      <h3>Characters</h3>
      <MoviesPeopleLinks characters={data.characters} />
    </>
  );

  return (
    <AppLayout>
      <TwoColumnsLayout
        title={data.title}
        colA={detailColumnContent}
        colB={linksColumnContent}
      />
    </AppLayout>
  );
};