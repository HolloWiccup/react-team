import { PAGINATION_TYPES } from "./types"
import { DEFAULT } from "../utils/defaultValues"

export const initialPagination = {
    currentPage: DEFAULT.ONE, 
    totalPages: 500
}

export function paginationReducer(state: any, action: any) {
    switch(action.type) {
        case PAGINATION_TYPES.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state
    }
}