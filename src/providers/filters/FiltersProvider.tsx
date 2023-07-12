import {FC, ReactNode, useReducer} from "react";
import {defaultState, FilterContext, filtersReducer} from "./filter-context.ts";

type FiltersProviderProps = {
  children: ReactNode
}

const FiltersProvider: FC<FiltersProviderProps> = ({children}) => {
  const [filters, dispatch] = useReducer(filtersReducer, defaultState)
  return (
    <FilterContext.Provider value={{filters, dispatch}}>
      {children}
    </FilterContext.Provider>
  )
}

export default FiltersProvider