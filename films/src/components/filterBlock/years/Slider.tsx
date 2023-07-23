import React from 'react'
import {InputLabel, Slider } from '@mui/material';
import { YEAR } from '../../../utils/options';
import { FILTER_TYPES } from '../../../reducer/types';

export default function SliderYear({filters, filtersDispatch}: any): JSX.Element {
    return (
        <div>
            <InputLabel style={{marginBottom: '30px'}} id="demo-simple-select-label" margin='dense'>Release year</InputLabel>
            <Slider
                getAriaLabel={() => 'Year'}
                value={filters.year}
                onChange={(e, value)=> filtersDispatch({type: FILTER_TYPES.SELECTED_YEAR, payload: value})}
                valueLabelDisplay="on"
                min={YEAR[0]}
                max={YEAR[YEAR.length - 1]}
                step={1}
            />
        </div>
    )
}
