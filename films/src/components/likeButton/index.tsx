import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FavouriteDispatch, FavoriteContext } from '../../context/favouriteContext';
import { FAVORITE_TYPES } from '../../reducer/types';
import Cookies from 'js-cookie';
import { sendFavoriteRequest } from '../../requests/favouriteRequest';

export default function LikeButton({ movieId }: { movieId: any }) {
    const { fetchedFav, films } = React.useContext(FavoriteContext);
    const favDispatch = React.useContext(FavouriteDispatch);
    const [fav, setFav] = React.useState(true)
    const userId = Cookies.get('user_id');
    const [toggled, setToggled] = React.useState(
        fetchedFav.find((item: any) => item.id.toString() === movieId)
    );

    const handleClick = async () => {
        const foundItem = fetchedFav.find((item: any) => item.id.toString() === movieId);
        let newFavList;
        if (foundItem) {
            newFavList = fetchedFav.filter((item: any) => item.id.toString() !== movieId);
            setFav(false)
        } else {
            const newEl = films.find((item: any) => item.id.toString() === movieId);
            newFavList = [...fetchedFav, newEl];
            setFav(true)
        }
            favDispatch({ type: FAVORITE_TYPES.SET_FAV_FETCHED, payload: newFavList });
            setToggled(!toggled)
            await sendFavoriteRequest(userId, movieId, fav);
    };

        return (
            <Button onClick={handleClick}>
                {toggled ? <StarIcon /> : <StarBorderIcon />}
            </Button>
            );
}

