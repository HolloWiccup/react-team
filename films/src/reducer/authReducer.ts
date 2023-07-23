import { DEFAULT } from "../utils/defaultValues"
import { AUTH_TYPES } from "./types"

export const initialAuthState = {
    isAuth: DEFAULT.EMPTY_STRING,
    userId: DEFAULT.EMPTY_STRING
}

type AuthStateType = {
    isAuth: string,
    userId: string
}

type AuthAction = { type: 'SET_AUTH'; payload: string }

export function authReducer(state: AuthStateType, action: any) {
    switch(action.type) {
        case AUTH_TYPES.SET_AUTH:
            return {...state, isAuth: action.payload}
        case AUTH_TYPES.SET_USER_ID: 
            return {...state, userId: action.payload}
        default:
            return state
    }
}
