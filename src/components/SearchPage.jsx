import AppLayout from "./layouts/AppLayout";
import { SearchBox } from "./search/SearchBox";
import { SearchResults } from "./search/SearchResults";

const SearchPage = () => {
  return (
    <AppLayout>
        <div className="app-content">
            <aside className="sidebar">
                <SearchBox />
            </aside>
            <section className="results-panel">
                <h2>Results</h2>
                <SearchResults/>
            </section>
        </div>
    </AppLayout>
  )
}

export default SearchPage