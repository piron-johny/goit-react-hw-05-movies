import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Layout = lazy(() => import('./components/Layout'))
const HomePage = lazy(() => import('./pages/HomePage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage'))
const MoviesDitailPage = lazy(() => import('./pages/MoviesDitailPage'))
const CastsView = lazy(() => import('./pages/CastsView'))
const ReviewsView = lazy(() => import('./pages/ReviewsView'))

function App() {
  return (
    <Suspense fallback={<div>Liading...</div>}>
      <Routes>
        <Route path="goit-react-hw-05-movies/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":moviesId" element={<MoviesDitailPage />}>
              <Route path="cast" element={<CastsView />} />
              <Route path="review" element={<ReviewsView />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
