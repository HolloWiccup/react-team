import React, { useEffect, useState } from 'react'
import "./style.css"
import Select from '../select'
import { optionsPopularity, optionsYear } from '../../utils/options'
import CheckBox from '../checkbox'
import Pagination from '../pagination'
import Preloader from '../preloader'
import { DEFAULT } from '../../utils/defaultValues'

export default function FilterBlock() {
    const [filmGenres, setFilmGenres] = useState(DEFAULT.EMPTY_ARRAY);
    const [isLoading, setIsLoading] = useState<boolean>(DEFAULT.TRUE_BOOLEAN);
    const [selectData, setSelectData] = useState({year: DEFAULT.EMPTY_STRING, popularity: DEFAULT.EMPTY_STRING})
    const [chekedGenres, setCheckedGenres] = useState<string[]>([]);
    const [genreCheked, setGenreCheked] = useState(DEFAULT.FALSE_BOOLEAN)

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
                setFilmGenres(response.genres)
                setIsLoading(false)
            })
            .catch(err => console.error(err));
    }, [])

    function resetFilters() {
        setSelectData({...selectData, year: DEFAULT.EMPTY_STRING, popularity: DEFAULT.EMPTY_STRING})
        setCheckedGenres(DEFAULT.EMPTY_ARRAY);
    }


    function checkedHadnler(event: React.ChangeEvent<HTMLInputElement>) {
        const id = event.target.value;
        const isCheked = event.target.checked;
        const newSelectedIds = isCheked
            ? [...chekedGenres, id]
            : chekedGenres.filter((selectedId) => selectedId !== id);
        setCheckedGenres(newSelectedIds);
    }

    return (
        <>
            <div className="filter-block">
                <h3 className='filter-header'>Filters:</h3>
                <button className='filter-btn reset' onClick={resetFilters}>Reset all filters</button>
                <h4 className='filter-subheader'>Sort by:</h4>
                <Select 
                    options={optionsPopularity} 
                    value={selectData.popularity} 
                    defaultValue='By popularity'
                    handleChange={(selectedPopularity) => setSelectData({...selectData, popularity: selectedPopularity})}
                />
                <h4 className='filter-subheader'>Release year:</h4>
                <Select 
                    options={optionsYear} 
                    value={selectData.year} 
                    defaultValue='By release date'
                    handleChange={(selectedYear) => setSelectData({...selectData, year: selectedYear})}
                />
                <div className="checkbox-block">
                    {isLoading
                    ? 
                    <Preloader/>
                    : 
                    <CheckBox 
                        options={filmGenres} 
                        chekedArr={chekedGenres}
                        checkedHandler={checkedHadnler}
                    />
                    }
                </div>
                <Pagination/>
            </div>
        </>
    )
}
