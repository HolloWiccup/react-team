import {fetchMovies, MOVIES_URL} from "../../helpers/fetch-movies.ts";
//
// type LoaderData = {
//   id: number
// }

export const movieLoader = async ({params}: any) => {
  const responseDetails = await fetchMovies(MOVIES_URL.GET.DETAILS(params.movieId))
  const responseCredits = await fetchMovies(MOVIES_URL.GET.CREDITS(params.movieId))
  const details = await responseDetails.json()
  const credits = await responseCredits.json()
  return {details, credits}
}