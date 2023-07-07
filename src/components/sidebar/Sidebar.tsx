import classes from "./Sidebar.module.scss";
import Pagination from "../pagination/Pagination.tsx";
import Button from "../button/Button.tsx";
import Genres from "../genres/Genres.tsx";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <h2>Filters:</h2>
      <Button className={classes.resetFilters}>Reset filters</Button>
      <h3>Sort by:</h3>
      <select></select>
      <h3>Release year:</h3>
      <select></select>
      <Genres />

      <Pagination />
    </div>
  );
};

export default Sidebar;