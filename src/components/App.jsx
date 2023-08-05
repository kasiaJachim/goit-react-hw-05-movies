import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('pages/Home'));
const Header = lazy(() => import('./Header/Header'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetail'));
const MovieCredits = lazy(() => import('./MovieCredits/MovieCredits'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() => import('pages/NoFoundPage'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCredits />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
