import MovieAppBar from "./app-bar/MovieAppBar.tsx";
import {Outlet} from "react-router-dom";


function App() {

  return (
    <div className='app'>
      <MovieAppBar/>
      <Outlet />
    </div>
  )
}

export default App
