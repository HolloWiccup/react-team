import { DEFAULT } from "../utils/defaultValues"
import { FILTER_TYPES } from "./types"
import { State } from "../types_interfaces/filterReducerType"
import { SELECT } from "../utils/defaultValues"

export const initialFilterState: State = {
    chekedGenres: DEFAULT.EMPTY_ARRAY,
    filmGenres: DEFAULT.EMPTY_ARRAY,
    selected: SELECT.POPULAR,
    year: DEFAULT.INITIAL_YEAR,
}

type Action = 
| {type: keyof typeof FILTER_TYPES.SELECTED_YEAR, payload: string}
| {type: keyof typeof FILTER_TYPES.CHEKED, payload: number[]}
| {type: keyof typeof FILTER_TYPES.GENRES_FETCHED, payload: number[]}


export function filterReducer(state: State, action: any) {
    switch(action.type) {
        case FILTER_TYPES.SELECTED_BY:
                return {
                ...state,
                selected: action.payload
        }
        case FILTER_TYPES.SELECTED_YEAR:
                return {
                ...state,
                year: action.payload
        }
        case FILTER_TYPES.RESET:
            return {
                ...state,
                selected: SELECT.POPULAR,
                year: DEFAULT.INITIAL_YEAR,
                chekedGenres: DEFAULT.EMPTY_ARRAY
            }
        case FILTER_TYPES.GENRES_FETCHED:
            return {
                ...state,
                filmGenres: action.payload
            }
        case FILTER_TYPES.CHEKED:
            return {
                ...state,
                chekedGenres: action.payload
            }
        default:
            return state
    }
}
