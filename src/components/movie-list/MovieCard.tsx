import {Card, CardMedia} from "@mui/material";
import {MOVIES_URL} from "../../helpers/fetch-movies.ts";
import {Link} from "react-router-dom";
import {IMovie} from "./movie-types.ts";

const MovieCard = ({poster_path, id, title}: IMovie) => {
  return (
    <Card sx={{height: 420, width: 280}}>
      <CardMedia
        sx={{height: 360, width: 280}}
        image={MOVIES_URL.GET.POSTER(poster_path)} />
      <Link to={'movie/' + id}>{title}</Link>
    </Card>
  )
}

export default MovieCard