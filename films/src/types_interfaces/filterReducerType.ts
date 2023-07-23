import { GenresList } from "./filterTypes"

export type State = {
    chekedGenres: number[],
    selected: string,
    filmGenres: GenresList[],
    year: number[],
}