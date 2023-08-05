import  MovieList  from "components/MovieList/MovieList";
import { useEffect,useState } from "react";
import { getTrending } from "utils/Api";

function Home(){
    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect(() => {
        getTrending().then(res => setTrendingMovies(res));
        if (!trendingMovies) return;
    }, [trendingMovies]);
    return (
        <>
      <header>
        <h1>Trending today</h1>
      </header>
      <main>{trendingMovies && <MovieList movies={trendingMovies} />}</main>
    </>
    )
}
export default Home;