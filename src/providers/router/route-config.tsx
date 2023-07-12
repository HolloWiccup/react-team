import App from "../../components/App.tsx";
import MainPage from "../../pages/MainPage.tsx";
import MoviePage from "../../pages/MoviePage.tsx";
import {movieLoader} from "./movie-loader.ts";


export const routeConfig = {
  root: {
    path: '/',
    element: <App />
  },
  main: {
    path: '/movies',
    element: <MainPage />
  },
  movie: {
    path: '/movie/:movieId',
    element: <MoviePage/>,
    loader: movieLoader
  }
}