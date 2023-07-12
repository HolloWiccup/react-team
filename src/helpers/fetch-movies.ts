const MOVIES_URL = {
  GENRES: 'https://api.themoviedb.org/3/genre/movie/list?language=ru',
  GET: {
    DETAILS(id: number) {
      return `https://api.themoviedb.org/3/movie/${id}?language=ru-RU`
    },
    CREDITS(id: number){
      return `https://api.themoviedb.org/3/movie/${id}/credits?language=ru-RU`
    },
    TOP_RATED(page: number){
      return 'https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=' + page
    },
    POPULAR(page: number){
      return'https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=' + page
    },
    POSTER(path: string){
      return 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + path
    }
  }
}

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGVmYTRhOGNkNmVkZmJkNGIxMzM2YmQ4Zjk4NTVhNSIsInN1YiI6IjY0YTc5N2YyNjVjMjZjMDEyZGY5ZGVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1N7kj5yyrjsnHyCbDzmIoOreb_Xc8NB0SSZOfTkb1ps'

const fetchOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }
};

const fetchMovies = (url: string) => {
  return fetch(url, fetchOptions)
}

export {MOVIES_URL, fetchMovies, fetchOptions}