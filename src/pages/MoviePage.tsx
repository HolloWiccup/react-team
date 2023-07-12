import {useLoaderData} from "react-router-dom";
import {IMovieCredits, IMovieDetails} from "../components/movie-list/movie-types.ts";
import Box from "@mui/material/Box";
import {
  Card,
  CardMedia,
  List,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from "@mui/material";
import {MOVIES_URL} from "../helpers/fetch-movies.ts";
import Typography from "@mui/material/Typography";

interface MovieLoader {
  credits: IMovieCredits,
  details: IMovieDetails
}

const createData = (name: string, data: string) => ({
  name, data
})

const createTableRows = (details: IMovieDetails) => {
  return [
    createData('Годы', details.release_date.split('-')[0]),
    createData('Жанры', details.genres.map(genre => genre.name).join(', ')),
    createData('Сборы', details.revenue.toString()),
    createData('Продолжительность', details.runtime.toString())
  ]
}

const MoviePage = () => {
  const {credits, details} = useLoaderData() as MovieLoader
  const year = details.release_date.split('-')[0]
  console.log(credits, details)
  const cast = credits.cast.slice(0, 5)
  return (
    <Box display='flex' gap='20px' padding='20px'>
      <Card sx={{width: 'fit-content', height: 'fit-content'}}>
        <CardMedia
          sx={{height: 450, width: 300}}
          image={MOVIES_URL.GET.POSTER(details.poster_path)}/>
      </Card>
      <Box display='flex' flexDirection='column' gap='30px'>
        <Typography variant='h3' component='h3'>{`${details.title} (${year})`}</Typography>
        <List>
          {cast.map(person => <ListItemText primary={person.name} secondary={person.character}/>)}
        </List>
        <Typography variant='h4' component='h4'>{'Details'}</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {createTableRows(details).map(row => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align='right'>{row.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default MoviePage