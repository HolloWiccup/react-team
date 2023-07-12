import MovieCard from "./MovieCard.tsx";
import Box from "@mui/material/Box";
import {useContext, useEffect, useState} from "react";
import {fetchMovies, MOVIES_URL} from "../../helpers/fetch-movies.ts";
import {FilterContext} from "../../providers/filters/filter-context.ts";
import {IMovie} from "./movie-types.ts";

const defaultValue: IMovie[] = []
const MovieList = () => {
    const {filters} = useContext(FilterContext)
    const [movies, setMovies] = useState(defaultValue)
    useEffect(()=>{
        fetchMovies(MOVIES_URL.GET[filters.sort](filters.page))
          .then(response => response.json())
          .then(json => setMovies(json.results))
          .catch(error => console.log(error + ' message'))
    }, [filters])
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', flex: '1', gap: '20px'}}>
            {movies.map(movie => <MovieCard {...movie} key={movie.id} />)}
        </Box>

    )
}

export default MovieList