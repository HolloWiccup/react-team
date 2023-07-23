import * as React from 'react';
import "./style.css"
import FilterBlock from '../filterBlock'
import Box from '@mui/material/Box';
import FilmCard from '../filmCard';
import { FiltersContext } from '../../context/filterContext'
import { SELECT } from '../../utils/defaultValues';
import { apiTransform } from '../../utils/apiMoviesTranform';
import { API } from '../../utils/defaultValues';
import {  PaginationContext } from '../../context/paginationContext';
import Cookies from 'js-cookie';
import { FavouriteDispatch, FavoriteContext } from '../../context/favouriteContext';
import { FAVORITE_TYPES } from '../../reducer/types';

export default function MainPage(): JSX.Element {
    const filters = React.useContext(FiltersContext);
    const token = Cookies.get('token')
    const userId = Cookies.get('user_id');
    const paginData = React.useContext(PaginationContext)
    const { films, fetchedFav } = React.useContext(FavoriteContext);
    const favDispatch = React.useContext(FavouriteDispatch);

    React.useEffect(()=> {
        if(token) {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };
        
            let linkForFetch;
            if(filters.selected === SELECT.POPULAR) {
                linkForFetch = API.POPULAR;
            } else {
                linkForFetch = API.TOP_RATED
            }
        
            fetch(apiTransform(linkForFetch, paginData.currentPage), options)
                .then(res => res.json())
                .then(json => {
                    favDispatch({type: FAVORITE_TYPES.SET_FILMS, payload: json.results})
                })
                .catch(err => console.error('error:' + err));
        }
    }, [filters.selected, paginData.currentPage])

    React.useEffect(()=> {
        if(token) {
            const url = `https://api.themoviedb.org/3/account/${userId}/favorite/movies`;
            const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        };
            fetch(url, options)
            .then(res => res.json())
            .then(json => {
                favDispatch({type: FAVORITE_TYPES.SET_FAV_FETCHED, payload: json.results})
            })
            .catch(err => console.error('error:' + err));
        }
    }, [favDispatch, token, userId])

    return (
        <>
            <div className="container">
                <div className="main-page">
                        <FilterBlock/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                m: 1,
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                                justifyContent: 'space-between'
                            }}
                        >
                            
                            {films.length > 0 &&
                            films.map((item: any)=> (
                                <FilmCard
                                title={item.title}
                                image={`${API.IMG}w500${item.poster_path}`}
                                rating={item.vote_average}
                                id={item.id}
                                />
                            ))}
                        </Box>
                    
                </div>
            </div>
        </>
    )
}

//const imgURL = `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`;
