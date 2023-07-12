import {Pagination} from "@mui/material";
import {useContext} from "react";
import {ACTIONS, FilterContext} from "../../providers/filters/filter-context.ts";

const PAGES_COUNT = 500
const MoviesPagination = () => {
  const {filters, dispatch} = useContext(FilterContext)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleChange = (_, page: number) => {
    dispatch({
      type: ACTIONS.SET_PAGE,
      payload: page
    })
  }
  return (
    <Pagination
      defaultValue={filters.page}
      onChange={handleChange}
      size='small'
      count={PAGES_COUNT}/>
  )
}

export default MoviesPagination