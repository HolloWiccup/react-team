import {createContext, Dispatch, Reducer} from "react";
import {IGenre} from "../../components/genres/Genres.tsx";

enum SORT_BY {
  POPULAR = 'POPULAR',
  TOP_RATED = 'TOP_RATED'
}
interface IFilters {
  page: number;
  sort: SORT_BY;
  genres: IGenre[]
}

const defaultState = {
  page: 1,
  sort: SORT_BY.POPULAR ,
  genres: []
}

const FilterContext = createContext<{
  filters: IFilters,
  dispatch: Dispatch<any>
}>({
  filters: defaultState, dispatch: () => null
})

enum ACTIONS {
  SET_PAGE = 'SET_PAGE',
  SELECT_SORT = 'SELECT_SORT',
  ADD_GENRE = 'ADD_GENRE'
}

type PageAction = {
  type: ACTIONS.SET_PAGE,
  payload: number
}

type SortAction = {
  type: ACTIONS.SELECT_SORT,
  payload: SORT_BY
}

type GenreAction = {
  type: ACTIONS.ADD_GENRE,
  payload: IGenre
}

type Actions = PageAction | SortAction | GenreAction

const filtersReducer: Reducer<IFilters, Actions> = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PAGE:
      return {...state, page: action.payload}
    case ACTIONS.SELECT_SORT:
      return {...state, sort: action.payload}
    default:
      return state
  }
}

export {filtersReducer, FilterContext, ACTIONS, SORT_BY, defaultState}