import { useState } from "react";
import { useSearchContext } from "../../context/SearchContext";
import { useSearchQuery } from "../../hooks/useSearchQuery";

export function SearchBox() {
  const { query, setQuery, type, setType } = useSearchContext();
  const { isLoading } = useSearchQuery(type, query);
  const [inputValue, setInputValue] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setQuery(inputValue);
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <p className="search-title">What are you searching for?</p>

        <div className="search-options">
          <label>
            <input
              type="radio"
              name="type"
              value="people"
              checked={type === "people"}
              onChange={(e) => setType(e.target.value)}
            />
            <span>People</span>
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="movies"
              checked={type === "movies"}
              onChange={(e) => setType(e.target.value)}
            />
            <span>Movies</span>
          </label>
        </div>

        <input
          type="text"
          placeholder={
                type === "movies"
                ? "e.g. A New Hope, The Empire Strikes Back"
                : "e.g. Chewbacca, Yoda, Boba Fett"
            }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit" className="search-button" disabled={!inputValue.trim()}>
          {isLoading ? "SEARCHING..." : "SEARCH"}
        </button>
      </form>
    </div>
  );
}