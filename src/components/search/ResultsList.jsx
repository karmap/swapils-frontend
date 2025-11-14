import { Link } from "react-router-dom";
import getLastSegment from "../../helpers/general";

export const ResultsList = ({ type, data }) => {
  return (
    <ul className="results-list">
      {data.results.map((item) => {
        const name = type === "movies" ? item.title : item.name;
        const path = type === "movies" ? "movie" : "people";

        return (
          <li key={name} className="result-item">
            <span className="result-name">{name}</span>
            <Link
              to={`/${path}/${getLastSegment(item.url)}`}
              className="link-button"
            >
              SEE DETAILS
            </Link>
          </li>
        );
      })}
    </ul>
  );
};