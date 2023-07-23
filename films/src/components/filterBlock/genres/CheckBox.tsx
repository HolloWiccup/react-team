import React from 'react'
import { FILTER_TYPES } from '../../../reducer/types'
import { Autocomplete, TextField, Checkbox } from '@mui/material';

export default function CheckBox({filters, filtersDispatch} : any): JSX.Element {
    
    return (
        <div>
            <Autocomplete
                multiple
                disableCloseOnSelect
                id="multiple-limit-tags"
                options={filters.filmGenres}
                value={filters.chekedGenres}
                onChange={(event, value) =>
                    filtersDispatch({ type: FILTER_TYPES.CHEKED, payload: value })}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                    <TextField {...params} label="Genres" placeholder="Favorites" />
                )}
                sx={{ height: '500px'}}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.name}
                    </li>
                )}
                />
        </div>
    )
}

