import { YEAR } from "./options"
export const DEFAULT = {
    EMPTY_STRING: '',
    TRUE_BOOLEAN: true,
    ZERO: 0,
    EMPTY_ARRAY: [],
    FALSE_BOOLEAN: false,
    INITIAL_YEAR: [YEAR[0], YEAR[YEAR.length - 1]],
    ONE: 1
}

export const dataUser = {
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGU0OTZlOTVkNWRkNzQ0Njk5MjU3MTBkNzM1ZjI0NiIsInN1YiI6IjY0OTJmY2U5NjVlMGEyMDEyNWZhMGU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qswz0bLbaCCtpnv6K0kahXsAJ_qGPr9A9z1jFzahzyg'
}

export const API = {
    GENRES: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
    TOP_RATED: 'top_rated',
    POPULAR: 'popular',
    DETAILS: 'https://api.themoviedb.org/3/movie/',
    IMG: 'https://image.tmdb.org/t/p/',
    USER_ID: 'https://api.themoviedb.org/3/account/account_id'
}

export const SELECT = {
    POPULAR: 'Popularity',
    RATING: 'Rating'
}

export const PATH = {
    MAIN: '/',
    FILM: '/film/:id'
}
