import React, { useContext } from 'react'
import "./style.css"
import Preloader from '../preloader'
import { FILTER_TYPES } from '../../reducer/types'
import { FiltersContext, FiltersDispatch } from '../../context/filterContext'
import CheckBox from './genres/CheckBox'
import SliderYear from './years/Slider'
import SelectSort from './sort/SelectSort'
import { useFetchGenres } from '../../hooks/useFetchGenres'
import PaginationBlock from './pagination'

export default function FilterBlock(): JSX.Element {
    const filters = useContext(FiltersContext);
    const filtersDispatch = useContext(FiltersDispatch)
    const isLoading = useFetchGenres();
    
    return (
        <>
            <div className="filter-block">
                <h3 className='filter-header'>Filters:</h3>
                <button className='filter-btn reset' onClick={()=> filtersDispatch({type: FILTER_TYPES.RESET})}>Reset all filters</button>
                <SelectSort filters={filters} filtersDispatch={filtersDispatch}/>
                <SliderYear filters={filters} filtersDispatch={filtersDispatch}/>
                <div className="checkbox-block">
                    {isLoading
                    ? 
                        <Preloader/>
                    :
                        <CheckBox filters={filters} filtersDispatch={filtersDispatch}/>
                    }
                </div>
                <PaginationBlock/>
            </div>
        </>
    )
}
