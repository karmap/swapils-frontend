import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("people");

  return (
    <SearchContext.Provider value={{ query, setQuery, type, setType }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  return useContext(SearchContext);
}