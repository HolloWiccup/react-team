import { initialFilterState, filterReducer } from "../reducer/filterReducer";
import { FiltersContext, FiltersDispatch } from "../context/filterContext";
import { useReducer } from "react";


export default function FilterProvider({children} : any): JSX.Element {
    const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);

    return (
        <FiltersContext.Provider value={filterState}>
            <FiltersDispatch.Provider value={dispatch}>
                {children}
            </FiltersDispatch.Provider>
        </FiltersContext.Provider>
    )
}
