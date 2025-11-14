import { useSearchContext } from "../../context/SearchContext";
import { useSearchQuery } from "../../hooks/useSearchQuery";
import { ResultsList } from "./ResultsList";

export const SearchResults = () => {
  const { query, type } = useSearchContext();
  const { data, isLoading, error } = useSearchQuery(type, query);

  if (!query)
    return (
      <div className="empty-message">
        There are zero matches.<br />
        Use the form to search for People or Movies.
      </div>
    );

  if (isLoading) return <div className="empty-message">Searching...</div>;
  if (error) return <div className="empty-message">Error loading results.</div>;

  if (!data?.results?.length)
    return (
      <div className="empty-message">
        No matches found for "{query}".
      </div>
    );

  return <ResultsList type={type} data={data} />;
};