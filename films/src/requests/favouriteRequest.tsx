import Cookies from 'js-cookie';
import { FAVORITE_TYPES } from '../reducer/types';

export const sendFavoriteRequest = async(userId: any, movieId: any, fav: any) => {
    const url = `https://api.themoviedb.org/3/account/${userId}/favorite`;
    const token = Cookies.get('token');
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            media_type: 'movie',
            media_id: movieId,
            favorite: fav,
        }),
        };
    
        return fetch(url, options)
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.error('error:' + err));
};
