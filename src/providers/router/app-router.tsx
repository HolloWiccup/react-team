import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {routeConfig} from "./route-config.tsx";
import {movieLoader} from "./movie-loader.ts";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routeConfig.root.path} element={routeConfig.root.element}>
      <Route index element={routeConfig.main.element} />
        <Route path={routeConfig.movie.path} element={routeConfig.movie.element} loader={movieLoader}/>

    </Route>
  ))