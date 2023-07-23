import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FILTER_TYPES } from '../../../reducer/types';
import { SELECT } from '../../../utils/defaultValues';

export default function SelectSort({filters, filtersDispatch} : any): JSX.Element {
    return (
        <div>
            <FormControl fullWidth margin='dense'>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filters.selected}
                        label="Sort by"
                        onChange={(e)=> filtersDispatch({type: FILTER_TYPES.SELECTED_BY, payload: e.target.value})}
                    >
                        <MenuItem value={SELECT.POPULAR}>Popularity</MenuItem>
                        <MenuItem value={SELECT.RATING}>Rating</MenuItem>
                    </Select>
                </FormControl>
        </div>
    )
}
