import Loader from "../loader/Loader.tsx";
import {useEffect, useState} from "react";
import {API_TOKEN, URL} from "../../helpers/constants.ts";

interface IGenre {
  id: number;
  name: string;
}

const defaultGenres: IGenre[] = [];

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }
};

const Genres = () => {
  const [genres, setGenres] = useState(defaultGenres)


  useEffect(() => {
    fetch(URL.genres, options)
      .then(res => res.json())
      .then(json => setGenres(json.genres))
      .catch(err => console.error('error:' + err));
  }, [])
  // const isEmpty = Boolean(genres.length)
  const listGenres = genres.map(genre =>
    <li key={genre.id}>
      <label>
        <input type='checkbox'/>  {genre.name}
      </label>
    </li>
  )

  return (
   <> {genres.length ? <ul>{listGenres}</ul> : <Loader />}</>
  )
}

export default Genres