import { GenresList } from "./filterTypes"

export type State = {
    chekedGenres: number[],
    selectData: {
        popularity: string,
        year: string
    },
    filmGenres: GenresList[]
}