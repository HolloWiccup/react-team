import { useReducer } from "react";
import { FavoriteContext, FavouriteDispatch } from "../context/favouriteContext";
import { initialFavoriteState, favouriteReducer } from "../reducer/favoriteMoviesReducer";

export default function FavouriteProvider({children} : any): JSX.Element {
    const [favState, dispatch] = useReducer(favouriteReducer, initialFavoriteState);

    return (
        <FavoriteContext.Provider value={favState}>
            <FavouriteDispatch.Provider value={dispatch}>
                {children}
            </FavouriteDispatch.Provider>
        </FavoriteContext.Provider>
    )
}