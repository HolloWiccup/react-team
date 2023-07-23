export function apiTransform( type: string, page: number) {
    return `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${page}`
}
