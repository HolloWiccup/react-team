import {Grid, IconButton, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import YearSlider from "../year-slider/YearSlider.tsx";
import Genres from "../genres/Genres.tsx";
import ClearIcon from '@mui/icons-material/Clear';
import SortSelect from "../sort-select/SortSelect.tsx";
import MoviesPagination from "../movies-pagination/MoviesPagination.tsx";

const gridOptions = {
    padding: '0px',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}
const paperOptions = {
  width: '350px',
  height: 'fit-content',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  flexDirection: 'column'
}

const Sidebar = () => {
  return (
      <Paper sx={paperOptions}>
          <Grid sx={gridOptions}>
              <Typography variant='h6' >Filters</Typography>
              <IconButton>
                  <ClearIcon />
              </IconButton>
          </Grid>
          <SortSelect />
          <YearSlider />
          <Genres />
          <MoviesPagination />
      </Paper>
  );
};

export default Sidebar;