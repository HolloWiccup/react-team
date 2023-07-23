import { useReducer } from "react";
import { initialPagination, paginationReducer } from "../reducer/paginationReducer";
import { PaginationContext, PaginationReducer } from "../context/paginationContext";


export default function PaginationProvider({children}: any) : JSX.Element {
    const [paginationState, pagibationDispatch] = useReducer(paginationReducer, initialPagination)

    return (
        <PaginationContext.Provider value={paginationState}>
            <PaginationReducer.Provider value={pagibationDispatch}>
                {children}
            </PaginationReducer.Provider>
        </PaginationContext.Provider>
    )
}

