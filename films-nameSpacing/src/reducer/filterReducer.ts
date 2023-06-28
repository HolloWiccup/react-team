import { DEFAULT } from "../utils/defaultValues"
import { FILTER_TYPES } from "./types"
import { State } from "../types_interfaces/filterReducerType"

export const initialFilterState: State = {
    chekedGenres: DEFAULT.EMPTY_ARRAY,
    selectData: {
        popularity: DEFAULT.EMPTY_STRING,
        year: DEFAULT.EMPTY_STRING
    },
    filmGenres: DEFAULT.EMPTY_ARRAY
}

type Action = 
| {type: FILTER_TYPES.SELECTED_YEAR, payload: string}


export function filterReducer(state: State, action: any) {
    console.log(action)
    switch(action.type) {
        case FILTER_TYPES.SELECTED_YEAR:
            return {
                ...state,
                selectData: {...state.selectData, year: action.payload}
            }
        case FILTER_TYPES.SELECTED_POPULARITY:
                return {
                ...state,
                selectData: {...state.selectData, popularity: action.payload}
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
