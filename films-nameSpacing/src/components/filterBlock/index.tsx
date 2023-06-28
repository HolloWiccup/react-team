import React, { useEffect, useReducer, useState } from 'react'
import "./style.css"
import Select from '../select'
import { optionsPopularity, optionsYear } from '../../utils/options'
import CheckBox from '../checkbox'
import Pagination from '../pagination'
import Preloader from '../preloader'
import { DEFAULT } from '../../utils/defaultValues'
import { initialFilterState, filterReducer } from '../../reducer/filterReducer'
import { FILTER_TYPES } from '../../reducer/types'

export default function FilterBlock() {
    const [isLoading, setIsLoading] = useState<boolean>(DEFAULT.TRUE_BOOLEAN);
    const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);

    useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGU0OTZlOTVkNWRkNzQ0Njk5MjU3MTBkNzM1ZjI0NiIsInN1YiI6IjY0OTJmY2U5NjVlMGEyMDEyNWZhMGU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qswz0bLbaCCtpnv6K0kahXsAJ_qGPr9A9z1jFzahzyg'
            }
        };

        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
            .then(response => response.json())
            .then(response => {
                dispatch({type: FILTER_TYPES.GENRES_FETCHED, payload: response.genres})
                setIsLoading(false)
                console.log(response.genres)
            })
            .catch(err => console.error(err));
    }, [])

    function resetFilters() {
        dispatch({type: FILTER_TYPES.SELECTED_YEAR, payload: DEFAULT.EMPTY_STRING})
        dispatch({type: FILTER_TYPES.SELECTED_POPULARITY, payload: DEFAULT.EMPTY_STRING})
        dispatch({type: FILTER_TYPES.CHEKED, payload: DEFAULT.EMPTY_ARRAY})
    }

    function checkedHadnler(event: React.ChangeEvent<HTMLInputElement>) {
        const id = Number(event.target.value);
        const isCheked = event.target.checked;
        const newSelectedIds = isCheked
            ? [...filterState.chekedGenres, id]
            : filterState.chekedGenres.filter((selectedId: number) => selectedId !== id);
        dispatch({type: FILTER_TYPES.CHEKED, payload: newSelectedIds})
    }

    return (
        <>
            <div className="filter-block">
                <h3 className='filter-header'>Filters:</h3>
                <button className='filter-btn reset' onClick={resetFilters}>Reset all filters</button>
                <h4 className='filter-subheader'>Sort by:</h4>
                <Select 
                    options={optionsPopularity} 
                    value={filterState.selectData.popularity} 
                    defaultValue='By popularity'
                    handleChange={(selectedPopularity) => 
                        dispatch({type: FILTER_TYPES.SELECTED_POPULARITY, payload: selectedPopularity})}
                />
                <h4 className='filter-subheader'>Release year:</h4>
                <Select 
                    options={optionsYear} 
                    value={filterState.selectData.year} 
                    defaultValue='By release date'
                    handleChange={(selectedYear) => 
                        dispatch({type: FILTER_TYPES.SELECTED_YEAR, payload: selectedYear})}
                />
                <div className="checkbox-block">
                    {isLoading
                    ? 
                    <Preloader/>
                    : 
                    <CheckBox 
                        options={filterState.filmGenres} 
                        chekedArr={filterState.chekedGenres}
                        checkedHandler={checkedHadnler}
                    />
                    }
                </div>
                <Pagination/>
            </div>
        </>
    )
}
