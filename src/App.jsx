import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchContextProvider } from "./context/SearchContext";
import { PeoplePage } from './components/detail/PeoplePage';
import StatsPanel from "./components/stats/StatsPanel";
import SearchPage from "./components/SearchPage";
import { MoviePage } from "./components/detail/MoviePage";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />
  },
  {
    path: "/people/:id",
    element: <PeoplePage />,
  },
  {
    path: "/movie/:id",
    element: <MoviePage />,
  },
  {
    path: "/stats",
    element: <StatsPanel />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <RouterProvider router={router} />
        </SearchContextProvider>
    </QueryClientProvider>
  )
}

export default App
