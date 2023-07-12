import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {ACTIONS, FilterContext, SORT_BY} from "../../providers/filters/filter-context.ts";
import {useContext} from "react";

const SortSelect = () => {
  const {filters, dispatch} = useContext(FilterContext);

  const handleSelect = (event: SelectChangeEvent) => {
    dispatch({
      type: ACTIONS.SELECT_SORT,
      payload: event.target.value
    });
  }
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
      <Select
        defaultValue={SORT_BY.POPULAR}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filters.sort}
        label="Sort"
        onChange={handleSelect}
      >
        <MenuItem value={SORT_BY.POPULAR}>Popular</MenuItem>
        <MenuItem value={SORT_BY.TOP_RATED}>Top rated</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SortSelect