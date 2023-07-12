import {useEffect, useState} from "react";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {CircularProgress} from "@mui/material";
import {fetchOptions, MOVIES_URL} from "../../helpers/fetch-movies.ts";

export interface IGenre {
  id: number;
  name: string;
}

const defaultGenres: IGenre[] = [];

const Genres = () => {
  const [genres, setGenres] = useState(defaultGenres)
  console.log(genres)
  useEffect(() => {
    fetch(MOVIES_URL.GENRES, fetchOptions)
      .then(response => response.json())
      .then(json => setGenres(json.genres))
      .catch(err => console.error('error:' + err));
  }, [])

  return (
    <Autocomplete
      fullWidth
      multiple
      loading={genres.length === 0}
      options={genres}
      disableCloseOnSelect
      getOptionLabel={(genre) => genre.name}
      renderOption={(props, option, {selected}) => (
        <li {...props}>
          <Checkbox style={{marginRight: 8}} checked={selected}/>
          {option.name}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params}
                   variant="standard"
                   label="Genres"
                   InputProps={{
                     ...params.InputProps,
                     endAdornment: (
                       <>
                         {genres.length === 0 ? <CircularProgress color="inherit" size={20}/> : null}
                         {params.InputProps.endAdornment}
                       </>
                     ),
                   }}
        />
      )}
    />
  )
}

export default Genres