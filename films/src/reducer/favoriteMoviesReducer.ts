import { FAVORITE_TYPES } from "./types"
import { DEFAULT } from "../utils/defaultValues"

export const initialFavoriteState: any = {
    fetchedFav: DEFAULT.EMPTY_ARRAY,
    films: DEFAULT.EMPTY_ARRAY
}

export function favouriteReducer(state: any, action: any) {
    console.log(action)
    switch(action.type) {
        case FAVORITE_TYPES.SET_FILMS:
            return {...state, films: action.payload}
        case FAVORITE_TYPES.SET_FAV_FETCHED:
            return {...state, fetchedFav: action.payload}
        default:
            return state
    }
}