export type FilmDetails = {
    origin_country: string,
    release_date: string,
    title: string,
    budget: number,
    runtime: number,
    poster_path: string,
    id: string
}

export type Actors = {
    name: string, 
    profile_path: string
}

export type ActorsPagination = {
    current: number,
    total: number,
    actorsPerPage: number
}