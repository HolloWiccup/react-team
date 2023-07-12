import Box from "@mui/material/Box";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import MovieList from "../components/movie-list/MovieList.tsx";
import FiltersProvider from "../providers/filters/FiltersProvider.tsx";

const MainPage = () => {
  return (
    <>
      <FiltersProvider>
        <Box sx={{display: 'flex', flexWrap: 'wrap', padding: '20px', gap: '20px'}}>
          <Sidebar/>
          <MovieList/>
        </Box>
      </FiltersProvider>
    </>
  )
}

export default MainPage